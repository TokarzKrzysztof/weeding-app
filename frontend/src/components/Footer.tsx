import { Instagram } from '@mui/icons-material';
import { Divider, useTheme } from '@mui/material';
import { Link } from 'react-router-dom';
import { Img } from 'src/components/Img';
import { useCopy } from 'src/hooks/useCopy';
import { useDeviceMediaQuery } from 'src/hooks/useDeviceMediaQuery';
import { useMenuOptions } from 'src/hooks/useMenuOptions';
import { Box, buildImgSrc, Button, Icon, Stack } from 'src/ui-components';
import { Contacts, Links } from 'src/utils/constants';

export type FooterProps = {};

export const Footer = ({ ...props }: FooterProps) => {
  const theme = useTheme();
  const { isDesktop } = useDeviceMediaQuery();
  const { menuOptions, active } = useMenuOptions();
  const { handleCopy } = useCopy();

  return (
    <Box
      component='footer'
      sx={{
        p: 2,
        display: 'flex',
        gap: isDesktop ? 6 : 2,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: isDesktop ? 'row' : 'column',
        boxShadow: 4,
      }}
    >
      <Stack direction={'column'} alignItems={'center'} gap={0.5}>
        <Img src={buildImgSrc('logo/okragle-kolor.png')} sx={{ width: 100, mb: 1 }} />
        <Button
          variant='text'
          startIcon={<Icon name='phone' />}
          size='small'
          onClick={() => handleCopy(Contacts.Phone)}
        >
          {Contacts.Phone}
        </Button>
        <Button
          sx={{ mx: 2 }}
          variant='text'
          startIcon={<Icon name='mail_outline' />}
          size='small'
          onClick={() => handleCopy(Contacts.Email)}
        >
          {Contacts.Email}
        </Button>
        <Button
          variant='text'
          startIcon={<Instagram />}
          size='small'
          component={Link}
          to={Links.InstagramProfessional.url}
          target='_blank'
        >
          {Links.InstagramProfessional.name}
        </Button>
      </Stack>
      <Divider flexItem orientation={isDesktop ? 'vertical' : 'horizontal'}></Divider>
      <Box component={'ul'} sx={{ listStyle: 'none', textAlign: 'center', p: 0, m: 0 }}>
        {menuOptions.map((x) => (
          <Box component={'li'} key={x.text}>
            <Button
              variant='text'
              component={Link}
              to={x.to}
              sx={{
                textTransform: 'uppercase',
                color: active === x ? theme.palette.primary.dark : theme.palette.primary.main,
                borderRadius: 0,
                transition: '.4s',
                '&:hover': {
                  color: theme.palette.primary.dark,
                },
              }}
            >
              {x.text}
            </Button>
          </Box>
        ))}
      </Box>
    </Box>
  );
};
