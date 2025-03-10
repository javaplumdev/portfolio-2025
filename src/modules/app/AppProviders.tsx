import {ThemeProvider} from './ThemeProvider';

type AppProvidersProps = {
  children: Children;
};

const AppProviders = (props: AppProvidersProps) => {
  const {children} = props;

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      {children}
    </ThemeProvider>
  );
};

export default AppProviders;
