/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  useColorScheme,
  View,
  Image,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {Dimensions} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from './views/home';
import MineScreen from './views/mine';
import QRCodeScannerPage from './views/scan';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <View style={styles.container}>
          <NavigationContainer>
            <StackNavigator />
          </NavigationContainer>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: width,
    minHeight: height,
    opacity: 0.8,
  },
  tabbarIcon: {
    width: 30,
    height: 30,
  },
});

// 创建底部 Tab 导航器
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarStyle: {
          backgroundColor: '#fff',
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
        tabBarActiveBackgroundColor: '#fff',
        tabBarInactiveBackgroundColor: '#fff',
        headerShown: false,
        animation: 'fade',
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: HomeTabIcon,
        }}
      />
      <Tab.Screen
        name="Mine"
        component={MineScreen}
        options={{
          tabBarIcon: MineTabIcon,
        }}
      />
    </Tab.Navigator>
  );
}

function StackNavigator() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Tab" component={TabNavigator} />
      <Stack.Screen name="QRScanner" component={QRCodeScannerPage} />
    </Stack.Navigator>
  );
}

const HomeTabIcon = () => (
  <Image
    source={require('./assets/images/home/home.png')} // 图片路径
    style={styles.tabbarIcon}
  />
);

const MineTabIcon = () => (
  <Image
    source={require('./assets/images/home/mine.png')} // 图片路径
    style={styles.tabbarIcon}
  />
);

export type RootStackParamList = {
  Home: undefined;
  Mine: undefined;
  QRScanner: undefined;
};

export default App;
