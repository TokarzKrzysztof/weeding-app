import { GlobalStyles } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { ErrorBoundary } from 'react-error-boundary';
import { Outlet } from 'react-router-dom';
import { ErrorFallback } from 'src/components/ErrorFallback';

function App() {
  const theme = useTheme();

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
      <Outlet />
    </ErrorBoundary>
  );
}

export default App;
