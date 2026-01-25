import { Collapse } from '@mui/material';
import { atom, useAtom } from 'jotai';
import { Folder } from 'src/models/admin/folder';
import { Box, Icon, Stack } from 'src/ui-components';
import { FolderNodeImagesSection } from './FolderNodeImagesSection';

const storedFoldersAtom = atom<Folder[]>(
  window.sessionStorage.getItem('folders')
    ? (JSON.parse(window.sessionStorage.getItem('folders')!) as Folder[])
    : []
);

export type FolderNodeProps = {
  data: Folder;
};
export const FolderNode = ({ data }: FolderNodeProps) => {
  const [storedFolders, setStoredFolders] = useAtom(storedFoldersAtom);

  const handleClick = (item: Folder, value: boolean) => {
    storedFolders.forEach((x) => (x.isActive = false));

    item.isExpanded = value;
    if (value) {
      item.isActive = true;
    }

    const index = storedFolders.findIndex((x) => x.id === item.id);
    if (index !== -1) {
      storedFolders[index] = item;
    } else {
      storedFolders.push(item);
    }

    setStoredFolders([...storedFolders]);
    window.sessionStorage.setItem('folders', JSON.stringify(storedFolders));
  };

  const current = storedFolders.find((x) => x.id === data.id);
  const isExpanded = current?.isExpanded;
  const isActive = current?.isActive;
  return (
    <>
      <Stack
        gap={1}
        onClick={(e) => {
          e.stopPropagation();
          handleClick(data, !isExpanded);
        }}
        sx={{ cursor: 'pointer' }}
      >
        <Icon name={isExpanded ? 'keyboard_arrow_down' : 'keyboard_arrow_right'}></Icon>
        {data.name}
      </Stack>
      <Box pl={1}>
        <Collapse in={isExpanded} timeout='auto' unmountOnExit>
          {data.children.map((x) => (
            <FolderNode data={x} key={x.name} />
          ))}
          {isActive &&
            data.sections.length > 0 &&
            data.sections.map((x, i) => <FolderNodeImagesSection key={x.name + i} item={x} />)}
        </Collapse>
      </Box>
    </>
  );
};
