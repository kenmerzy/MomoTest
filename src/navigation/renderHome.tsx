import React from 'react';

import { HomeScreen } from '@screens';

import { RootStack } from './navigator';

export const renderHome = () => {
  return (
    <>
      <RootStack.Screen name="Home" component={HomeScreen} />
    </>
  );
};
