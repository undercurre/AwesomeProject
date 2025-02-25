import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  StyleSheet,
  Image,
  Dimensions,
  Text,
} from 'react-native';
import {Searchbar} from 'react-native-paper';
import Carousel from 'react-native-snap-carousel';
import GoodItem from './components/GoodItem';

const carouselData = [
  {
    id: '1',
    image:
      'http://mova-cms.oss-cn-shanghai.aliyuncs.com/images/1738995116385.jpeg',
  },
  {
    id: '2',
    image:
      'http://mova-cms.oss-cn-shanghai.aliyuncs.com/images/1739260699689.png',
  },
  {
    id: '3',
    image:
      'http://mova-cms.oss-cn-shanghai.aliyuncs.com/images/1737883098134.png',
  },
  {
    id: '4',
    image:
      'http://mova-cms.oss-cn-shanghai.aliyuncs.com/undefined1737864157124.png',
  },
];

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const goods = [];

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
        <View style={styles.header}>
          <Text style={styles.headerText}>Mall</Text>
          <View style={styles.searchBar}>
            <Searchbar
              icon={require('../../assets/images/mall/search.png')}
              placeholder="Search"
              onChangeText={setSearchQuery}
              value={searchQuery}
            />
          </View>
        </View>
        {/* Carousel */}

        <View style={styles.carouselContainer}>
          {/* @ts-ignore */}
          <Carousel
            data={carouselData}
            renderItem={renderItem}
            sliderWidth={width} // 轮播图容器的宽度
            itemWidth={300} // 每个轮播项的宽度
            loop={true} // 循环播放
            autoplay={true} // 自动播放
            autoplayInterval={3000} // 自动播放间隔
          />
        </View>
        <View style={styles.gallery}>
          {Array.from(new Array(10), (_, i) => {
            return {
              id: i.toString(),
              image:
                'http://mova-cms.oss-cn-shanghai.aliyuncs.com/images/1738995116385.jpeg',
              name: `空气炸锅${i}号`,
              description:
                '采用智能温控系统，8档火力调节，15种烹饪模式，支持智能语音控制，让烹饪更轻松愉悦。',
              price: (i + 1) * 15,
            };
          }).map(item => (
            <View key={item.id} style={styles.goodItem}>
              <GoodItem
                id={item.id}
                image={item.image}
                name={item.name}
                description={item.description}
                price={item.price}
              />
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    flex: 1,
    width: width,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
    paddingRight: 10,
  },
  headerText: {
    fontSize: 20,
    paddingRight: 20,
    paddingLeft: 20,
    fontWeight: 900,
  },
  searchBar: {
    flex: 1,
  },
  carouselContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
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
  gallery: {
    width: width,
    marginTop: 20,
    marginBottom: 20,
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingLeft: 10,
    paddingRight: 10,
    gap: 10,
  },
  goodItem: {
    width: width / 2 - 15,
  },
});

export default MallScreen;
