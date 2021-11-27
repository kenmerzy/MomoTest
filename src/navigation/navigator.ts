import { createNativeStackNavigator } from '@react-navigation/native-stack';

export type RootParamList = {
  Login: undefined;
  Home: undefined;
};

export const RootStack = createNativeStackNavigator<RootParamList>();
