import { Image } from './image';

export enum ImageOrientation {
  Vertical,
  Horizontal,
  Unknown
}

export type ImagesSection = {
  id: string;
  name: string;
  images: Image[];
  orientation: ImageOrientation;
  isSortable: boolean;
  cols: 3 | 4;
};
