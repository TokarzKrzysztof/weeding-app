import { useEffect, useRef } from 'react';
import { FallbackProps } from 'react-error-boundary';
import { Link, useLocation } from 'react-router-dom';
import { AppRoutes } from 'src/router/app-routes';
import { Button, Card, CardContent, Container, Icon, Typography } from 'src/ui-components';

export type ErrorFallbackProps = FallbackProps;

export const ErrorFallback = ({ error, resetErrorBoundary }: ErrorFallbackProps) => {
  const navigatedToHomeRef = useRef(false);
  const location = useLocation();

  useEffect(() => {
    if (navigatedToHomeRef.current) resetErrorBoundary();
  }, [location]);

  return (
    <Container
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      <Card>
        <CardContent sx={{ textAlign: 'center' }}>
          <Icon fontSize='large' name='warning_amber' color='error' />
          <Typography fontSize={14} color='grey' my={1}>
            Coś poszło nie tak
            <br />
            Treść błędu: <b>{error?.message ?? ''}</b>
            <br /> Przepraszamy za utrudnienia
          </Typography>
          <Button variant='text' onClick={() => window.location.reload()}>
            Odśwież stronę
          </Button>
          <Button
            variant='text'
            component={Link}
            to={AppRoutes.Home()}
            onClick={() => (navigatedToHomeRef.current = true)}
          >
            Strona główna
          </Button>
        </CardContent>
      </Card>
    </Container>
  );
};
