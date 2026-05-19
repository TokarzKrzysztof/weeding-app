import CloseIcon from '@mui/icons-material/Close';
import _ from 'lodash';
import { TransitionProps } from 'notistack';
import { forwardRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRouteParams } from 'src/hooks/useRouteParams';
import { Place, PlaceLabel, TRIPS_DATA } from 'src/pages/Trips/trips-data';
import { TripsParams } from 'src/router/app-routes';
import {
  buildImgSrc,
  Dialog,
  DialogContent,
  IconButton,
  Slide,
  Stack,
  Typography
} from 'src/ui-components';

const Transition = forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction='up' ref={ref} {...props} timeout={400} />;
});

export type FullscreenDialogProps = {};

export const FullscreenDialog = ({ ...props }: FullscreenDialogProps) => {
  const [params] = useRouteParams<TripsParams>();
  const navigate = useNavigate();

  const getPlace = (label: PlaceLabel) => {
    const flatten = _.flattenDeep(TRIPS_DATA.map((x) => x.places)) as Place[];
    return flatten.find((x) => x.label === label)!;
  };

  const dialogData = params.miejsce ? getPlace(params.miejsce) : null;
  return (
    <Dialog open={!!params.miejsce} fullScreen TransitionComponent={Transition}>
      <Stack sx={{ p: 1, pl: 2, background: '#fff1f7', justifyContent: 'space-between' }}>
        <Stack sx={{ alignItems: 'center' }}>
          <img
            style={{ width: 30, aspectRatio: '1/1', borderRadius: '50%' }}
            src={dialogData?.imgSrc ? buildImgSrc(dialogData?.imgSrc) : undefined}
            alt=''
          />
          <Typography sx={{ ml: 1 }}>{dialogData?.label}</Typography>
        </Stack>
        <IconButton onClick={() => navigate(-1)}>
          <CloseIcon />
        </IconButton>
      </Stack>
      <DialogContent sx={{ textAlign: 'center', px: 2 }}>{dialogData?.dialogContent}</DialogContent>
    </Dialog>
  );
};
