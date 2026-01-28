import { DndContext, DragEndEvent, PointerSensor, useSensor, useSensors } from '@dnd-kit/core';
import { SortableContext, useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { atom, useAtom, useAtomValue } from 'jotai';
import { useSnackbar } from 'notistack';
import { useEffect, useMemo, useRef, useState } from 'react';
import { Img } from 'src/components/Img';
import { useFilePicker } from 'src/hooks/useFilePicker';
import { Image } from 'src/models/admin/image';
import { ImageOrientation, ImagesSection } from 'src/models/admin/images-section';
import { useEditImages } from 'src/queries/folder-queries';
import { Box, buildImgSrc, Button, Icon, IconButton, Stack, Typography } from 'src/ui-components';
import { move } from 'src/utils/array-utils';

const activeImgAtom = atom<ExtendedImage | null>(null);

type ExtendedImage = Image & {
  src?: string;
};

export type FolderNodeImagesSectionProps = {
  item: ImagesSection;
};
export const FolderNodeImagesSection = ({ item }: FolderNodeImagesSectionProps) => {
  const namesRef = useRef(item.images.map((x) => x.fileName));
  const [dirty, setDirty] = useState(false);
  const [images, setImages] = useState<ExtendedImage[]>(item.images);
  const { editImages, editImagesInProgress } = useEditImages();
  const { showPicker } = useFilePicker();
  const { enqueueSnackbar } = useSnackbar();
  const activeImg = useAtomValue(activeImgAtom);
  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        // make remove button working
        distance: 8,
      },
    }),
  );

  const multiUpload = () => {
    showPicker({ accept: 'image/*', multiple: true }).then((files) => {
      files.forEach((file, i) => {
        if (images[i]) {
          images[i].file = file;
          images[i].src = URL.createObjectURL(file);
        }
      });

      setImages([...images]);
      setDirty(true);
    });
  };

  const singleUpload = (img: ExtendedImage) => {
    showPicker({ accept: 'image/*' }).then((files) => {
      const file = files[0];
      img.file = file;
      img.src = URL.createObjectURL(file);

      setImages([...images]);
      setDirty(true);
    });
  };

  const pasteUpload = async (activeImg: ExtendedImage | null) => {
    if (activeImg === null) {
      enqueueSnackbar({
        variant: 'error',
        message: 'Kliknij na konkretnie zdjęcie aby wkleić',
      });
      return;
    }

    const clipboardItems = await navigator.clipboard.read();
    const item = clipboardItems[0];
    if (item.types.length === 0) {
      enqueueSnackbar({
        variant: 'error',
        message: 'Nie ma niczego do wklejenia',
      });
      return;
    }
    if (!item.types.some((x) => x.startsWith('image/'))) {
      enqueueSnackbar({
        variant: 'error',
        message: 'Wybrany plik nie jest zdjęciem',
      });
      return;
    }

    for (const type of item.types) {
      if (type.startsWith('image/')) {
        const blob = await item.getType(type);

        activeImg.file = new File([blob], 'image');
        activeImg.src = URL.createObjectURL(blob);

        setImages([...images]);
        setDirty(true);

        break;
      }
    }
  };

  const removeUploadedFile = (img: ExtendedImage) => {
    img.file = undefined;
    img.src = undefined;

    setImages([...images]);
  };

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (over && active.id !== over.id) {
      const oldIndex = images.findIndex((x) => x.id === active.id);
      const newIndex = images.findIndex((x) => x.id === over.id);
      move(oldIndex, newIndex, images);

      setImages([...images]);
      setDirty(true);
    }
  };

  const saveChanges = () => {
    editImages(
      { images, sectionId: item.id },
      {
        onSuccess: () => {
          window.location.reload();
        },
      },
    );
  };

  useEffect(() => {
    const handler = () => pasteUpload(activeImg);

    window.addEventListener('paste', handler);
    return () => {
      window.removeEventListener('paste', handler);
    };
  }, [activeImg, pasteUpload]);

  return (
    <Box p={2} mt={1} sx={{ border: '1px solid black', borderRadius: 5, maxWidth: 1000 }}>
      <Stack mb={1} alignItems='center'>
        <Typography fontWeight={'bold'} variant='h5'>
          {item.name}
        </Typography>
        <Stack sx={{ px: 2, gap: 1, flexGrow: 1, alignItems: 'center' }}>
          {editImagesInProgress ? (
            <Typography>Zapisuję zmiany...</Typography>
          ) : (
            <Button variant='outlined' onClick={saveChanges} disabled={!dirty}>
              Zapisz zmiany
            </Button>
          )}
          <IconButton tooltip='Dodaj wiele' size='small' color='primary' onClick={multiUpload}>
            <Icon name='file_upload' fontSize='large'></Icon>
          </IconButton>
        </Stack>
      </Stack>

      <DndContext onDragEnd={handleDragEnd} sensors={sensors}>
        <SortableContext items={images}>
          <Stack
            sx={{
              display: 'grid',
              gridTemplateColumns: `repeat(${item.cols}, 1fr)`,
              gap: 1,
            }}
          >
            {images.map((img, i) => (
              <ImageItem
                key={img.path}
                img={img}
                section={item}
                name={namesRef.current[i]}
                onUpload={() => singleUpload(img)}
                onRemove={() => removeUploadedFile(img)}
              />
            ))}
          </Stack>
        </SortableContext>
      </DndContext>
    </Box>
  );
};

const ImageItem = ({
  name,
  img,
  section,
  onUpload,
  onRemove,
}: {
  name: string;
  img: ExtendedImage;
  section: ImagesSection;
  onUpload: () => void;
  onRemove: () => void;
}) => {
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({
    id: img.id,
    disabled: !section.isSortable,
  });
  const [isHover, setIsHover] = useState(false);
  const [activeImg, setActiveImg] = useAtom(activeImgAtom);

  const aspectRatio = useMemo(() => {
    if (section.orientation === ImageOrientation.Horizontal) return '1.5/1';
    if (section.orientation === ImageOrientation.Vertical) return '1/1.5';
    if (section.orientation === ImageOrientation.Unknown) return undefined;
  }, [section.orientation]);

  const showRemoveButton = !!img.file;
  const isActive = activeImg === img;

  return (
    <Box
      ref={setNodeRef}
      key={img.path}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      onClick={() => setActiveImg(isActive ? null : img)}
      sx={{
        position: 'relative',
        backgroundColor: isActive ? 'grey' : 'lightgrey',
        aspectRatio,
        alignSelf: section.orientation === ImageOrientation.Unknown ? 'flex-start' : undefined,
        transform: CSS.Transform.toString(transform),
        transition,
        cursor: section.isSortable ? 'move' : 'pointer',
        minHeight: 50,
      }}
      {...attributes}
      {...listeners}
    >
      {isHover && !isDragging && (
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          }}
        >
          <Stack gap={1} justifyContent='center'>
            <IconButton size='large' color='primary' filled onClick={onUpload}>
              <Icon name='file_upload' fontSize='large'></Icon>
            </IconButton>
            {showRemoveButton && (
              <IconButton size='large' color='primary' onClick={onRemove}>
                <Icon name='delete' fontSize='large'></Icon>
              </IconButton>
            )}
          </Stack>
          <Typography
            sx={{ color: 'white', fontSize: 14, whiteSpace: 'nowrap', textAlign: 'center' }}
          >
            {name}
          </Typography>
        </Box>
      )}

      <Img
        src={img.src ?? buildImgSrc(img.path)}
        sx={{ display: 'block', width: '100%', height: '100%' }}
      />
    </Box>
  );
};
