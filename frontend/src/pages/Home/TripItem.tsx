import FlightIcon from '@mui/icons-material/Flight';
import { TransitionProps } from '@mui/material/transitions';
import React from 'react';
import { Link } from 'react-router-dom';
import { Place } from 'src/pages/Home/data';
import { AppRoutes } from 'src/router/app-routes';
import { Box, buildImgSrc, IconButton, Slide, Stack, Typography } from 'src/ui-components';

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<unknown>;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction='up' ref={ref} {...props} />;
});

export type TripItemProps = {
  data: Place;
};
export const TripItem = ({ data }: TripItemProps) => {

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          borderBottom: '1px solid lightgrey',
          justifyContent: 'space-between',
          p: 2,
          color: 'inherit',
          textDecoration: 'none',
          ':nth-last-of-type(1)': {
            borderBottom: 'none',
          },
        }}
        component={Link}
        to={AppRoutes.Home({ place: data.label })}
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
      </Box>
    </>
  );
};
