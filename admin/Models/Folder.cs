using Admin.Helpers;

namespace Admin.Models
{
    public class Folder
    {
        public Guid Id { get; set; } = Guid.NewGuid();
        public string Name { get; set; }
        public List<Folder> Children { get; set; } = [];
        public List<ImagesSection> Sections { get; set; } = [];

        public Folder(string name)
        {
            Name = name;
        }

        public static string FullSizeImagesFolderName = "pelnowymiarowe";

        public static List<Folder> FoldersFlat = new List<Folder>();
        public static List<Image> ImagesFlat = new List<Image>();
        public static List<ImagesSection> ImagesSectionsFlat = new List<ImagesSection>();

        private static List<Image> _allFlags =
        [
            new Image("grecja.png"),
            new Image("japonia.png"),
            new Image("polska.png"),
            new Image("korea.png"),
            new Image("czechy.png"),
            new Image("turcja.png"),
            new Image("tajlandia.png"),
            new Image("wlochy.png"),
            new Image("dania.png"),
        ];
        private static List<Image> _allMiniatures =
        [
            new Image("ateny.jpg"),
            new Image("rodos.jpg"),
            new Image("santorini.jpg"),
            new Image("tokio.jpg"),
            new Image("osaka.jpg"),
            new Image("kyoto.jpg"),
        ];


