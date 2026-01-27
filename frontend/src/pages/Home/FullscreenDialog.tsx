import CloseIcon from '@mui/icons-material/Close';
import useId from '@mui/material/utils/useId';
import { TransitionProps } from 'notistack';
import { forwardRef, useEffect, useRef } from 'react';
import { Trip } from 'src/pages/Home/data';
import {
    buildImgSrc,
    Dialog,
    DialogContent,
    IconButton,
    Slide,
    Stack,
    Typography,
} from 'src/ui-components';

// global variable for all FullscreenDialogs
const openedDialogIds: string[] = [];

const Transition = forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction='up' ref={ref} {...props} />;
});

export type FullscreenDialogProps = {
  onClose: () => void;
  open: boolean;
  data: Trip;
};

export const FullscreenDialog = ({ open, onClose, data, ...props }: FullscreenDialogProps) => {
  const id = useId();
  const openedOnceRef = useRef(false);

  useEffect(() => {
    if (open) {
      window.history.pushState({ id }, '');
      openedDialogIds.push(id!);
    }
  }, [open]);

  useEffect(() => {
    if (!open) return;

    window.addEventListener('popstate', (e) => {
      const lastId = openedDialogIds[openedDialogIds.length - 1];
      if (lastId === id) {
        onClose();
        openedDialogIds.pop();
      }
    });
    return () => {
      window.removeEventListener('popstate', onClose);
    };
  }, [open]);

  const closeWithHistoryBack = () => {
    window.history.back();
    onClose();
  };

  if (open) openedOnceRef.current = true;

  return (
    <Dialog
      open={open}
      fullScreen
      TransitionComponent={Transition}
      onClose={closeWithHistoryBack}
      //   keepMounted={openedOnceRef.current && keepMounted}
      {...props}
    >
      <Stack sx={{ p: 1, pl: 2, background: '#fff1f7', justifyContent: 'space-between' }}>
        <Stack sx={{ alignItems: 'center' }}>
          <img
            style={{ width: 30, aspectRatio: '1/1', borderRadius: '50%' }}
            src={buildImgSrc(data.imgSrc)}
            alt=''
          />
          <Typography sx={{ ml: 1 }}>{data.label}</Typography>
        </Stack>
        <IconButton onClick={closeWithHistoryBack}>
          <CloseIcon />
        </IconButton>
      </Stack>
      {/* <AppBar sx={{ position: 'sticky' }}>
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Stack alignItems='center'>
            <IconButton color='inherit' onClick={closeWithHistoryBack}>
              <Icon name='close' />
            </IconButton>
            {title && (
              <Typography ml={1} fontSize={18}>
                {title}
              </Typography>
            )}
          </Stack>
          <Stack alignItems='center'>
            {onClear && (
              <Button color='inherit' variant='text' onClick={onClear}>
                WYCZYŚĆ
              </Button>
            )}
            {onSave && (
              <Button
                type='submit'
                color='inherit'
                variant='text'
                disabled={saveDisabled}
                onClick={onSave}
              >
                {saveButtonText ? saveButtonText.toUpperCase() : 'ZAPISZ'}
              </Button>
            )}
          </Stack>
        </Toolbar>
      </AppBar> */}
      <DialogContent sx={{ textAlign: 'center' }}>{data.dialogContent}</DialogContent>
    </Dialog>
  );
};
