import { useEffect } from 'react';
import { Img } from 'src/components/Img';
import { useDeviceMediaQuery } from 'src/hooks/useDeviceMediaQuery';
import { Box, buildImgSrc } from 'src/ui-components';

const time = 5000;

export type HomeHeaderProps = {
  onNext: () => void;
  activeIndex: number;
};
export const HomeHeader = ({ onNext, activeIndex }: HomeHeaderProps) => {
  const { isDesktop } = useDeviceMediaQuery();

  useEffect(() => {
    const timeout = setTimeout(onNext, time);
    return () => {
      clearTimeout(timeout);
    };
  }, [activeIndex]);

  const imagesDesktop = [
    { src: buildImgSrc('glowna/naglowek-komputer1.jpg') },
    { src: buildImgSrc('glowna/naglowek-komputer2.jpg') },
    { src: buildImgSrc('glowna/naglowek-komputer3.jpg') },
  ];
  const imagesMobile = [
    { src: buildImgSrc('glowna/naglowek-telefon1.jpg') },
    { src: buildImgSrc('glowna/naglowek-telefon2.jpg') },
    { src: buildImgSrc('glowna/naglowek-telefon3.jpg') },
  ];

  const items = isDesktop ? imagesDesktop : imagesMobile;
  return (
    <>
      {items.map((x, i) => {
        return (
          <Box
            key={x.src}
            sx={{
              position: 'absolute',
              overflow: 'hidden',
              inset: 0,
              zIndex: -1,
            }}
          >
            <Img
              src={x.src}
              sx={{
                height: '100vh',
                width: '100%',
                objectFit: 'cover',
                transition: `transform ${time + 450}ms linear 450ms, opacity 500ms linear`,
                opacity: activeIndex === i ? 1 : 0,
                transform: activeIndex === i ? 'scale(1.2)' : 'scale(1)',
              }}
            />
          </Box>
        );
      })}
    </>
  );
};
