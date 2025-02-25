import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  StyleSheet,
  Dimensions,
} from 'react-native';
import {Divider, Searchbar} from 'react-native-paper';
import PostItem from './components/PostItem';

const SocialScreen = () => {
  const [searchQuery, setSearchQuery] = React.useState('');

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.headerText}>Post</Text>
          <View style={styles.searchBar}>
            <Searchbar
              icon={require('../../assets/images/mall/search.png')}
              placeholder="Search"
              onChangeText={setSearchQuery}
              value={searchQuery}
            />
          </View>
        </View>
        <View style={styles.gallery}>
          {Array.from(new Array(10), (_, i) => {
            return {
              id: i.toString(),
              image:
                'http://mova-cms.oss-cn-shanghai.aliyuncs.com/images/1738995116385.jpeg',
              name: `空气炸锅${i}号`,
              description:
                '这款智能厨房设备融合了先进的技术，为您的烹饪体验带来全新升级。它搭载了智能温控系统，能够精准监控和调整温度，确保每一道菜肴都达到完美的烹饪效果。无论是炖煮、煎炒还是蒸煮，温控系统都能根据不同的食材和烹饪方式自动调节，以达到最佳的火候。',
              price: (i + 1) * 15,
            };
          }).map(item => (
            <View key={item.id} style={styles.postItem}>
              <PostItem
                id={item.id}
                image={item.image}
                name={item.name}
                description={item.description}
                price={item.price}
              />
              <Divider style={styles.divider} bold={true} />
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
    backgroundColor: '#ffffff',
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
  gallery: {
    width: width,
    marginTop: 20,
    marginBottom: 20,
  },
  postItem: {
    width: width,
  },
  divider: {
    height: 4,
    backgroundColor: '#696969',
    opacity: 0.8,
  },
});

export default SocialScreen;
