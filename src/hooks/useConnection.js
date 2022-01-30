import { useNetInfo } from '@react-native-community/netinfo';

const useConnection = () => {
  const netInfo = useNetInfo();
  return {
    connected: netInfo.isConnected
  };
};

export default useConnection;
