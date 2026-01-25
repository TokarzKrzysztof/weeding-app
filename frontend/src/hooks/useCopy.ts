import { useSnackbar } from 'notistack';

export const useCopy = () => {
  const { enqueueSnackbar } = useSnackbar();

  const handleCopy = (text: string) => {
    window.navigator.clipboard.writeText(text).then(() => {
      enqueueSnackbar({
        variant: 'success',
        message: 'Skopiowano do schowka',
      });
    });
  };

  return { handleCopy };
};
