namespace Admin.Models
{
    public enum ImageOrientation
    {
        Vertical,
        Horizontal,
        Unknown
    }
    
    public enum ImageSize
    {
        Small,
        Large
    }  
    
    public enum Columns
    {
        Three = 3,
        Four = 4
    }

    public class ImagesSection
    {
        public Guid Id { get; set; } = Guid.NewGuid();
        public ImageOrientation Orientation { get; set; } = ImageOrientation.Vertical;
        public ImageSize ImageSize { get; set; } = ImageSize.Small;
        public Columns Cols { get; set; } = Columns.Three;
        public bool IsSortable { get; set; } = true;
        public bool HasFullSizeImages { get; set; } = false;

        public string Name { get; set; }
        public List<Image> Images { get; set; } = [];
        public bool IsUnchanged { get; set; }


        public ImagesSection(string name)
        {
            Name = name;
        }
    }
}