        public static List<Folder> FoldersTree = new List<Folder>()
        {
            new Folder("flagi")
            {
                Sections = [
                    new ImagesSection("Wszystkie flagi") {
                        Images = _allFlags,
                        IsUnchanged = true,
                        IsSortable = false,
                        Orientation = ImageOrientation.Unknown,
                        Cols = Columns.Three,
                    }
                ]
            },
            new Folder("miniaturki")
            {
                Sections = [
                    new ImagesSection("Wszystkie miniaturki") {
                        Images = _allMiniatures,
                        IsUnchanged = true,
                        IsSortable = false,
                        Orientation = ImageOrientation.Unknown,
                        Cols = Columns.Three,
                    }
                ]
            }
            //new Folder("glowna")
            //{
            //    Sections = [
            //        ..GetHeadersSections(HeaderImgCount.Home),
            //        new ImagesSection("O mnie", [new Image("o-mnie.jpg")]),
            //        new ImagesSection("Oferta", [new Image("oferta-kulinarna.jpg"), new Image("oferta-produktowa.jpg"), new Image("oferta-reportazowa.jpg")]),
            //    ],
            //    Children = [
            //        new Folder("opinie") {
            //            Sections = [
            //                 new ImagesSection("Zdjęcia do opinii - melt me tender", FolderHelper.GenerateInSequence(HomeOpinionsImgCount.MeltMeTender, "melt-me-tender", "jpg")) {
            //                     HasFullSizeImages = true,
            //                 },
            //                 new ImagesSection("Zdjęcia do opinii - argasińscy", FolderHelper.GenerateInSequence(HomeOpinionsImgCount.Argasinscy, "argasinscy", "jpg")) {
            //                     HasFullSizeImages = true,
            //                 },
            //                 new ImagesSection("Zdjęcia do opinii - Paulina Papież-Rutkowska", FolderHelper.GenerateInSequence(HomeOpinionsImgCount.PaulinaPapiez, "paulina-papiez", "jpg")) {
            //                     HasFullSizeImages = true,
            //                 },
            //            ]
            //        }
            //    ]
            //},


            //new Folder("kontakt")
            //{
            //    Sections = [
            //        ..GetHeadersSections(HeaderImgCount.Others)
            //    ],
            //},


            //new Folder("loga-klientow")
            //{
            //    Sections = [
            //       new ImagesSection("Wszystkie loga", [new Image("argasinscy.png"), new Image("multipak.png"), new Image("odlotowe-party.png"), new Image("melt-me-tender.png")]) {
            //           Orientation = ImageOrientation.Unknown,
            //           IsUnchanged = true,
            //           IsSortable = false
            //       }
            //    ],
            //},


            //new Folder("logo")
            //{
            //    Sections = [
            //       new ImagesSection("Wszystkie loga", [
            //           new Image("okragle-czarne.png"),  new Image("okragle-biale.png"), new Image("okragle-kolor.png"),
            //           new Image("poziome-czarne.png"), new Image("poziome-biale.png"), new Image("poziome-kolor.png")
            //       ]) {
            //           Orientation = ImageOrientation.Unknown,
            //           IsUnchanged = true,
            //           IsSortable = false
            //          }
            //    ],
            //},


            //new Folder("o-mnie")
            //{
            //    Sections = [
            //       ..GetHeadersSections(HeaderImgCount.Others),
            //       new ImagesSection("Sekcja 1", [new Image("sekcja-1.jpg")]),
            //       new ImagesSection("Sekcja 2", FolderHelper.GenerateInSequence(AboutMeImgCount.Section2, "sekcja-2-", "jpg")),
            //       new ImagesSection("Sekcja 3", [new Image("sekcja-3.jpg")]),
            //       new ImagesSection("Sekcja 4", FolderHelper.GenerateInSequence(AboutMeImgCount.Section4, "sekcja-4-", "jpg")),
            //       new ImagesSection("Sekcja 5", [new Image("sekcja-5.jpg")]),
            //    ],
            //},


            //new Folder("oferta")
            //{
            //    Sections = [
            //        ..GetHeadersSections(HeaderImgCount.Others)
            //    ],
            //    Children = [
            //       new Folder("kulinarna") {
            //           Sections = [
            //                new ImagesSection("Zdjęcia na dole", FolderHelper.GenerateInSequence(OfferImgCount.Food, "", "jpg")) {
            //                     HasFullSizeImages = true,
            //                }
            //           ]
            //       },
            //       new Folder("produktowa") {
            //           Sections = [
            //                new ImagesSection("Zdjęcia na dole", FolderHelper.GenerateInSequence(OfferImgCount.Product, "", "jpg")) {
            //                     HasFullSizeImages = true,
            //                }
            //           ]
            //       },
            //       new Folder("reportazowa") {
            //           Sections = [
            //                new ImagesSection("Zdjęcia na dole", FolderHelper.GenerateInSequence(OfferImgCount.Reportage, "", "jpg")) {
            //                     HasFullSizeImages = true,
            //                }
            //           ]
            //       },
            //       new Folder("rodzaj-fotografii") {
            //           Sections = [
            //                new ImagesSection("Kafelki do wyboru rodzaju fotografii", [new Image("kulinarna.jpg"), new Image("produktowa.jpg"), new Image("reportazowa.jpg")])
            //           ]
            //       },
            //    ]
            //},


            //new Folder("portfolio")
            //{
            //    Sections = [
            //        ..GetHeadersSections(HeaderImgCount.Others)
            //    ],
            //    Children = [
            //       new Folder("kulinarna") {
            //           Sections = [
            //                new ImagesSection("Zdjęcia portfolio", FolderHelper.GenerateInSequence(PortfolioImgCount.Food, "", "jpg")) {
            //                    HasFullSizeImages = true,
            //                    Cols = Columns.Four
            //                }
            //           ]
            //       },
            //       new Folder("produktowa") {
            //           Sections = [
            //                new ImagesSection("Zdjęcia portfolio", FolderHelper.GenerateInSequence(PortfolioImgCount.Product, "", "jpg")) {
            //                    HasFullSizeImages = true,
            //                    Cols = Columns.Four
            //                }
            //           ]
            //       },
            //       new Folder("reportazowa") {
            //           Sections = [
            //                new ImagesSection("Zdjęcia portfolio", FolderHelper.GenerateInSequence(PortfolioImgCount.Reportage, "", "jpg")) {
            //                    HasFullSizeImages = true,
            //                    Cols = Columns.Four
            //                }
            //           ]
            //       },
            //       new Folder("rodzaj-fotografii") {
            //           Sections = [
            //                new ImagesSection("Kafelki do wyboru rodzaju fotografii", [new Image("kulinarna.jpg"), new Image("produktowa.jpg"), new Image("reportazowa.jpg")])
            //           ]
            //       },
            //    ]
            //},
        };
    }
}
