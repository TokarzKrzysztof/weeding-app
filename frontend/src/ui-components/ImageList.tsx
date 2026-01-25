import {
  default as MuiImageList,
  ImageListProps as MuiImageListProps,
  ImageListTypeMap
} from '@mui/material/ImageList';

export type ImageListProps<D extends React.ElementType = ImageListTypeMap['defaultComponent']> =
  MuiImageListProps<D, { component?: D }> & {};

export const ImageList = <D extends React.ElementType = ImageListTypeMap['defaultComponent']>({
  ...props
}: ImageListProps<D>) => <MuiImageList {...props}></MuiImageList>;
