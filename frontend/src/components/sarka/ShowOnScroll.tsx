import { Fade } from '@mui/material';
import { ReactElement, useState } from 'react';
import VizSensor from 'react-visibility-sensor';

export const ShowOnScroll = ({
  children,
  disabled,
}: {
  children: ReactElement;
  disabled?: boolean;
}) => {
  const [show, setShow] = useState(false);

  if (disabled) return children;
  return (
    <VizSensor
      onChange={(isVisible: boolean) => isVisible && setShow(true)}
      active={!show}
      partialVisibility
    >
      <Fade in={show} timeout={{ enter: 1500 }}>
        {children}
      </Fade>
    </VizSensor>
  );
};
