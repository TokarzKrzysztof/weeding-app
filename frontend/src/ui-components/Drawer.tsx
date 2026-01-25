import { default as MuiDrawer, DrawerProps as MuiDrawerProps } from '@mui/material/Drawer';

export type DrawerProps = MuiDrawerProps & {};

export const Drawer = ({ ...props }: DrawerProps) => <MuiDrawer {...props}></MuiDrawer>;
