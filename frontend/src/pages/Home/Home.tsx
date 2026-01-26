import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import CloseIcon from '@mui/icons-material/Close';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import { Collapse, useTheme } from '@mui/material';
import { TransitionProps } from '@mui/material/transitions';
import React, { useState } from 'react';
import { useDocumentTitle } from 'src/hooks/useDocumentTitle';
import { ImagesSet } from 'src/pages/AboutMe/AboutMePageContent';
import {
  Box,
  buildImgSrc,
  Container,
  Dialog,
  DialogContent,
  IconButton,
  Slide,
  Stack,
  Typography,
} from 'src/ui-components';

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<unknown>;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction='up' ref={ref} {...props} />;
});

export const Home = () => {
  const theme = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [isAthens, setIsAthens] = useState(false);

  useDocumentTitle(null);
  return (
    <>
      <Container sx={{ textAlign: 'center' }}>
        <Typography type='title' component={'h1'}>
          Witamy na naszym weselu!
        </Typography>
        <Typography mt={5}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur libero, vero corrupti
          consequatur delectus maxime magnam consequuntur quisquam quod repudiandae autem itaque
          quo, temporibus minus beatae explicabo? Perferendis, quo possimus!
        </Typography>
        <Stack
          sx={{
            px: 2,
            gap: 2,
            alignItems: 'center',
            justifyContent: 'center',
            mt: 2,
            boxShadow: 4,
            height: 80,
            borderRadius: 3,
          }}
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <img style={{ width: 50 }} src={buildImgSrc('grecja.png' as any)} alt='' />
          <Typography sx={{ fontSize: 28 }}>Grecja</Typography>
        </Stack>
        <Collapse in={isOpen}>
          <Box
            sx={{
              alignItems: 'center',
              justifyContent: 'center',
              mt: 2,
              background: theme.palette.grey[100],
              minHeight: 80,
              borderRadius: 3,
            }}
            onClick={() => setIsAthens(true)}
          >
            <Stack
              sx={{
                alignItems: 'center',
                borderBottom: '1px solid lightgrey',
                justifyContent: 'space-between',
                p: 2,
              }}
            >
              <Stack sx={{ alignItems: 'center' }}>
                <img
                  style={{ width: 40, aspectRatio: '1/1', borderRadius: '50%' }}
                  src={buildImgSrc('ateny.png' as any)}
                  alt=''
                />
                <Typography sx={{ ml: 2, fontSize: 20 }}>Ateny</Typography>
              </Stack>
              <IconButton sx={{ p: 0 }}>
                {/* <ArrowRightAltIcon fontSize='large' /> */}
                <QuestionMarkIcon fontSize='large' />
              </IconButton>
            </Stack>
            <Stack
              sx={{
                alignItems: 'center',
                borderBottom: '1px solid lightgrey',
                justifyContent: 'space-between',
                p: 2,
              }}
            >
              <Stack sx={{ alignItems: 'center' }}>
                <img
                  style={{ width: 40, aspectRatio: '1/1', borderRadius: '50%' }}
                  src={buildImgSrc('rodos.png' as any)}
                  alt=''
                />
                <Typography sx={{ ml: 2, fontSize: 20 }}>Rodos</Typography>
              </Stack>
              <IconButton sx={{ p: 0 }}>
                <ArrowRightAltIcon fontSize='large' />
              </IconButton>
            </Stack>
            <Stack sx={{ alignItems: 'center', justifyContent: 'space-between', p: 2 }}>
              <Stack sx={{ alignItems: 'center' }}>
                <img
                  style={{ width: 40, aspectRatio: '1/1', borderRadius: '50%' }}
                  src={buildImgSrc('santorini.png' as any)}
                  alt=''
                />
                <Typography sx={{ ml: 2, fontSize: 20 }}>Santorini</Typography>
              </Stack>
              <IconButton sx={{ p: 0 }}>
                <ArrowRightAltIcon fontSize='large' />
              </IconButton>
            </Stack>
          </Box>
        </Collapse>
        <Stack
          sx={{
            px: 2,
            gap: 2,
            alignItems: 'center',
            justifyContent: 'center',
            mt: 2,
            boxShadow: 4,
            height: 80,
            borderRadius: 3,
          }}
        >
          <img style={{ width: 50 }} src={buildImgSrc('japonia.png' as any)} alt='' />
          <Typography sx={{ fontSize: 28 }}>Japonia</Typography>
        </Stack>
      </Container>
      <Dialog
        // slots={{
        //   transition: Transition,
        // }}
        TransitionComponent={Transition}
        fullScreen
        open={isAthens}
        onClose={() => setIsAthens(false)}
      >
        <Stack
          sx={{ p: 1, pl: 2, background: theme.palette.grey[100], justifyContent: 'space-between' }}
        >
          <Stack sx={{ alignItems: 'center' }}>
            <img
              style={{ width: 30, aspectRatio: '1/1', borderRadius: '50%' }}
              src={buildImgSrc('ateny.png' as any)}
              alt=''
            />
            <Typography sx={{ ml: 1, fontSize: 16 }}>Ateny</Typography>
          </Stack>
          <IconButton onClick={() => setIsAthens(false)}>
            {/* <ArrowRightAltIcon fontSize='large' /> */}
            <CloseIcon />
          </IconButton>
        </Stack>
        <DialogContent sx={{ textAlign: 'center' }}>
          <Stack>
            <ImagesSet
              images={['o-mnie/sekcja-2-1.jpg', 'o-mnie/sekcja-2-2.jpg', 'o-mnie/sekcja-2-3.jpg']}
            />
          </Stack>
          <Typography my={3}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum quidem magnam ullam.
            Ratione itaque quia saepe, nihil incidunt sapiente nesciunt eveniet quaerat officiis
            error expedita magnam unde quo fugiat voluptatum!
          </Typography>
          <Stack>
            <ImagesSet images={['o-mnie/sekcja-2-2.jpg', 'o-mnie/sekcja-2-3.jpg']} />
          </Stack>
          <Typography my={3}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum quidem magnam ullam.
            Ratione itaque quia saepe, nihil incidunt sapiente nesciunt eveniet quaerat officiis
            error expedita magnam unde quo fugiat voluptatum!
          </Typography>
        </DialogContent>
        {/* <DialogActions>
          <Button autoFocus onClick={() => setIsAthens(false)}>
            Disagree
          </Button>
          <Button onClick={() => setIsAthens(false)} autoFocus>
            Agree
          </Button>
        </DialogActions> */}
      </Dialog>
    </>
  );
};

Home.displayName = 'Home';
