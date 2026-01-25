import { Instagram } from '@mui/icons-material';
import { GlobalStyles, styled, useTheme } from '@mui/material';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCopy } from 'src/hooks/useCopy';
import { useDeviceMediaQuery } from 'src/hooks/useDeviceMediaQuery';
import { useMenuOptions } from 'src/hooks/useMenuOptions';
import { Box, Button, Icon, IconButton, Stack } from 'src/ui-components';
import { Contacts, Links } from 'src/utils/constants';

export const colorChangeTransition = '.4s';

const MainNav = styled('nav')<{ isOpen: boolean }>(({ isOpen, theme }) => ({
  position: 'fixed',
  top: 0,
  right: 0,
  left: 0,
  bottom: 0,
  textAlign: 'center',
  background: '#FFF',
  opacity: isOpen ? 1 : 0,
  zIndex: isOpen ? 100 : -1,
  visibility: isOpen ? 'visible' : 'hidden',
  transition: 'all .375s',
  '&::before': {
    content: "''",
    position: 'fixed',
    top: 0,
    bottom: 0,
    left: 0,
    right: '-15px',
    background: theme.palette.primary.main,
    transformOrigin: '0 0',
    transform: isOpen ? 'skew(-14deg) translateX(0)' : 'skew(-14deg) translateX(-120%)',
    transition: 'all .275s .1s',
  },
}));

const NavList = styled('ul')({
  display: 'inline-flex',
  flexDirection: 'column',
  height: '93%',
  alignItems: 'flex-end',
  justifyContent: 'center',
  transform: 'translateX(-18%) skew(-16deg)',
  listStyle: 'none',
  padding: 0,
});
const NavItem = styled('li')({
  display: 'block',
  margin: '.5rem 0',
  textAlign: 'right',
  transform: 'skew(16deg)',
});
const NavLink = styled(Link)<{ index: number; isOpen: boolean; isActive: boolean }>(
  ({ index, isOpen, isActive, theme }) => ({
    display: 'block',
    padding: '12px 0',
    color: isActive ? theme.palette.primary.dark : theme.palette.primary.contrastText,
    fontSize: '1.4em',
    textDecoration: 'none',
    fontWeight: 'bold',
    opacity: isOpen ? 1 : 0,
    transform: isOpen ? 'translateY(0)' : 'translateY(-10px)',
    transition: `all 275ms ${175 + index * 50}ms`,
    fontFamily: '"Sour Gummy", sans-serif',
  })
);

const BurgerButton = styled('button')({
  paddingTop: '20px',
  position: 'relative',
  zIndex: 1000,
  background: 'none',
  border: 0,
  cursor: 'pointer',
  '&:focus': {
    outline: 'none',
  },
});

const BurgerBar = styled('span')<{ isOpen: boolean; contrastColor: string }>(
  ({ isOpen, contrastColor }) => ({
    position: 'relative',
    display: 'block',
    width: '28px',
    height: '4px',
    margin: '0 auto',
    background: contrastColor,
    transform: isOpen ? 'skew(5deg) translateY(-8px) rotate(-45deg)' : 'skew(5deg)',
    transition: `background ${colorChangeTransition}, transform .275s`,
    '&::before, &::after': {
      content: "''",
      display: 'block',
      height: '100%',
      background: contrastColor,
      transition: `background ${colorChangeTransition}, transform .275s`,
    },
    '&::before': {
      transform: isOpen
        ? 'translateY(0px) skew(-10deg) rotate(75deg)'
        : 'translateY(-16px) skew(-10deg)',
    },
    '&::after': {
      transform: isOpen
        ? 'translateY(-12px) translateX(10px) skew(-20deg)'
        : 'translateY(-12px) translateX(-2px) skew(-20deg)',
      opacity: isOpen ? 0 : 1,
    },
  })
);

const BurgerText = styled('span')<{ contrastColor: string }>(({ theme, contrastColor }) => ({
  display: 'block',
  fontSize: '.675rem',
  letterSpacing: '.05em',
  marginTop: '.5em',
  textTransform: 'uppercase',
  fontWeight: 500,
  textAlign: 'center',
  color: contrastColor,
}));

export type HeaderBarMenuProps = {
  contrastColor: string;
};

export const HeaderBarMenu = ({ contrastColor }: HeaderBarMenuProps) => {
  const theme = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const { isDesktop } = useDeviceMediaQuery();
  const { menuOptions, active } = useMenuOptions();
  const { handleCopy } = useCopy();

  if (isDesktop) {
    return (
      <Box
        display={'flex'}
        component={'ul'}
        sx={{ listStyle: 'none', m: 0, justifyContent: 'center', whiteSpace: 'nowrap' }}
        gap={1}
      >
        {menuOptions.map((x) => (
          <Box component={'li'} key={x.text}>
            <Button
              variant='text'
              component={Link}
              to={x.to}
              sx={{
                textTransform: 'uppercase',
                color: active === x ? theme.palette.primary.dark : contrastColor,
                borderRadius: 0,
                transition: colorChangeTransition,
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
    );
  }

  return (
    <>
      <BurgerButton onClick={() => setIsOpen((prev) => !prev)}>
        <BurgerBar
          contrastColor={!isOpen ? contrastColor : theme.palette.primary.contrastText}
          isOpen={isOpen}
        ></BurgerBar>
        <BurgerText contrastColor={!isOpen ? contrastColor : theme.palette.primary.contrastText}>
          Menu
        </BurgerText>
      </BurgerButton>
      <MainNav isOpen={isOpen}>
        <Stack
          sx={{
            gap: 1,
            color: theme.palette.primary.contrastText,
            position: 'fixed',
            pt: 1,
            pl: 2
          }}
        >
          <IconButton
            size='small'
            sx={{ color: 'inherit' }}
            onClick={() => handleCopy(Contacts.Phone)}
          >
            <Icon name='phone' fontSize='small' />
          </IconButton>
          <IconButton
            size='small'
            sx={{ color: 'inherit' }}
            onClick={() => handleCopy(Contacts.Email)}
          >
            <Icon name='mail_outline' fontSize='small' />
          </IconButton>
          <IconButton
            sx={{ color: 'inherit' }}
            size='small'
            component={Link}
            to={Links.InstagramProfessional.url}
            target='_blank'
          >
            <Instagram fontSize='small' />
          </IconButton>
        </Stack>
        <NavList>
          {menuOptions.map((x, i) => (
            <NavItem key={x.text}>
              <NavLink
                isActive={active === x}
                to={x.to}
                index={i}
                isOpen={isOpen}
                onClick={() => {
                  setIsOpen(false);
                }}
              >
                {x.text}
              </NavLink>
            </NavItem>
          ))}
        </NavList>
      </MainNav>
      <GlobalStyles
        styles={{
          body: {
            overflow: isOpen ? 'hidden' : undefined,
          },
        }}
      />
    </>
  );
};
