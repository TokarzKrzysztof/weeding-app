import { MobileContainer } from 'src/components/MobileContainer';
import { PageTitle } from 'src/components/PageTitle';
import { useDocumentTitle } from 'src/hooks/useDocumentTitle';

export const TemplateName = () => {
  useDocumentTitle(null);
  return (
    <MobileContainer>
      <PageTitle>TemplateName</PageTitle>
    </MobileContainer>
  );
};

TemplateName.displayName = 'TemplateName';
