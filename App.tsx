/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { RootApp } from '@navigation';
import { AuthContext } from '@contexts';
import { useAuth } from '@hooks';
const App = () => {
  const { state, funcAuth } = useAuth();
  const valueAuthContext = { state, ...funcAuth };
  return (
    <AuthContext.Provider value={valueAuthContext}>
      <NavigationContainer>
        <RootApp />
      </NavigationContainer>
    </AuthContext.Provider>
  );
};

export default App;
