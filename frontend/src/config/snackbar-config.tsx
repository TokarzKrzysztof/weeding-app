import { styled } from '@mui/material';
import { MaterialDesignContent, SnackbarProviderProps } from 'notistack';
import { SnackbarCloseButton } from 'src/components/SnackbarCloseButton';

const StyledMaterialDesignContent = styled(MaterialDesignContent)({
  flexWrap: 'nowrap',
});

const StyledDefaultSnackbar = styled(StyledMaterialDesignContent)(({theme}) => ({
  background: '#fff1f7',
  color: 'inherit'
}));

export const snackbarConfig: SnackbarProviderProps = {
  maxSnack: 3,
  anchorOrigin: { horizontal: 'left', vertical: 'bottom' },
  action: (snackbarKey) => <SnackbarCloseButton snackbarKey={snackbarKey} />,
  preventDuplicate: true,
  Components: {
    default: StyledDefaultSnackbar,
    error: StyledMaterialDesignContent,
    success: StyledMaterialDesignContent,
    warning: StyledMaterialDesignContent,
    info: StyledMaterialDesignContent,
  },
};
