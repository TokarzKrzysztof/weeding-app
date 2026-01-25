import { useLayoutEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useDeviceMediaQuery } from 'src/hooks/useDeviceMediaQuery';
import { useHeaderConfig } from 'src/hooks/useHeaderConfig';
import { AppRoutes } from 'src/router/app-routes';
import { Box, Icon, IconButton } from 'src/ui-components';
import { HeaderImgCount } from 'src/_generated';
import { HeaderBar } from './HeaderBar';
import { GenericHeader } from './headers/GenericHeader';
import { HomeHeader } from './headers/HomeHeader';

export const Header = () => {
  const location = useLocation();
  const { current } = useHeaderConfig();
  const { isDesktop } = useDeviceMediaQuery();
  const [activeIndex, setActiveIndex] = useState(-1);

  useLayoutEffect(() => {
    // to trigger animation
    setActiveIndex(0);
  }, []);

  if (location.pathname === AppRoutes.Admin()) return null;

  const isHome = current.to === AppRoutes.Home();

  const onNext = () => {
    setActiveIndex((prev) => {
      const isLast = prev + 1 === HeaderImgCount.Home;
      return isLast ? 0 : prev + 1;
    });
  };

  const { folder, title, contrastsDesktop, contrastsMobile } = current;

  const contrastColor = isDesktop ? contrastsDesktop[activeIndex] : contrastsMobile[activeIndex];

  return (
    <Box height={'100vh'} position='relative'>
      <HeaderBar contrastColor={contrastColor} />
      {isHome ? (
        <HomeHeader onNext={onNext} activeIndex={activeIndex} />
      ) : (
        <GenericHeader folder={folder} title={title} />
      )}
      <IconButton
        sx={{
          zIndex: 2,
          position: 'absolute',
          bottom: 50,
          left: '50%',
          transform: 'translateX(-50%)',
          border: `1px solid ${contrastColor}`,
          color: contrastColor,
        }}
        onClick={() => document.querySelector('main')!.scrollIntoView({ behavior: 'smooth' })}
      >
        <Icon name='keyboard_double_arrow_down' />
      </IconButton>
    </Box>
  );
};
