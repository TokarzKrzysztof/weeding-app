import { useDocumentTitle } from 'src/hooks/useDocumentTitle';
import { useGetFoldersTree } from 'src/queries/folder-queries';
import { Box } from 'src/ui-components';
import { FolderNode } from './FolderNode';

export const Admin = () => {
  const { foldersTree } = useGetFoldersTree();

  useDocumentTitle('Foldery');

  if (!foldersTree) return null;
  return (
    <Box mt={3}>
      {foldersTree.map((x) => (
        <FolderNode data={x} key={x.name}/>
      ))}
    </Box>
  );
};

Admin.displayName = 'Admin';
