import { Images } from 'src/components/sarka/Images';
import { useDocumentTitle } from 'src/hooks/useDocumentTitle';
import { GalleryImage } from 'src/hooks/useGallery';
import { buildImgSrc, Typography } from 'src/ui-components';
import { ImagePath, PortfolioImgCount } from 'src/_generated';

export const PortfolioProduct = () => {
  const images: GalleryImage[] = Array(PortfolioImgCount.Product)
    .fill(null)
    .map((x, i) => ({
      src: buildImgSrc(`portfolio/produktowa/${i + 1}.jpg` as ImagePath),
      fullSizeSrc: buildImgSrc(`portfolio/produktowa/pelnowymiarowe/${i + 1}.jpg` as ImagePath),
    }));

  useDocumentTitle('Portfolio fotografii produktowej');
  return (
    <>
      <Typography type='title'>Fotografia produktowa</Typography>
      <Images images={images} predefined='vertical-gallery' cols={4} />
    </>
  );
};

PortfolioProduct.displayName = 'PortfolioProduct';
