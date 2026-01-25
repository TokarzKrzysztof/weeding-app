import { useScrollTrigger, useTheme } from '@mui/material';
import { Link } from 'react-router-dom';
import { HeaderBarExpandables } from 'src/components/app-header/HeaderBarExpandables';
import { HeaderBarMenu } from 'src/components/app-header/HeaderBarMenu';
import { Img } from 'src/components/Img';
import { useDeviceMediaQuery } from 'src/hooks/useDeviceMediaQuery';
import { Contrast } from 'src/hooks/useHeaderConfig';
import { AppRoutes } from 'src/router/app-routes';
import { AppBar, Box, buildImgSrc, Stack, Toolbar } from 'src/ui-components';

export type HeaderBarProps = {
  contrastColor?: Contrast;
};

export const HeaderBar = ({ contrastColor = 'white' }: HeaderBarProps) => {
  const { isDesktop } = useDeviceMediaQuery();
  const theme = useTheme();
  const isScrolled = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  const currentColor = isScrolled ? theme.palette.primary.contrastText : contrastColor;

  return (
    <>
      <AppBar
        sx={{
          transition: '.4s, padding 0s',
          backgroundColor: isScrolled ? undefined : 'transparent',
        }}
        elevation={0}
      >
        <Toolbar>
          <Stack
            sx={{
              width: '100%',
              justifyContent: 'space-between',
              alignItems: 'center',
              maxWidth: theme.breakpoints.values.xl,
              margin: '0 auto',
            }}
          >
            <Box sx={{ display: 'flex', flex: 1 }} component={Link} to={AppRoutes.Home()}>
              <Img
                sx={{ width: isDesktop ? 200 : 180 }}
                src={buildImgSrc(
                  !isScrolled && contrastColor === 'black'
                    ? 'logo/poziome-czarne.png'
                    : 'logo/poziome-biale.png'
                )}
              />
            </Box>
            <Box flex={1} textAlign='right'>
              <HeaderBarMenu contrastColor={currentColor} />
            </Box>
            {isDesktop && (
              <Box flex={1} textAlign='right' whiteSpace='nowrap'>
                <HeaderBarExpandables contrastColor={currentColor} />
              </Box>
            )}
          </Stack>
        </Toolbar>
      </AppBar>
    </>
  );
};
