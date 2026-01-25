import { ValidationMessages } from 'src/utils/helpers/validation-messages';

export class Validators {
  static readonly requiredText = {
    required: (value: string | null | undefined) => {
      if (!value) return ValidationMessages.required;
      if (typeof value === 'string' && !value.trim()) {
        return ValidationMessages.required;
      }
    },
  };
}
