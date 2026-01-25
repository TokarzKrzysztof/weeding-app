import {
    FieldValues,
    useForm,
    UseFormHandleSubmit,
    UseFormProps,
    UseFormReturn
} from 'react-hook-form';

export type UseAppFormReturn<
  TFieldValues extends FieldValues = FieldValues,
  TContext = any,
  TTransformedValues extends FieldValues | undefined = undefined
> = UseFormReturn<Partial<TFieldValues>, TContext, TTransformedValues>;

export const useAppForm = <
  TFieldValues extends FieldValues = FieldValues,
  TContext = any,
  TTransformedValues extends FieldValues | undefined = undefined
>(
  props?: UseFormProps<Partial<TFieldValues>, TContext>
) => {
  // can have undefined values on first render, that`s why we are using partial type
  const form = useForm<Partial<TFieldValues>, TContext, TTransformedValues>(props);
  return {
    ...form,
    handleSubmit: form.handleSubmit as UseFormHandleSubmit<TFieldValues, TTransformedValues>,
  };
};
