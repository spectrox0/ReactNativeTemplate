import {CustomThemeProvider} from 'src/context';
import {MainLayout} from 'src/layouts/Main';
import React from 'react';
import {StripeProvider} from '@stripe/stripe-react-native';
import {config} from 'src/config/config';
import {NavigationWrapper} from 'src/navigation';
import {useSplashScreen} from 'src/hooks/useSlashScreen';

function App(): JSX.Element {
  useSplashScreen();
  return (
    <CustomThemeProvider>
      <MainLayout>
        <StripeProvider
          publishableKey={config.stripePublicKey}
          merchantIdentifier={config.merchantId}>
          <NavigationWrapper />
        </StripeProvider>
      </MainLayout>
    </CustomThemeProvider>
  );
}
export default App;
