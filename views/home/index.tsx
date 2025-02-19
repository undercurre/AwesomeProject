import React from 'react';
import {View, Text, StyleSheet, ImageBackground} from 'react-native';
import CustomButton from '../../components/CustomBtn';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../App';

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
      <View style={styles.overlay}>
        <Text style={styles.text}>Mova</Text>
      </View>

      <View style={styles.scanBtn}>
        <CustomButton
          onPress={onPressScanQrcode}
          title="scan Qrcode"
          style={styles.scanBtn}
          textStyle={styles.scanBtnText}
        />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1, // 让背景图片充满整个屏幕
    justifyContent: 'center', // 中心对齐内容
    alignItems: 'center', // 中心对齐内容
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.1)', // 可以加个半透明的遮罩层
    padding: 20,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    marginBottom: 140,
  },
  text: {
    width: 120,
    fontSize: 34,
    color: '#fff',
    letterSpacing: 6,
    textAlign: 'center',
    transform: [{rotate: '8deg'}],
    fontStyle: 'italic', // 设置斜体
    fontWeight: 'bold',
  },
  scanBtn: {
    width: 200,
    backgroundColor: '#000',
    borderRadius: 8,
  },
  scanBtnText: {
    color: '#fff',
    fontSize: 20,
  },
});

export default HomeScreen;
