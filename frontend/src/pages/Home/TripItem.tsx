import FlightIcon from '@mui/icons-material/Flight';
import { TransitionProps } from '@mui/material/transitions';
import React, { useState } from 'react';
import { FullscreenDialog } from 'src/pages/Home/FullscreenDialog';
import { Trip } from 'src/pages/Home/data';
import { buildImgSrc, IconButton, Slide, Stack, Typography } from 'src/ui-components';

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<unknown>;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction='up' ref={ref} {...props} />;
});

export type TripItemProps = {
  data: Trip;
};
export const TripItem = ({ data }: TripItemProps) => {
  const [showDialog, setShowDialog] = useState(false);

  return (
    <>
      <Stack
        sx={{
          alignItems: 'center',
          borderBottom: '1px solid lightgrey',
          justifyContent: 'space-between',
          p: 2,
          ':nth-last-of-type(1)': {
            borderBottom: 'none',
          },
        }}
        onClick={() => setShowDialog(true)}
      >
        <Stack sx={{ alignItems: 'center' }}>
          <img
            style={{ width: 40, aspectRatio: '1/1', borderRadius: '50%' }}
            src={buildImgSrc(data.imgSrc)}
            alt={data.label}
          />
          <Typography sx={{ ml: 2, fontSize: 20 }}>{data.label}</Typography>
        </Stack>
        <IconButton sx={{ p: 0 }}>
          <FlightIcon sx={{ transform: 'rotate(90deg)' }} />
        </IconButton>
      </Stack>
      <FullscreenDialog
        onClose={() => setShowDialog(false)}
        open={showDialog}
        data={data}
      ></FullscreenDialog>
    </>
  );
};
