import { ReactNode } from 'react';
import { FieldPath, FieldValues, UseControllerReturn } from 'react-hook-form';

export type ControlledFieldProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
> = {
  controller: UseControllerReturn<TFieldValues, TName>;
  label?: ReactNode;
  info?: ReactNode;
  hasTopSpacing?: boolean;
  hasBottomSpacing?: boolean;
  removeSpaceForHelperText?: boolean;
  helperText?: ReactNode;
};
