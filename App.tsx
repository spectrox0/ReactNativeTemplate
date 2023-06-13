import {CustomThemeProvider} from 'context';
import {useSplashScreen} from 'hooks/useSlashScreen';
import {MainLayout} from 'layouts/Main';
import {Navigation} from 'navigation/Stack';
import React from 'react';

function App(): JSX.Element {
  useSplashScreen();
  return (
    <CustomThemeProvider>
      <MainLayout>
        <Navigation />;
      </MainLayout>
    </CustomThemeProvider>
  );
}
export default App;
