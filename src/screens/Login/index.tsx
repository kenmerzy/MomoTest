import React, { useContext, useState } from 'react';

import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from 'react-native';

import { colors, responsive, width } from '@styles';

import { Button, FocusAwareStatusBar } from '@components';
import { AuthContext } from '@contexts';

export const LoginScreen = () => {
  const { login } = useContext(AuthContext);

  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const onChangeTextUserName = (value: string) => {
    setUserName(value);
  };
  const onChangeTextPassword = (value: string) => {
    setPassword(value);
  };
  const onLoginPress = async () => {
    try {
      const res = await fetch('https://reqres.in/api/login', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: 'eve.holt@reqres.in',
          password: 'cityslicka',
        }),
      });
      const resJ = await res.json();
      if (resJ?.token) {
        login({ token: resJ?.token, user: { name: 'Ngọc Long' } });
      }
    } catch (error) {
      console.log('===============================================');
      console.log('error', error);
      console.log('===============================================');
    } finally {
    }

    // login({ token: 'fakeToken', user: { name: 'Ngọc Long' } });
  };
  return (
    <View style={styles.container}>
      <FocusAwareStatusBar barStyle="light-content" />
      <TouchableWithoutFeedback
        onPress={Keyboard.dismiss}
        style={styles.touchableWrapper}
      >
        <View style={styles.viewInput}>
          <TextInput
            value={userName}
            onChangeText={onChangeTextUserName}
            placeholder="Username"
            placeholderTextColor={colors.GRAY}
            style={styles.inputUsername}
          />
          <TextInput
            value={password}
            onChangeText={onChangeTextPassword}
            placeholder="Password"
            placeholderTextColor={colors.GRAY}
            style={styles.inputPassword}
          />
        </View>
      </TouchableWithoutFeedback>
      <Button onPress={onLoginPress} label="Đăng nhập" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.PINK,
  },
  touchableWrapper: {
    flex: 1,
  },
  viewInput: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputUsername: {
    width: responsive(340),
    alignItems: 'center',
    justifyContent: 'center',
    padding: responsive(10),
    backgroundColor: colors.WHITE,
  },
  inputPassword: {
    width: responsive(340),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.WHITE,
    padding: responsive(10),
    marginTop: responsive(20),
  },
});
