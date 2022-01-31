import AsyncStorage from '@react-native-community/async-storage';
import { COINS_KEY } from '@/helpers/constants/storageKeys';

const setLocalCoins = async coins => {
  await AsyncStorage.setItem(COINS_KEY, JSON.stringify(coins));
};

const getLocalCoins = async () => {
  const storeCoins = await AsyncStorage.getItem(COINS_KEY);
  return storeCoins;
};

export default {
  setLocalCoins,
  getLocalCoins
};
