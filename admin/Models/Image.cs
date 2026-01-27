namespace Admin.Models
{
    public class Image
    {
        public Guid Id { get; set; }
        public string Path { get; set; }
        public string FileName { get; set; }

        public Image(string fileName)
        {
            Id = Guid.NewGuid();
            FileName = fileName;
        }
    }

    public class ImageUpload
    {
        public Guid Id { get; set; }
        public string Path { get; set; }
        public string FileName { get; set; }
        public IFormFile? File { get; set; }
    }
}
