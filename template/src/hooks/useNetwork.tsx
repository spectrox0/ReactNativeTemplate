import {useLayoutEffect, useState} from 'react';
import NetInfo from '@react-native-community/netinfo';

export const useNetwork = () => {
  const [isConnected, setIsConnected] = useState(true);
  const [loading, setLoading] = useState(true);
  const getIsConnected = async () => {
    setLoading(true);
    const res = await NetInfo.fetch();
    setIsConnected(Boolean(res.isConnected /* && res.isInternetReachable */));
    setLoading(false);
  };
  useLayoutEffect(() => {
    getIsConnected();
    const unsubscribe = NetInfo.addEventListener(state => {
      if (loading) {
        return;
      }
      const value = Boolean(
        state.isConnected /* && state.isInternetReachable */,
      );

      setIsConnected(value);
    });
    return () => unsubscribe();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return {
    isConnected,
    loading,
    getIsConnected,
  };
};
