import emailjs from '@emailjs/browser';
import { useState } from 'react';
import { FormField } from 'src/components/controlled-form-field/FormField';
import { useAppForm } from 'src/hooks/useAppForm';
import { Box, Button, Icon, Typography } from 'src/ui-components';
import { environment } from 'src/utils/environment-utils';
import { ValidationMessages } from 'src/utils/helpers/validation-messages';
import { ValidationPatterns } from 'src/utils/helpers/validation-patterns';
import { Validators } from 'src/utils/helpers/validators';

const emailConfig =
  environment.name === 'local'
    ? {
        serviceId: 'service_lpjkvk9',
        templateId: 'template_w1qdsne',
        publicKey: 'hqiEorBPIatcloHhr',
      }
    : {
        serviceId: 'service_lpjkvk9',
        templateId: 'template_w1qdsne',
        publicKey: 'hqiEorBPIatcloHhr',
      };

type FormData = {
  email: string;
  name: string;
  message: string;
};

export const ContactForm = () => {
  const { control, handleSubmit } = useAppForm<FormData>();
  const [isSendSuccess, setIsSendSuccess] = useState(false);
  const [inProgress, setInProgress] = useState(false);

  const onSubmit = async (data: FormData) => {
    setInProgress(true);
    emailjs
      .send(
        emailConfig.serviceId,
        emailConfig.templateId,
        {
          title: data.message.slice(0, 15) + '...',
          name: data.name,
          message: data.message,
          email: data.email,
          time: new Date().toLocaleTimeString(),
        },
        {
          publicKey: emailConfig.publicKey,
        }
      )
      .then(
        () => {
          setInProgress(false);
          setIsSendSuccess(true);
        },
        (error) => {
          setInProgress(false);
          setIsSendSuccess(false);
        }
      );
  };

  return (
    <Box component={'form'} sx={{ p: 3 }} onSubmit={handleSubmit(onSubmit)}>
      {isSendSuccess ? (
        <Box sx={{ textAlign: 'center', my: 6 }}>
          <Icon name='check_circle_outlined' color='success' sx={{ fontSize: 50 }} />
          <Typography mt={2}>
            Dziękuję za wysłanie wiadomości! Odpowiem najszybciej jak to tylko możliwe.
          </Typography>
        </Box>
      ) : (
        <>
          <FormField
            control={control}
            element='text'
            label='Adres e-mail'
            name='email'
            rules={{
              pattern: {
                value: ValidationPatterns.email,
                message: ValidationMessages.email,
              },
              validate: Validators.requiredText,
            }}
          />
          <FormField
            control={control}
            element='text'
            label='Imię i nazwisko / nazwa firmy'
            name='name'
            rules={{ validate: Validators.requiredText }}
          />
          <FormField
            control={control}
            element='text'
            label='Twoja wiadomość'
            name='message'
            rules={{ validate: Validators.requiredText }}
            ElementProps={{ multiline: true }}
          />
          <Button
            type='submit'
            fullWidth
            sx={{ textTransform: 'uppercase', mt: 3 }}
            disabled={inProgress}
          >
            Wyślij
          </Button>
        </>
      )}
    </Box>
  );
};
