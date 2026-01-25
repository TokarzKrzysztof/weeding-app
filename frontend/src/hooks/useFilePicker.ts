import { useSnackbar } from 'notistack';
import { useState } from 'react';

export const useFilePicker = () => {
  const [files, setFiles] = useState<File[]>([]);
  const { enqueueSnackbar } = useSnackbar();

  const isImage = (file: File): boolean => {
    const imageTypes = ['image/jpeg', 'image/png'];
    return imageTypes.includes(file.type);
  };

  const showPicker = (params: { accept: 'image/*'; multiple?: boolean }) => {
    return new Promise<File[]>((resolve) => {
      const input = document.createElement('input');
      input.type = 'file';
      if (params.multiple) {
        input.multiple = true;
      }
      input.accept = params.accept;
      input.addEventListener('change', () => {
        const result = Array.from(input.files!);
        if (params.accept === 'image/*' && result.some((x) => !isImage(x))) {
          enqueueSnackbar({
            variant: 'error',
            message: 'Wybrany plik nie jest zdjęciem',
          });
          return;
        }

        setFiles(result);
        resolve(result);
      });

      input.click();
      input.remove();
    });
  };

  const clearFile = () => {
    setFiles([]);
  };

  return { files, showPicker, clearFile };
};
