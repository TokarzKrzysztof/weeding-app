import {
  Control,
  FieldPath,
  FieldValues,
  useController,
  UseControllerProps
} from 'react-hook-form';
import { TextField, TextFieldProps } from 'src/components/controlled-form-field/fields/TextField';
import { ControlledFieldProps } from 'src/utils/types/controlled-field-props';

export type FormFieldProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
> = {
  control: Control<TFieldValues>;
  name: TName;
  rules?: UseControllerProps<TFieldValues, TName>['rules'];
  shouldUnregister?: boolean;
} & Omit<ControlledFieldProps<TFieldValues, TName>, 'controller'> & {
    element: 'text';
    ElementProps?: TextFieldProps;
  };

export const FormField = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
>({
  control,
  name,
  rules,
  shouldUnregister,
  element,
  ElementProps,
  ...props
}: FormFieldProps<TFieldValues, TName>) => {
  const controller = useController({ control, name, rules, shouldUnregister });

  if (element === 'text') {
    return <TextField controller={controller} {...props} {...ElementProps} />;
  }
  return null;
};
