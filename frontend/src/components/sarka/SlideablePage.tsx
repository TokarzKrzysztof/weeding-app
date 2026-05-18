import { SxProps, Theme, useTheme } from '@mui/material';
import { ReactNode, useEffect, useMemo, useRef, useState } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { listItems } from 'src/pages/Home/list-items';
import { Box, Button, Icon } from 'src/ui-components';

export type SlideablePageProps = {
  rootContent: ReactNode;
  rootUrl: string;
  isSubpage?: boolean;
  childRootSx?: SxProps<Theme>;
};
export const SlideablePage = ({
  rootContent,
  rootUrl,
  isSubpage,
  childRootSx,
}: SlideablePageProps) => {
  const location = useLocation();

  const isRoot = location.pathname === rootUrl.split('?')[0];

  const outletOutput = (
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
      <Outlet />
    </Box>
  );

  if (isSubpage) {
    return (
      <>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            height: '100%',
            transform: isRoot ? undefined : `translateX(-100%)`,
            transition: '500ms',
            ...childRootSx,
          }}
        >
          {rootContent}
        </Box>
        {outletOutput}
      </>
    );
  }

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
      {outletOutput}
    </Box>
  );
};

export const Subpage = ({ children }: { children: ReactNode }) => {
  const scrollableRef = useRef<HTMLDivElement>(null);
  const [scrolled, setScrolled] = useState(false);

  const theme = useTheme();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handler = () => {
      setScrolled(scrollableRef.current!.scrollTop > 0);
    };

    scrollableRef.current?.addEventListener('scroll', handler);
    return () => {
      scrollableRef.current?.removeEventListener('scroll', handler);
    };
  }, []);

  const title = useMemo(() => {
    const allItems = Object.values(listItems).flat();
    return allItems.find((x) => x.to === location.pathname)?.label ?? 'Powrót';
  }, [location.pathname]);

  return (
    <>
      <Box
        sx={{
          pl: 1,
          boxShadow: scrolled ? `0 0 12px 0 ${theme.palette.grey[400]}` : 0,
          transition: '200ms',
          zIndex: 1,
          textAlign: 'left',
          flexShrink: 0,
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <Button
          variant='text'
          startIcon={<Icon name='keyboard_arrow_left' />}
          disableRipple
          onClick={() => navigate(-1)}
        >
          {title}
        </Button>
      </Box>

      <Box ref={scrollableRef} sx={{ flexGrow: 1, overflow: 'auto' }}>
        {children}
      </Box>
    </>
  );
};
