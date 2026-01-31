import CloseIcon from '@mui/icons-material/Close';
import _ from 'lodash';
import { TransitionProps } from 'notistack';
import { forwardRef } from 'react';
import { Link } from 'react-router-dom';
import { useRouteParams } from 'src/hooks/useRouteParams';
import { data, Place, PlaceLabel } from 'src/pages/Home/data';
import { AppRoutes, HomeParams } from 'src/router/app-routes';
import {
  buildImgSrc,
  Dialog,
  DialogContent,
  IconButton,
  Slide,
  Stack,
  Typography,
} from 'src/ui-components';

const Transition = forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction='up' ref={ref} {...props} />;
});

export type FullscreenDialogProps = {};

export const HomeFullscreenDialog = ({ ...props }: FullscreenDialogProps) => {
  const [params] = useRouteParams<HomeParams>();

  const getPlace = (label: PlaceLabel) => {
    const flatten = _.flattenDeep(data.map((x) => x.places)) as Place[];
    return flatten.find((x) => x.label === label)!;
  };

  const dialogData = params.place ? getPlace(params.place) : null;
  return (
    <Dialog open={!!params.place} fullScreen TransitionComponent={Transition} {...props}>
      <Stack sx={{ p: 1, pl: 2, background: '#fff1f7', justifyContent: 'space-between' }}>
        <Stack sx={{ alignItems: 'center' }}>
          <img
            style={{ width: 30, aspectRatio: '1/1', borderRadius: '50%' }}
            src={dialogData?.imgSrc ? buildImgSrc(dialogData?.imgSrc) : undefined}
            alt=''
          />
          <Typography sx={{ ml: 1 }}>{dialogData?.label}</Typography>
        </Stack>
        <IconButton component={Link} to={AppRoutes.Home()}>
          <CloseIcon />
        </IconButton>
      </Stack>
      <DialogContent sx={{ textAlign: 'center' }}>{dialogData?.dialogContent}</DialogContent>
    </Dialog>
  );
};
