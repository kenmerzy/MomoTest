import React, { useContext } from 'react';
import { RootStack } from './navigator';
import { renderAuthStack } from './renderAuth';
import { renderHome } from './renderHome';
import { AuthContext } from '@contexts';
import { StyleSheet } from 'react-native';

export * from './navigator';

export const RootApp = () => {
  const { state } = useContext(AuthContext);

  if (state.loading) {
    return null;
  }

  const renderScreen = () => {
    console.log('===============================================');
    console.log('state', state);
    console.log('===============================================');
    if (!state?.user) {
      return renderAuthStack();
    } else {
      return renderHome();
    }
  };

  return (
    <RootStack.Navigator
      screenOptions={(props) => {
        const {} = props;
        return {
          headerShown: false,
          headerStyle: styles.headerStyle,
          title: '',
        };
      }}
    >
      {renderScreen()}
    </RootStack.Navigator>
  );
};
const styles = StyleSheet.create({
  headerStyle: {},
});
