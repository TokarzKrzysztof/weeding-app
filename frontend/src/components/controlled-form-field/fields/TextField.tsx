import { useMemo } from 'react';
import { FieldPath, FieldValues } from 'react-hook-form';
import { FormFieldHelperText } from 'src/components/controlled-form-field/FormFieldHelperText';
import { TextField as UiTextField, TextFieldProps as UiTextFieldProps } from 'src/ui-components';
import { ControlledFieldProps } from 'src/utils/types/controlled-field-props';

export type TextFieldProps = Omit<UiTextFieldProps<'standard'>, 'variant' | 'ref' | 'value'>;

export const TextField = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
>({
  label,
  controller: { field, fieldState },
  info,
  helperText,
  onChange,
  multiline,
  ...props
}: TextFieldProps & ControlledFieldProps<TFieldValues, TName>) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    field.onChange(e);
    onChange && onChange(e);
  };

  const multilineProps = useMemo(() => {
    if (!multiline) return null;
    return {
      multiline: true,
      minRows: 7,
    };
  }, [multiline]);

  return (
    <>
      <UiTextField
        fullWidth
        variant='outlined'
        label={label}
        name={field.name}
        error={!!fieldState.error}
        helperText={fieldState.error?.message ?? (!helperText ? ' ' : undefined)}
        inputRef={field.ref}
        value={field.value ?? ''}
        onChange={handleChange}
        size='small'
        {...multilineProps}
        {...props}
      ></UiTextField>
      <FormFieldHelperText isAdditional helperText={helperText} />
    </>
  );
};
