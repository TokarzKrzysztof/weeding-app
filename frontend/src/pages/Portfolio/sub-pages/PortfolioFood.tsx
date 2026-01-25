import { Images } from 'src/components/sarka/Images';
import { useDocumentTitle } from 'src/hooks/useDocumentTitle';
import { GalleryImage } from 'src/hooks/useGallery';
import { buildImgSrc, Typography } from 'src/ui-components';
import { ImagePath, PortfolioImgCount } from 'src/_generated';

export const PortfolioFood = () => {
  const images: GalleryImage[] = Array(PortfolioImgCount.Food)
    .fill(null)
    .map((x, i) => ({
      src: buildImgSrc(`portfolio/kulinarna/${i + 1}.jpg` as ImagePath),
      fullSizeSrc: buildImgSrc(`portfolio/kulinarna/pelnowymiarowe/${i + 1}.jpg` as ImagePath),
    }));

  useDocumentTitle('Portfolio fotografii kulinarnej');
  return (
    <>
      <Typography type='title'>Fotografia kulinarna</Typography>
      <Images images={images} predefined='vertical-gallery' cols={4} />
    </>
  );
};

PortfolioFood.displayName = 'PortfolioFood';
