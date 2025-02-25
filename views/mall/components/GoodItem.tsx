import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const GoodItem = (good: {
  id: string;
  image: string;
  name: string;
  description: string;
  price: number;
}) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri: good.image,
        }}
      />
      <View style={styles.text}>
        <Text style={[styles.name]}>{good.name}</Text>
        <Text numberOfLines={2} style={[styles.description]}>
          {good.description}
        </Text>
        <Text style={[styles.price]}>${good.price}</Text>
      </View>
    </View>
  );
};

const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#ddd',
    borderRadius: 8,
  },
  image: {
    width: width / 2 - 15,
    height: 200,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  text: {
    paddingLeft: 3,
    marginTop: 2,
    marginBottom: 2,
  },
  name: {
    fontSize: 16,
    fontWeight: 700,
    alignSelf: 'flex-start',
  },
  description: {
    fontSize: 12,
  },
  price: {
    fontSize: 16,
    fontWeight: 900,
    alignSelf: 'flex-start',
  },
});

export default GoodItem;
