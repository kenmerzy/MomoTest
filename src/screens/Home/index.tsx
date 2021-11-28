import React, { useContext } from 'react';

import { View, Text, StyleSheet } from 'react-native';

import { colors } from '@styles';
import { AuthContext } from '@contexts';

interface Props {}

export const HomeScreen = (props: Props) => {
  const {} = props;
  const { logout } = useContext(AuthContext);
  return (
    <View style={styles.container}>
      <Text>HomeScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.WHITE,
  },
});
