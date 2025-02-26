import React from 'react';
import {
  StyleSheet,
  ImageBackground,
  Dimensions,
  View,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../App';

import {Avatar, Button, Card, Text} from 'react-native-paper';

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

interface HomeScreenProps {
  navigation: HomeScreenNavigationProp;
}

const DeviceIcon = (props: any) => (
  <Avatar.Icon
    {...props}
    icon={require('../../assets/images/home/operation.png')}
  />
);

const ChartIcon = (props: any) => (
  <Avatar.Icon
    {...props}
    icon={require('../../assets/images/home/chart.png')}
  />
);

const devices = [
  {
    name: '空气炸锅',
    status: '工作中',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkFK3jS726Jp2kQ5JQdbfv6lBBifb8nrgZ7Q&s',
  },
  {
    name: '原汁机',
    status: '待机中',
    image:
      'https://www.philips.com.cn/c-dam/b2c/Blender/global/blender/philips-juicer-product-image1.jpg',
  },
];

const HomeScreen: React.FC<HomeScreenProps> = ({navigation}) => {
  const onPressScanQrcode = () => {
    navigation.navigate('QRScanner');
  };

  const go2Report = () => {
    navigation.navigate('Report');
  };

  return (
    <ImageBackground
      source={require('../../assets/images/home/bg2.png')} // 图片路径
      style={styles.background} // 背景样式
    >
      <SafeAreaView>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.container}>
            <View style={styles.textContainer}>
              <Text style={styles.text}>Mova</Text>
            </View>

            <View style={styles.cardContainer}>
              {devices.map(item => (
                <Card key={item.name} style={styles.card}>
                  <Card.Title
                    title={item.name}
                    subtitle={item.status}
                    left={DeviceIcon}
                  />
                  <Card.Cover source={{uri: item.image}} />
                  <Card.Actions>
                    <View style={styles.cardActionsContainer}>
                      <Avatar.Icon
                        size={30}
                        icon={require('../../assets/images/home/switch.png')}
                      />
                    </View>
                  </Card.Actions>
                </Card>
              ))}
            </View>

            <View style={styles.cardContainer}>
              <Card style={styles.card} onPress={go2Report}>
                <Card.Title title="Report" subtitle="Health" left={ChartIcon} />
                <Card.Cover
                  source={{
                    uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVCYsEdPVWHVSTZCKyXHWy7AaaXTY6JE9JLA&s',
                  }}
                />
              </Card>
            </View>

            <Button
              style={styles.scanBtn}
              labelStyle={styles.scanBtnText}
              icon={require('../../assets/images/home/scanner.png')}
              mode="contained"
              onPress={onPressScanQrcode}>
              Scan Qrcode
            </Button>
          </View>
        </ScrollView>
      </SafeAreaView>
    </ImageBackground>
  );
};

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    width: width,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  background: {
    flex: 1, // 让背景图片充满整个屏幕
    justifyContent: 'flex-start', // 中心对齐内容
    alignItems: 'center', // 中心对齐内容
  },
  textContainer: {
    width: width,
    height: height / 4,
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
    marginTop: 40,
    marginBottom: 40,
  },
  scanBtnText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    lineHeight: 30,
  },
  cardContainer: {
    width: width,
    flexDirection: 'row',
    gap: 10,
    paddingLeft: 10,
    paddingRight: 10,
    marginTop: 10,
  },
  card: {
    width: width / 2 - 15,
  },
  cardActionsContainer: {
    width: width / 2 - 30,
    flexDirection: 'row',
    justifyContent: 'center',
  },
});

export default HomeScreen;
