import React, { useContext } from 'react';
import { RootStack } from './navigator';
import { renderAuthStack } from './renderAuth';
import { renderHome } from './renderHome';
import { AuthContext } from '@contexts';

export * from './navigator';

export const RootApp = () => {
  const { state } = useContext(AuthContext);

  if (state.loading) {
    return null;
  }

  const renderScreen = () => {
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
          title: '',
        };
      }}
    >
      {renderScreen()}
    </RootStack.Navigator>
  );
};
