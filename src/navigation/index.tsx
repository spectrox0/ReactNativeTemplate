import React, {FC} from 'react';
import {useStore} from 'src/store';
import {BottomNavigation} from './Bottom';
import {Navigation} from './Stack';

export const NavigationWrapper: FC = () => {
  const user = useStore(state => state.user);
  return user ? <Navigation /> : <BottomNavigation />;
};
