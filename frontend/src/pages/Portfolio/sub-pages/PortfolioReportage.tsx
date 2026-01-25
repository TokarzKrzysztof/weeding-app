import { useDocumentTitle } from 'src/hooks/useDocumentTitle';
import { GalleryImage } from 'src/hooks/useGallery';
import { buildImgSrc, Typography } from 'src/ui-components';
import { ImagePath, PortfolioImgCount } from 'src/_generated';

export const PortfolioReportage = () => {
  const images: GalleryImage[] = Array(PortfolioImgCount.Reportage)
    .fill(null)
    .map((x, i) => ({
      src: buildImgSrc(`portfolio/reportazowa/${i + 1}.jpg` as ImagePath),
      fullSizeSrc: buildImgSrc(`portfolio/reportazowa/pelnowymiarowe/${i + 1}.jpg` as ImagePath),
    }));

  useDocumentTitle('Portfolio fotografii reportażowej');
  return (
    <>
      <Typography type='title'>Fotografia reportażowa</Typography>
      <Typography fontStyle={'italic'} mt={5} mb={3} type='large-text'>
        Portfolio fotografii reportażowej już wkrótce!
      </Typography>
    </>
  );
};

PortfolioReportage.displayName = 'PortfolioReportage';
