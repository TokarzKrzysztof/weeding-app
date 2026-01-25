import {
  default as MuiDialogContent,
  DialogContentProps as MuiDialogContentProps
} from '@mui/material/DialogContent';
import { ForwardedRef } from 'react';
import { typedForwardRef } from 'src/utils/types/forward-ref';

export type DialogContentProps = MuiDialogContentProps & {};

const DialogContentInner = ({ ...props }: DialogContentProps, ref: ForwardedRef<HTMLElement>) => (
  <MuiDialogContent {...props} ref={ref}></MuiDialogContent>
);

export const DialogContent = typedForwardRef(DialogContentInner);
