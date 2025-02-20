import {StackNavigationProp} from '@react-navigation/stack';
import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  Dimensions,
  Animated,
} from 'react-native';
import {
  Camera,
  useCodeScanner,
  useCameraPermission,
  useCameraDevice,
} from 'react-native-vision-camera';
import {RootStackParamList} from '../../App';

type ScanScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'QRScanner'
>;

interface ScanScreenProps {
  navigation: ScanScreenNavigationProp;
}

const ScanScreen: React.FC<ScanScreenProps> = ({navigation}) => {
  const [checked, setChecked] = useState(false); // 获取权限,当有了权限再打开摄像头
  const device = useCameraDevice('back'); // 控制扫码为后置摄像头
  const {hasPermission, requestPermission} = useCameraPermission(); // 获取/申请权限(第一次需要申请,后续不用)
  const [isActive, setIsActive] = useState(true); // 控制相机是否可用
  const [scanLineAnimation] = useState(new Animated.Value(0));
  const startScanAnimation = () => {
    Animated.loop(
      Animated.timing(scanLineAnimation, {
        toValue: scanBoxWidth, // 扫描框高度
        duration: 2000,
        useNativeDriver: true,
      }),
    ).start();
  };

  React.useEffect(() => {
    startScanAnimation();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    requestPermission(); // 进入页面申请权限
    setChecked(hasPermission); // 获取权限结果
  }, [hasPermission, requestPermission]);

  const codeScanner = useCodeScanner({
    // 后置扫码主要组件
    codeTypes: ['qr', 'ean-13'],
    onCodeScanned: codes => {
      if (codes.length > 0) {
        // 如果有axios请求的话,在请求到数据跳转页面之前一定要停用相机,否则软件会崩溃
        setIsActive(false);
        navigation.replace('Webview', {
          url: codes[0].value || '',
        });
      }
      console.log(`Scanned ${codes.length} codes!`);
    },
  });

  return (
    <View style={styles.container}>
      {device && !checked && (
        <Button
          title="获取权限"
          onPress={() => {
            setChecked(hasPermission); // 点击按钮获取权限(因为第一次安装软件,获取完权限后页面不会立即显示,需要点一下按钮,后续不用)
          }}
        />
      )}
      {device && checked ? (
        <Camera
          style={styles.camera}
          device={device}
          isActive={isActive}
          codeScanner={codeScanner}
        />
      ) : (
        <Text>未获取权限</Text>
      )}
      <View style={styles.mask}>
        <View style={styles.topMask} />
        <View style={styles.middleMask}>
          <View style={styles.leftMask} />
          <View style={styles.scanBox}>
            <View style={styles.scanBorderLeftTop} />
            <View style={styles.scanBorderLeftBottom} />
            <View style={styles.scanBorderRightTop} />
            <View style={styles.scanBorderRightBottom} />
            <Animated.View
              style={[
                styles.scanLine,
                {transform: [{translateY: scanLineAnimation}]},
              ]}
            />
          </View>
          <View style={styles.rightMask} />
        </View>
        <View style={styles.bottomMask} />
      </View>
    </View>
  );
};

const {width, height} = Dimensions.get('window');

const scanBorderWidth = 30;
const scanBorderThin = 3;
const scanBoxWidth = 300;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: width,
    minHeight: height,
    position: 'relative',
  },
  camera: {
    flex: 1,
    width: width,
    minHeight: height,
  },
  mask: {
    width: width,
    height: height,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    position: 'absolute',
    left: 0,
    top: 0,
    flexDirection: 'column',
  },
  scanLine: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 2,
    backgroundColor: '#00FF00',
  },
  topMask: {
    width: width,
    height: (height - scanBoxWidth) / 2,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  middleMask: {
    width: width,
    height: scanBoxWidth,
    flexDirection: 'row',
  },
  bottomMask: {
    width: width,
    height: (height - scanBoxWidth) / 2,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  scanBox: {
    width: 300,
    height: 300,
  },
  leftMask: {
    width: (width - scanBoxWidth) / 2,
    height: scanBoxWidth,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  rightMask: {
    width: (width - scanBoxWidth) / 2,
    height: scanBoxWidth,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  scanBorderLeftTop: {
    width: scanBorderWidth,
    height: scanBorderWidth,
    borderLeftWidth: scanBorderThin,
    borderTopWidth: scanBorderThin,
    borderStyle: 'solid',
    borderColor: '#fff',
    position: 'absolute',
    left: 0,
    top: 0,
  },
  scanBorderLeftBottom: {
    width: scanBorderWidth,
    height: scanBorderWidth,
    borderLeftWidth: scanBorderThin,
    borderBottomWidth: scanBorderThin,
    borderStyle: 'solid',
    borderColor: '#fff',
    position: 'absolute',
    left: 0,
    bottom: 0,
  },
  scanBorderRightTop: {
    width: scanBorderWidth,
    height: scanBorderWidth,
    borderRightWidth: scanBorderThin,
    borderTopWidth: scanBorderThin,
    borderStyle: 'solid',
    borderColor: '#fff',
    position: 'absolute',
    right: 0,
    top: 0,
  },
  scanBorderRightBottom: {
    width: scanBorderWidth,
    height: scanBorderWidth,
    borderRightWidth: scanBorderThin,
    borderBottomWidth: scanBorderThin,
    borderStyle: 'solid',
    borderColor: '#fff',
    position: 'absolute',
    right: 0,
    bottom: 0,
  },
});

export default ScanScreen;
