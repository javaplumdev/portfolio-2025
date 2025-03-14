import {ThemeProvider} from './ThemeProvider';
import TooltipProvider from './TooltipProvider';

type AppProvidersProps = {
  children: Children;
};

const AppProviders = (props: AppProvidersProps) => {
  const {children} = props;

  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <TooltipProvider>{children}</TooltipProvider>
    </ThemeProvider>
  );
};

export default AppProviders;
