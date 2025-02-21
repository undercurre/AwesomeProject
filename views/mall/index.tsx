import React from 'react';
import {SafeAreaView, ScrollView, View, StyleSheet, Image} from 'react-native';
import {Searchbar} from 'react-native-paper';
import Carousel from 'react-native-snap-carousel';

const carouselData = [
  {id: '1', image: 'https://via.placeholder.com/350x150?text=Image+1'},
  {id: '2', image: 'https://via.placeholder.com/350x150?text=Image+2'},
  {id: '3', image: 'https://via.placeholder.com/350x150?text=Image+3'},
  {id: '4', image: 'https://via.placeholder.com/350x150?text=Image+4'},
];

const MallScreen = () => {
  const [searchQuery, setSearchQuery] = React.useState('');

  const renderItem = ({item}: {item: any}) => {
    return (
      <View style={styles.card}>
        <Image source={{uri: item.image}} style={styles.image} />
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        {/* <Text style={styles.header}>Mall</Text> */}
        <Searchbar
          icon={require('../../assets/images/mall/search.png')}
          placeholder="Search"
          onChangeText={setSearchQuery}
          value={searchQuery}
        />
        {/* Carousel */}

        <View style={styles.container}>
          {/* @ts-ignore */}
          <Carousel
            data={carouselData}
            renderItem={renderItem}
            sliderWidth={350} // 轮播图容器的宽度
            itemWidth={300} // 每个轮播项的宽度
            loop={true} // 循环播放
            autoplay={true} // 自动播放
            autoplayInterval={3000} // 自动播放间隔
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 300,
    height: 200,
    borderRadius: 10,
  },
});

export default MallScreen;
