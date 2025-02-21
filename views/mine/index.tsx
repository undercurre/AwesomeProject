import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Dimensions,
  Image,
} from 'react-native';
import {RootStackParamList} from '../../App';
import {StackNavigationProp} from '@react-navigation/stack';
import {Avatar, Button} from 'react-native-paper';
import CellList from '../../components/CellList';

type MineScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Mine'>;

interface MineScreenProps {
  navigation: MineScreenNavigationProp;
}

const MineScreen: React.FC<MineScreenProps> = ({navigation}) => {
  const onLogin = () => {
    navigation.navigate('Login');
  };
  const onRegister = () => {
    navigation.navigate('Register');
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isSignIn, setIsSignIn] = useState(false);

  function NoSignInView() {
    return (
      <ImageBackground
        source={require('../../assets/images/mine/bg.png')} // 图片路径
        style={styles.container} // 背景样式
      >
        <Text style={styles.title}>Mova</Text>
        <View style={styles.btnRow}>
          <Button
            style={styles.btn}
            labelStyle={styles.btnText}
            mode="contained"
            onPress={onLogin}>
            Login
          </Button>
          <Button
            style={styles.btn}
            labelStyle={styles.btnText}
            mode="contained"
            onPress={onRegister}>
            Register
          </Button>
        </View>
      </ImageBackground>
    );
  }

  function SignedView() {
    const DATA = [
      {id: '1', title: 'Device Sharing'},
      {id: '2', title: 'Voice Control'},
      {id: '3', title: 'Help & Feedback'},
      {id: '4', title: 'Settings'},
    ];

    return (
      <ImageBackground
        source={require('../../assets/images/mine/signedBg.png')} // 图片路径
        style={styles.container} // 背景样式
      >
        <View style={styles.firstBox}>
          <Text style={styles.title}>My Profile</Text>
          <View style={styles.idCard}>
            <Avatar.Image
              size={50}
              source={require('../../assets/images/mine/default.png')}
            />
            <View style={styles.infoBox}>
              <Text style={styles.username}>LiHua</Text>
              <Text>Account ID: 123456</Text>
            </View>
            <Button>
              <View style={styles.editContainer}>
                <Image
                  style={styles.editor}
                  source={require('../../assets/images/mine/edit.png')}
                />
              </View>
            </Button>
          </View>
        </View>
        <CellList
          data={DATA}
          listTitle="other settings"
          titleStyle={styles.listTitle}
          itemStyle={styles.listItem}
        />
      </ImageBackground>
    );
  }

  if (isSignIn) {
    return NoSignInView();
  } else {
    return SignedView();
  }
};

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  firstBox: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  title: {
    marginTop: 34,
    marginBottom: 32,
    fontSize: 22,
    color: '#fff',
    letterSpacing: 6,
    textAlign: 'center',
    fontWeight: 700,
  },
  btnRow: {
    flexDirection: 'row',
    marginBottom: height / 6,
    justifyContent: 'space-between',
    paddingLeft: 30,
    paddingRight: 30,
  },
  btn: {
    width: width / 3,
  },
  btnText: {},
  idCard: {
    width: width * 0.8,
    height: 100,
    backgroundColor: '#fff',
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 18,
  },
  infoBox: {
    height: 50,
    justifyContent: 'space-between',
  },
  username: {
    fontSize: 20,
    fontWeight: 900,
  },
  editContainer: {
    width: 50,
    height: 50,
    backgroundColor: '#ddd',
    padding: 8,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  editor: {
    width: 30,
    height: 30,
  },
  listTitle: {
    fontSize: 16,
    fontWeight: 900,
  },
  listItem: {
    width: width * 0.8,
  },
});

export default MineScreen;
