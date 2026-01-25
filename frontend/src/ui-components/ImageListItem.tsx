import {
  default as MuiImageListItem,
  ImageListItemProps as MuiImageListItemProps,
  ImageListItemTypeMap,
} from '@mui/material/ImageListItem';
import { ForwardedRef } from 'react';
import { typedForwardRef } from 'src/utils/types/forward-ref';

export type ImageListItemProps<
  D extends React.ElementType = ImageListItemTypeMap['defaultComponent']
> = MuiImageListItemProps<D, { component?: D }> & {};

export const ImageListItemInner = <
  D extends React.ElementType = ImageListItemTypeMap['defaultComponent']
>(
  { sx, onClick, ...props }: ImageListItemProps<D>,
  ref: ForwardedRef<HTMLLIElement>
) => {
  return (
    <MuiImageListItem
      sx={{
        ...(onClick
          ? {
              '&:hover': {
                opacity: 0.6,
                cursor: 'pointer',
              },
            }
          : {}),
        ...sx,
      }}
      {...props}
      ref={ref}
      onClick={onClick}
    ></MuiImageListItem>
  );
};

export const ImageListItem = typedForwardRef(ImageListItemInner);
