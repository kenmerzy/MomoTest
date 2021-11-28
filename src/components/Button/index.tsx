import React from 'react';

import { Text, StyleSheet, TouchableOpacity } from 'react-native';

import { colors, responsive, width } from '@styles';

interface Props {
  label: string;
  onPress: () => void;
}

export const Button = (props: Props) => {
  const { label, onPress } = props;
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={!onPress}
      style={styles.container}
    >
      <Text style={styles.text}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width,
    padding: responsive(15),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.BLUE,
  },
  text: {
    color: colors.WHITE,
  },
});
