import { Box, Stack, Typography } from 'src/ui-components';

export type NumeredListProps = {
  data: { title: string; text: string }[];
};

export const NumeredList = ({ data }: NumeredListProps) => {
  return (
    <Stack sx={{ textAlign: 'left', flexDirection: 'column', gap: 5 }}>
      {data.map((x, i) => (
        <Box key={x.title}>
          <Typography component={'h3'} sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <Typography component={'span'} color='primary' sx={{ fontSize: '3rem' }}>
              {i + 1}.
            </Typography>
            <Typography component={'span'} sx={{ fontWeight: 'bold', fontSize: '1.3rem' }}>
              {x.title}
            </Typography>
          </Typography>
          <Typography>{x.text}</Typography>
        </Box>
      ))}
    </Stack>
  );
};
