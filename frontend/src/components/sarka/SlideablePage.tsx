import { useTheme } from '@mui/material';
import { ReactNode, useEffect, useRef, useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { Box, Button, Icon } from 'src/ui-components';

export const slideableBackButtonHeight = 44;

const checkIsDirectChild = (parentPathname: string, childPathname: string) => {
  const parentCount = parentPathname === '/' ? 1 : parentPathname.split('/').length;
  return childPathname.split('/').length - parentCount === 1;
};

export type SlideablePageProps = {
  rootContent: ReactNode;
  rootUrl: string;
  pageName: string;
};
export const SlideablePage = ({ rootContent, rootUrl, pageName }: SlideablePageProps) => {
  const scrollableRef = useRef<HTMLDivElement>(null);
  const theme = useTheme();
  const [scrolled, setScrolled] = useState(false);

  const location = useLocation();

  useEffect(() => {
    scrollableRef.current?.addEventListener('scroll', () => {
      setScrolled(scrollableRef.current!.scrollTop > 0);
    });
  }, []);

  const isRoot = location.pathname === rootUrl.split('?')[0];
  const isDirectChild = checkIsDirectChild(rootUrl, location.pathname);
  return (
    <Box
      sx={{
        textAlign: 'center',
        overflow: 'hidden',
        width: '100%',
        position: 'relative',
        minHeight: '100vh',
      }}
    >
      <Box sx={{ transform: isRoot ? undefined : `translateX(-100%)`, transition: '500ms' }}>
        {rootContent}
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          position: 'absolute',
          left: '100%',
          width: '100%',
          height: '100vh',
          top: 0,
          transform: isRoot ? undefined : `translateX(-100%)`,
          transition: '500ms',
        }}
      >
        {isDirectChild && (
          <Box
            sx={{
              pl: 1,
              boxShadow: scrolled ? `0 0 12px 0 ${theme.palette.grey[400]}` : 0,
              transition: '200ms',
              zIndex: 1,
              textAlign: 'left',
              height: slideableBackButtonHeight,
              flexShrink: 0,
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <Button
              variant='text'
              startIcon={<Icon name='keyboard_arrow_left' />}
              component={Link}
              to={rootUrl}
              disableRipple
            >
              {pageName}
            </Button>
          </Box>
        )}

        <Box ref={scrollableRef} sx={{ flexGrow: 1, overflow: isDirectChild ? 'auto' : undefined }}>
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
  // return (
  //   <Stack
  //     sx={{
  //       width: '200%',
  //       overflow: 'hidden',
  //       transform: `translateX(${isRoot ? 0 : '-50%'})`,
  //       transition: '500ms',
  //     }}
  //   >
  //     <Box sx={{ width: '50%' }}>{rootContent}</Box>
  //     <Box sx={{ width: '50%', display: isRoot ? 'none' : 'block' }}>
  //       <Box textAlign={'left'} mb={4} mt={1}>
  //         <Button
  //           variant='text'
  //           startIcon={<Icon name='keyboard_arrow_left' />}
  //           component={Link}
  //           to={rootUrl}
  //         >
  //           {rootName}
  //         </Button>
  //       </Box>
  //       <Outlet />
  //     </Box>
  //   </Stack>
  // );
  // return (
  //   <Container sx={{ position: 'relative', textAlign: 'center', pt: !isRoot ? 0 : undefined }}>
  //     <Slide
  //       direction='left'
  //       in={isRoot}
  //       mountOnEnter
  //       unmountOnExit
  //       appear={false}
  //       timeout={{ enter: time, exit: 0 }}
  //     >
  //       <Box>{rootContent}</Box>
  //     </Slide>
  //     <Slide
  //       direction='left'
  //       in={!isRoot}
  //       mountOnEnter
  //       unmountOnExit
  //       appear={false}
  //       timeout={{ enter: time, exit: 0 }}
  //     >
  //       <Box>
  //         <Box textAlign={'left'} mb={4} mt={1}>
  //           <Button
  //             variant='text'
  //             startIcon={<Icon name='keyboard_arrow_left' />}
  //             component={Link}
  //             to={rootUrl}
  //           >
  //             {rootName}
  //           </Button>
  //         </Box>
  //         <Outlet />
  //       </Box>
  //     </Slide>
  //   </Container>
  // );
};
