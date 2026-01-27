using Admin.Models;
using System.Reflection;
using System.Text;
using System.Text.RegularExpressions;

namespace Admin.Helpers
{
    public class FolderHelper
    {
        public static string GetFrontendRootPath()
        {
            string currentDir = Directory.GetCurrentDirectory(); // or AppContext.BaseDirectory
            string parentDir = Directory.GetParent(currentDir)!.FullName;
            string result = Path.Combine(parentDir, "frontend");

            return result;
        }

        public static List<Image> GenerateInSequence(int count, string prefix, string extension)
        {
            return new int[count].Select((x, i) => new Image($"{prefix}{i + 1}.{extension}")).ToList();
        }

        public static List<Folder> FlattenFolders(List<Folder> folders)
        {
            var result = new List<Folder>();

            foreach (Folder folder in folders)
            {
                result.Add(folder);
                if (folder.Children != null && folder.Children.Count > 0)
                {
                    result.AddRange(FlattenFolders(folder.Children));
                }
            }

            return result;
        }

        public static List<Image> FlattenImages(List<Folder> foldersFlat)
        {
            var result = new List<Image>();

            foreach (Folder folder in foldersFlat)
            {
                foreach (ImagesSection section in folder.Sections)
                {
                    result.AddRange(section.Images);
                }
            }

            if (result.DistinctBy(x => x.Path).Count() != result.Count())
            {
                var exceptions = result.Except(result.DistinctBy(x => x.Path)).Select(x => x.Path).ToList();
                throw new Exception("Duplicated images!");
            }
            return result;
        }

        public static List<ImagesSection> FlattenImagesSections(List<Folder> foldersFlat)
        {
            var result = new List<ImagesSection>();

            foreach (Folder folder in foldersFlat)
            {
                foreach (ImagesSection section in folder.Sections)
                {
                    result.Add(section);
                }
            }

            return result;
        }

        public static void SetImagePaths(List<Folder> folders, string currentPath = "")
        {
            foreach (Folder folder in folders)
            {
                string fullPath = string.IsNullOrEmpty(currentPath) ? folder.Name : $"{currentPath}/{folder.Name}";

                foreach (ImagesSection section in folder.Sections)
                {
                    foreach (Image image in section.Images)
                    {
                        image.Path = $"{fullPath}/{image.FileName}";
                    }
                }

                if (folder.Children != null && folder.Children.Count > 0)
                {
                    SetImagePaths(folder.Children, fullPath);
                }
            }
        }

        public static void WriteTypescriptFile(List<ImagesSection> sectionsFlat)
        {
            List<string> lines = [];

            AddAsTypescriptClass(typeof(HeaderImgCount), lines);
            AddAsTypescriptClass(typeof(HomeOpinionsImgCount), lines);
            AddAsTypescriptClass(typeof(OfferImgCount), lines);
            AddAsTypescriptClass(typeof(PortfolioImgCount), lines);

            lines.Add("export type ImagePath =");
            foreach (ImagesSection section in sectionsFlat)
            {
                var images = section.Images.ToList();
                for (int i = 0; i < images.Count; i++)
                {
                    // replace with {number}
                    // string line = $"| `{Regex.Replace(images[i].Path, @"\d+", "${number}")}`";

                    string line = $"| `{images[i].Path}`";
                    lines.Add(line);

                    if (section.HasFullSizeImages)
                    {
                        string toAdd = $"{Path.GetDirectoryName(images[i].Path)!.Replace("\\", "/")}/{Folder.FullSizeImagesFolderName}/{images[i].FileName}";

                        string nextLine = $"| `{toAdd}`";
                        lines.Add(nextLine);
                    }
                }
            }



            // Navigate to sibling folder "frontend"
            string outputPath = Path.Combine(GetFrontendRootPath(), "src", "_generated.ts");

            // Write file
            File.WriteAllText(outputPath, string.Join("\n", lines));
        }

        public static void AddAsTypescriptClass(Type obj, List<string> lines)
        {
            FieldInfo[] fields = obj.GetFields(BindingFlags.Static | BindingFlags.Public);

            lines.Add($"export class {obj.Name} {{");
            foreach (var field in fields)
            {
                lines.Add($"   static readonly {field.Name} = {field.GetValue(obj)};");
            }
            lines.Add("}");
        }
    }
}
