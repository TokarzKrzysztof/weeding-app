import { ImagesSection } from './images-section';

export type Folder = {
  id: string;
  name: string;
  children: Folder[];
  sections: ImagesSection[];

  // UI
  isExpanded?: boolean;
  isActive?: boolean;
};

export type FoldersTree = Folder[];
