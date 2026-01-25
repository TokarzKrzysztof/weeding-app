import { ImagePath } from "src/_generated";

export type Image = {
  id: string;
  path: ImagePath;
  fileName: string;
  file?: File;
};
