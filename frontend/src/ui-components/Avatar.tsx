import {
  AvatarProps as MuiAvatarProps,
  AvatarTypeMap,
  default as MuiAvatar
} from '@mui/material/Avatar';
import { StaticImage } from 'src/ui-components';
import { Icon } from 'src/ui-components/Icon';

export type AvatarProps<D extends React.ElementType = AvatarTypeMap['defaultComponent']> = Omit<
  MuiAvatarProps<D, { component?: D }>,
  'src'
> & {
  size: number;
  src: string | null | undefined;
  isDelete?: boolean;
  isAnonymous?: boolean;
};

export const Avatar = <D extends React.ElementType = AvatarTypeMap['defaultComponent']>({
  size,
  src,
  isDelete,
  isAnonymous,
  sx,
  ...props
}: AvatarProps<D>) => {
  const getImage = () => {
    if (isDelete) return <Icon name='close' sx={{ fontSize: size }} />;
    if (isAnonymous) return <StaticImage name='anonymous.png' />;
    // must be undefined, otherwise person icon won`t be displayed
    return undefined;
  };
  
  return (
    <MuiAvatar
      sx={{ width: size, height: size, opacity: isDelete ? 0.5 : 1, ...sx }}
      src={src ?? undefined}
      {...props}
    >
      {getImage()}
    </MuiAvatar>
  );
};
