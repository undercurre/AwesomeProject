/* eslint-disable react/no-unstable-nested-components */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  useColorScheme,
  View,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {Dimensions} from 'react-native';
import {CommonActions, NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from './views/home';
import MineScreen from './views/mine';
import QRCodeScannerPage from './views/scan';
import WebViewContainer from './views/webview';
import {BottomNavigation, Icon, PaperProvider} from 'react-native-paper';
import LoginScreen from './views/login';
import RegisterScreen from './views/register';
import MallScreen from './views/mall';
import SocialScreen from './views/social';

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
      <View style={styles.container}>
        <NavigationContainer>
          <StackNavigator />
        </NavigationContainer>
      </View>
    </SafeAreaView>
  );
}

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: width,
    minHeight: height,
  },
  iconContainer: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
  },
  tabbarIcon: {
    width: 30,
    height: 30,
  },
});

// 创建底部 Tab 导航器
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator<RootStackParamList>();

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
      }}
      tabBar={({navigation, state, descriptors, insets}) => (
        <BottomNavigation.Bar
          navigationState={state}
          safeAreaInsets={insets}
          onTabPress={({route, preventDefault}) => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (event.defaultPrevented) {
              preventDefault();
            } else {
              navigation.dispatch({
                ...CommonActions.navigate(route.name, route.params),
                target: state.key,
              });
            }
          }}
          renderIcon={({route, focused, color}) => {
            const {options} = descriptors[route.key];
            if (options.tabBarIcon) {
              return options.tabBarIcon({focused, color, size: 24});
            }

            return null;
          }}
          getLabelText={({route}) => {
            const {options} = descriptors[route.key];
            const label =
              options.tabBarLabel !== undefined
                ? options.tabBarLabel
                : options.title !== undefined
                ? options.title
                : route.name;

            return label as string | undefined;
          }}
        />
      )}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: HomeTabIcon,
        }}
      />
      <Tab.Screen
        name="Post"
        component={SocialScreen}
        options={{tabBarIcon: socialTabIcon}}
      />
      <Tab.Screen
        name="Mall"
        component={MallScreen}
        options={{tabBarIcon: MallTabIcon}}
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
    <PaperProvider>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Tab" component={TabNavigator} />
        <Stack.Screen name="QRScanner" component={QRCodeScannerPage} />
        <Stack.Screen name="Webview" component={WebViewContainer} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
      </Stack.Navigator>
    </PaperProvider>
  );
}

const HomeTabIcon = ({color, size}: {color: string; size: number}) => (
  <Icon
    source={require('./assets/images/home/home.png')}
    color={color}
    size={size}
  />
);

const MineTabIcon = ({color, size}: {color: string; size: number}) => (
  <Icon
    source={require('./assets/images/home/mine.png')}
    color={color}
    size={size}
  />
);

const socialTabIcon = ({color, size}: {color: string; size: number}) => (
  <Icon
    source={require('./assets/images/home/social.png')}
    color={color}
    size={size}
  />
);

const MallTabIcon = ({color, size}: {color: string; size: number}) => (
  <Icon
    source={require('./assets/images/home/mall.png')}
    color={color}
    size={size}
  />
);

export type RootStackParamList = {
  Home: undefined;
  Mine: undefined;
  QRScanner: undefined;
  Tab: undefined;
  Webview: {url: string};
  Register: undefined;
  Login: undefined;
};

export default App;
