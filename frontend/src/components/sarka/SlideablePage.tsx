import { ReactNode, useRef } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { useDeviceMediaQuery } from 'src/hooks/useDeviceMediaQuery';
import { Box, Button, Container, Icon, Slide } from 'src/ui-components';

export type SlideablePageProps = {
  rootContent: ReactNode;
  rootUrl: string;
  rootName: string;
};
export const SlideablePage = ({ rootContent, rootUrl, rootName }: SlideablePageProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const { isDesktop } = useDeviceMediaQuery();

  const isRoot = location.pathname === rootUrl.split('?')[0];
  const time = isDesktop ? 1000 : 0;
  return (
    <Container
      ref={containerRef}
      sx={{ position: 'relative', textAlign: 'center', pt: !isRoot ? 0 : undefined }}
    >
      <Slide
        direction='left'
        in={isRoot}
        mountOnEnter
        unmountOnExit
        appear={false}
        timeout={{ enter: time, exit: 0 }}
      >
        <Box>{rootContent}</Box>
      </Slide>
      <Slide
        direction='left'
        in={!isRoot}
        mountOnEnter
        unmountOnExit
        appear={false}
        timeout={{ enter: time, exit: 0 }}
      >
        <Box>
          <Box textAlign={'left'} mb={4} mt={1}>
            <Button
              variant='text'
              startIcon={<Icon name='keyboard_arrow_left' />}
              component={Link}
              to={rootUrl}
            >
              {rootName}
            </Button>
          </Box>
          <Outlet />
        </Box>
      </Slide>
    </Container>
  );
};
