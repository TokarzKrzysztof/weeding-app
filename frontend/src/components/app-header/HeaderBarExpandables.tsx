import { Instagram } from '@mui/icons-material';
import { buttonClasses, ButtonTypeMap } from '@mui/material';
import { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { useCopy } from 'src/hooks/useCopy';
import { useDeviceMediaQuery } from 'src/hooks/useDeviceMediaQuery';
import { Button, ButtonProps, Icon } from 'src/ui-components';
import { Contacts, Links } from 'src/utils/constants';

export const HeaderBarExpandables = ({ contrastColor }: { contrastColor: string }) => {
  const { handleCopy } = useCopy();

  return (
    <>
      <ExpandableButton
        contrastColor={contrastColor}
        icon={<Icon name='phone' />}
        width={90}
        onClick={() => handleCopy(Contacts.Phone)}
      >
        {Contacts.Phone}
      </ExpandableButton>
      <ExpandableButton
        contrastColor={contrastColor}
        icon={<Icon name='mail_outline' />}
        width={162}
        onClick={() => handleCopy(Contacts.Email)}
      >
        {Contacts.Email}
      </ExpandableButton>
      <ExpandableButton
        contrastColor={contrastColor}
        icon={<Instagram />}
        width={145}
        component={Link}
        to={Links.InstagramProfessional.url}
        target='_blank'
      >
        {Links.InstagramProfessional.name}
      </ExpandableButton>
    </>
  );
};

type ExpandableButtonProps<D extends React.ElementType = ButtonTypeMap['defaultComponent']> = {
  children: ReactNode;
  icon: ReactNode;
  width: number;
  contrastColor: string;
} & ButtonProps<D>;
const ExpandableButton = <D extends React.ElementType = ButtonTypeMap['defaultComponent']>({
  children,
  icon,
  width,
  sx,
  contrastColor,
  ...props
}: ExpandableButtonProps<D>) => {
  const { isDesktop } = useDeviceMediaQuery();
  return (
    <Button
      sx={{
        minWidth: 'auto',
        transition: 'inherit',
        overflow: 'hidden',
        color: contrastColor,
        [`.${buttonClasses.icon}`]: {
          margin: !isDesktop ? 0 : undefined,
        },
        '& .expandable-content': {
          width: 0,
          transition: '.2s',
          whiteSpace: 'nowrap',
          overflow: 'hidden',
        },
        '&:hover': {
          '.expandable-content': {
            transition: '.5s',
            width: isDesktop ? width : 0,
          },
        },
        ...sx,
      }}
      variant='text'
      startIcon={icon}
      size='small'
      {...props}
    >
      <span className='expandable-content'>{children}</span>
    </Button>
  );
};
