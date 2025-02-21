import React from 'react';
import {View, StyleSheet, ImageBackground, Dimensions} from 'react-native';
import {RootStackParamList} from '../../App';
import {StackNavigationProp} from '@react-navigation/stack';
import {Button, Text, TextInput} from 'react-native-paper';

type RegisterScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Register'
>;

interface RegisterScreenProps {
  navigation: RegisterScreenNavigationProp;
}

const RegisterScreen: React.FC<RegisterScreenProps> = ({navigation}) => {
  const onLogin = () => {
    navigation.replace('Login');
  };
  const onRegister = () => {};
  const onBack = () => {
    navigation.goBack();
  };

  return (
    <ImageBackground
      source={require('../../assets/images/mine/lr.png')} // 图片路径
      style={styles.container} // 背景样式
    >
      <Button
        icon={require('../../assets/images/common/back.png')}
        mode="text"
        style={styles.back}
        onPress={onBack}>
        Back
      </Button>
      <View>
        <Text variant="headlineLarge" style={styles.title}>
          Create Account
        </Text>
      </View>
      <View>
        <TextInput
          mode="outlined"
          style={styles.username}
          label="Username"
          right={<TextInput.Icon icon="eye" />}
        />
        <TextInput
          mode="outlined"
          style={styles.password}
          label="Password"
          secureTextEntry
          right={<TextInput.Icon icon="eye" />}
        />
      </View>
      <View style={styles.btnRow}>
        <Button
          style={styles.btn}
          labelStyle={styles.btnText}
          mode="contained"
          onPress={onRegister}>
          Register Now
        </Button>
      </View>
      <View style={styles.footer}>
        <Text style={styles.tip}>Already have an account ?</Text>
        <Button
          mode="text"
          style={styles.back}
          labelStyle={styles.nav}
          onPress={onLogin}>
          Login
        </Button>
      </View>
    </ImageBackground>
  );
};

const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 10,
  },
  back: {
    alignSelf: 'flex-start',
  },
  title: {
    paddingTop: 160,
    fontSize: 22,
    color: '#333',
    letterSpacing: 6,
    textAlign: 'center',
    fontWeight: 900,
  },
  username: {
    width: width * 0.8,
    marginBottom: 10,
  },
  password: {
    width: width * 0.8,
  },
  btnRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 30,
    paddingRight: 30,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 10,
  },
  tip: {
    fontSize: 16,
    marginRight: 10,
  },
  nav: {
    fontSize: 16,
    fontWeight: 900,
  },
  btn: {
    width: width * 0.67,
  },
  btnText: {},
});

export default RegisterScreen;
