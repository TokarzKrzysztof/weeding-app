import { Collapse, useTheme } from '@mui/material';
import { atom, useAtom } from 'jotai';
import { Country } from 'src/pages/Home/data';
import { TripItem } from 'src/pages/Home/TripItem';
import { Box, buildImgSrc, Stack, Typography } from 'src/ui-components';

const selectedCountryItemAtom = atom<Country | null>(null);

export type CountryItemProps = {
  data: Country;
};
export const CountryItem = ({ data }: CountryItemProps) => {
  const theme = useTheme();
  const [selectedCountryItem, setSelectedCountryItem] = useAtom(selectedCountryItemAtom);

  const toggleOpen = () => {
    setSelectedCountryItem(selectedCountryItem === data ? null : data);
  };

  return (
    <>
      <Stack
        sx={{
          px: 2,
          gap: 2,
          alignItems: 'center',
          justifyContent: 'center',
          mt: 2,
          boxShadow: 4,
          height: 80,
          borderRadius: 3,
        }}
        onClick={toggleOpen}
      >
        <img style={{ width: 50 }} src={buildImgSrc(data.flagSrc)} alt={data.label} />
        <Typography sx={{ fontSize: 28 }}>{data.label}</Typography>
      </Stack>
      <Collapse in={selectedCountryItem === data}>
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
    </>
  );
};
