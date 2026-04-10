using ImageMagick;
using Microsoft.AspNetCore.Mvc;
using Admin.Helpers;
using Admin.Models;
using static System.Net.Mime.MediaTypeNames;

namespace Admin.Controllers
{
    [ApiController]
    [Route("api/[controller]/[action]")]
    public class FolderController : ControllerBase
    {
        [HttpGet]
        public async Task<IActionResult> GetFoldersTree()
        {
            return Ok(Folder.FoldersTree);
        }

        [HttpPut]
        public async Task<IActionResult> EditImages([FromForm] List<ImageUpload> data, [FromQuery] Guid sectionId)
        {
            var section = Folder.ImagesSectionsFlat.Single(x => x.Id == sectionId);
            var imagesRoot = Path.Combine(FolderHelper.GetFrontendRootPath(), "public", "images");
            string workingDirectory = Path.Combine(imagesRoot, Path.GetDirectoryName(section.Images[0].Path)!);

            ProcessAll(data, section, workingDirectory, !section.IsUnchanged);
            if (section.HasFullSizeImages)
            {
                ProcessAll(data, section, Path.Combine(workingDirectory, Folder.FullSizeImagesFolderName), false);
            }

            return Ok();
        }

        private void ProcessAll(List<ImageUpload> data, ImagesSection section, string workingDirectory, bool useCompression)
        {
            var folderImages = section.Images;

            if (!Directory.Exists(workingDirectory))
            {
                Directory.CreateDirectory(workingDirectory);
            }

            // Step 1: Rename all target files to temp names to avoid conflicts
            foreach (var image in folderImages)
            {
                string currentPath = Path.Combine(workingDirectory, image.FileName);
                string tempPath = Path.Combine(workingDirectory, Path.GetFileNameWithoutExtension(image.FileName) + "_temp" + Path.GetExtension(image.FileName));

                if (System.IO.File.Exists(currentPath))
                {
                    System.IO.File.Move(currentPath, tempPath);
                }
                else
                {
                    using var stream = System.IO.File.Create(tempPath);
                }
            }

            // Step 2: Rename files from temp back to ordered names: 1.jpg, 2.jpg, ...
            for (int i = 0; i < folderImages.Count; i++)
            {
                var oldImg = folderImages[i];
                var newImg = data[i];

                string tempPath = Path.Combine(workingDirectory, Path.GetFileNameWithoutExtension(newImg.FileName) + "_temp" + Path.GetExtension(newImg.FileName));
                if (!System.IO.File.Exists(tempPath)) throw new Exception($"File with path {tempPath} not exist!");

                string newPath = Path.Combine(workingDirectory, oldImg.FileName);

                if (newImg.File != null)
                {
                    using (MagickImage image = new MagickImage(newImg.File.OpenReadStream()))
                    {
                        if (useCompression)
                        {
                            CompressImage(image, section);
                        }

                        image.Write(newPath);
                        System.IO.File.Delete(tempPath);
                    }
                }
                else
                {
                    System.IO.File.Move(tempPath, newPath);
                }
            }
        }

        private void CompressImage(MagickImage image, ImagesSection section)
        {
            if (section.ImageSize == ImageSize.Small)
            {
                image.Resize(300, 300);
                image.Quality = 100;
            }
            else if (section.ImageSize == ImageSize.Large)
            {
                image.Resize(2000, 2000);
                image.Quality = 75;
            }
        }
    }
}
