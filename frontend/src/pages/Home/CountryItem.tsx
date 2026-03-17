import { Collapse, Slide, useTheme } from '@mui/material';
import { atom, useAtom } from 'jotai';
import { useEffect, useState } from 'react';
import { Country } from 'src/pages/Home/data';
import { TripItem } from 'src/pages/Home/TripItem';
import { Box, buildImgSrc, Stack, Typography } from 'src/ui-components';

const selectedCountryItemAtom = atom<Country | null>(null);

export type CountryItemProps = {
  data: Country;
  delay: number;
};
export const CountryItem = ({ data, delay }: CountryItemProps) => {
  const theme = useTheme();
  const [show, setShow] = useState(false);
  const [selectedCountryItem, setSelectedCountryItem] = useAtom(selectedCountryItemAtom);

  const toggleOpen = () => {
    setSelectedCountryItem(selectedCountryItem === data ? null : data);
  };

  useEffect(() => {
    setTimeout(() => {
      setShow(true);
    }, delay);
  }, [delay]);

  const isExpanded = selectedCountryItem === data;

  return (
    <Slide direction='right' in={show} timeout={500}>
      <Box>
        <Stack
          sx={{
            px: 2,
            gap: 2,
            alignItems: 'center',
            justifyContent: 'center',
            mt: 2,
            boxShadow: isExpanded ? 5 : 2,
            height: 80,
            borderRadius: 3,
            border: `1px solid ${theme.palette.grey[200]}`,
            transition: '300ms'
          }}
          onClick={toggleOpen}
        >
          <img style={{ width: 50 }} src={buildImgSrc(data.flagSrc)} alt={data.label} />
          <Typography sx={{ fontSize: 28 }}>{data.label}</Typography>
        </Stack>
        <Collapse in={isExpanded} mountOnEnter>
          <Box
            sx={{
              mt: 2,
              background: theme.palette.grey[100],
              borderRadius: 3,
            }}
          >
            {data.places.map((x) => (
              <TripItem data={x} key={x.label} />
            ))}
          </Box>
        </Collapse>
      </Box>
    </Slide>
  );
};
