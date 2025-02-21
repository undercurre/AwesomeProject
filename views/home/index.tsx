import React from 'react';
import {
  Text,
  StyleSheet,
  ImageBackground,
  Dimensions,
  View,
} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../App';

import {Button} from 'react-native-paper';

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

interface HomeScreenProps {
  navigation: HomeScreenNavigationProp;
}

const HomeScreen: React.FC<HomeScreenProps> = ({navigation}) => {
  const onPressScanQrcode = () => {
    navigation.navigate('QRScanner');
  };

  return (
    <ImageBackground
      source={require('../../assets/images/home/bg2.png')} // 图片路径
      style={styles.background} // 背景样式
    >
      <View style={styles.textContainer}>
        <Text style={styles.text}>Mova</Text>
      </View>

      <Button
        style={styles.scanBtn}
        labelStyle={styles.scanBtnText}
        icon={require('../../assets/images/home/scanner.png')}
        mode="contained"
        onPress={onPressScanQrcode}>
        Scan Qrcode
      </Button>
    </ImageBackground>
  );
};

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  background: {
    flex: 1, // 让背景图片充满整个屏幕
    justifyContent: 'flex-start', // 中心对齐内容
    alignItems: 'center', // 中心对齐内容
  },
  textContainer: {
    width: width,
    height: height / 2,
    justifyContent: 'center',
    alignContent: 'center',
  },
  text: {
    fontSize: 34,
    color: '#333',
    letterSpacing: 6,
    textAlign: 'center',
    fontStyle: 'italic', // 设置斜体
    fontWeight: 900,
  },
  scanBtn: {
    width: width / 2,
    height: 50,
    borderRadius: 25,
  },
  scanBtnText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    lineHeight: 30,
  },
});

export default HomeScreen;
