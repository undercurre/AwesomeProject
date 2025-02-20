/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {WebView} from 'react-native-webview';
import {RootStackParamList} from '../../App';
import {StackScreenProps} from '@react-navigation/stack';

type WebViewScreenProp = StackScreenProps<RootStackParamList, 'Webview'>;

const WebViewContainer: React.FC<WebViewScreenProp> = ({route}) => {
  const [url, setUrl] = useState(
    'http://81.71.85.68:9006/web/cms/markH5/product/1',
  );

  useEffect(() => {
    if (route.params) {
      setUrl(route.params.url);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <View style={styles.container}>
      <WebView source={{uri: url}} style={styles.webView} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  webView: {
    flex: 1,
  },
});

export default WebViewContainer;
