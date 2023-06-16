import {CustomThemeProvider} from 'context';
import {useSplashScreen} from 'hooks/useSlashScreen';
import {MainLayout} from 'layouts/Main';
import {Navigation} from 'navigation/Stack';
import React from 'react';
import {StripeProvider} from '@stripe/stripe-react-native';
import {config} from 'config/config';

function App(): JSX.Element {
  return (
    <CustomThemeProvider>
      {config.stripePublicKey && config.merchantId ? (
        <StripeProvider
          publishableKey={config.stripePublicKey}
          merchantIdentifier={config.merchantId}>
          <MainLayout>
            <Navigation />;
          </MainLayout>
        </StripeProvider>
      ) : (
        <MainLayout>
          <Navigation />
        </MainLayout>
      )}
    </CustomThemeProvider>
  );
}
export default App;
