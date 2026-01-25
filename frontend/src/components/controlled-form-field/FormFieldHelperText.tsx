import { ReactNode } from 'react';
import { ControllerFieldState } from 'react-hook-form';
import { FormHelperText } from 'src/ui-components';
import { WithNever } from 'src/utils/types/props';

export type FormFieldHelperTextProps =
  | WithNever<
      {
        fieldState: ControllerFieldState;
        removeSpaceForHelperText: boolean | undefined;
        helperText: ReactNode;
      },
      'isAdditional'
    >
  | WithNever<
      {
        isAdditional: true;
        helperText: ReactNode;
      },
      'fieldState' | 'removeSpaceForHelperText'
    >;
export const FormFieldHelperText = ({
  isAdditional,
  helperText,
  removeSpaceForHelperText,
  fieldState,
}: FormFieldHelperTextProps) => {
  if (isAdditional) {
    if (helperText) return <FormHelperText>{helperText}</FormHelperText>;
    return null;
  }

  if (!removeSpaceForHelperText || fieldState.error) {
    return (
      <FormHelperText sx={{ mt: 0 }}>
        {fieldState.error?.message ?? helperText ?? ' '}
      </FormHelperText>
    );
  }

  return null;
};
