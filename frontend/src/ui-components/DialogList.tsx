import { ReactNode } from 'react';
import { DialogContentText } from './DialogContentText';

export type DialogListProps = {
  children: ReactNode[];
};
export const DialogList = ({ children }: DialogListProps) => {
  return (
    <DialogContentText component='ul' pl={2} my={2}>
      {children}
    </DialogContentText>
  );
};
