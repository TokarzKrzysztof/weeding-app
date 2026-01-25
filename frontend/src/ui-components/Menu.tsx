import { useTheme } from '@mui/material';
import { default as MuiMenu, MenuProps as MuiMenuProps } from '@mui/material/Menu';
import { ReactNode, RefObject, useEffect, useState } from 'react';

export type MenuProps = Omit<MuiMenuProps, 'open' | 'children'> & {
  anchorRef: RefObject<HTMLElement>;
  children: ReactNode | ((open: boolean) => ReactNode);
  trigger?: 'click' | 'hover';
};
export const Menu = ({ children, anchorRef, trigger = 'click', ...props }: MenuProps) => {
  const theme = useTheme();
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };

  useEffect(() => {
    if (anchorRef.current) {
      if (trigger === 'click') {
        anchorRef.current.addEventListener('click', () => {
          handleOpen();
        });
      } else {
        anchorRef.current.addEventListener('mouseover', () => {
          handleOpen();
        });
        anchorRef.current.addEventListener('mouseleave', () => {
          handleClose();
        });
        anchorRef.current.style.zIndex = (theme.zIndex.modalHover + 1).toString();
      }
    }
  }, [anchorRef.current, trigger]);

  return (
    <MuiMenu
      MenuListProps={
        trigger === 'hover'
          ? {
              onMouseLeave: handleClose,
              // do not hide menu on mouse leave button
              onMouseOver: () => setTimeout(handleOpen),
            }
          : undefined
      }
      anchorEl={anchorRef.current}
      open={open}
      onClose={handleClose}
      slotProps={
        trigger === 'hover'
          ? {
              root: { sx: { zIndex: theme.zIndex.modalHover } },
            }
          : undefined
      }
      {...props}
    >
      <div onClick={handleClose}>{typeof children === 'function' ? children(open) : children}</div>
    </MuiMenu>
  );
};
