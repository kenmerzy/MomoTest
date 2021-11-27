import React from 'react';

import { LoginScreen } from '@screens';

import { RootStack } from './navigator';

export const renderAuthStack = () => {
  return (
    <>
      <RootStack.Screen
        name="Login"
        component={LoginScreen}
        options={{
          title: 'Đăng nhập',
        }}
      />
    </>
  );
};
