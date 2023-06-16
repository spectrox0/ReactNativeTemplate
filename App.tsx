import {CustomThemeProvider} from 'src/context';
// import {useSplashScreen} from 'src/hooks/useSlashScreen';
import {MainLayout} from 'src/layouts/Main';
import {Navigation} from 'src/navigation/Stack';
import React from 'react';
import {StripeProvider} from '@stripe/stripe-react-native';
import {config} from 'src/config/config';

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
