import { GlobalStyles } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { ErrorBoundary } from 'react-error-boundary';
import { Outlet } from 'react-router-dom';
import { ErrorFallback } from 'src/components/ErrorFallback';
import { useScroll } from 'src/hooks/useScroll';
import { MobileContainer } from './components/MobileContainer';

function App() {
  const theme = useTheme();
  useScroll();

  return (
    // ErrorBoundary and provider must be here
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <GlobalStyles
        styles={{
          body: {
            color: theme.palette.text.primary,
          },
        }}
      />
      <MobileContainer>
        <Outlet />
      </MobileContainer>
    </ErrorBoundary>
  );
}

export default App;
