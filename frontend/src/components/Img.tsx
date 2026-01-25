import { useMemo } from 'react';
import { Box, BoxProps } from 'src/ui-components';

export type ImgProps = Omit<BoxProps<'img'>, 'ref'> & {
  src: string;
};

export const Img = ({ src, ...props }: ImgProps) => {
  const alt = useMemo(() => src.replace('/images/', ''), [src]);
  return <Box component='img' src={src} alt={alt} loading='lazy' {...props} />;
};
