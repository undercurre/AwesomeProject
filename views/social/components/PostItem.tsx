import {Dimensions, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import VideoPlayer from 'react-native-video-player';
import {Avatar, Icon} from 'react-native-paper';

const keywords = ['智能家居', '空气炸锅'];

const PostItem = (good: {
  id: string;
  image: string;
  name: string;
  description: string;
  price: number;
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Avatar.Image
          size={50}
          source={require('../../../assets/images/mine/default.png')}
        />
        <View style={styles.info}>
          <View style={styles.infoTop}>
            <Text style={styles.username}>用户{good.id}</Text>
            <View style={styles.infoTopRight}>
              <Icon
                source={require('../../../assets/images/social/heart.png')}
                color={'#f40'}
                size={20}
              />
              <Icon
                source={require('../../../assets/images/social/error.png')}
                color={'#000000'}
                size={20}
              />
            </View>
          </View>
          <View style={styles.infoBottom}>
            <Text>推荐帖子·12h</Text>
          </View>
        </View>
      </View>
      <Text numberOfLines={2} style={[styles.description]}>
        【{good.description}】
      </Text>
      <View style={styles.keywordContainer}>
        {keywords.map(item => (
          <Text style={styles.keyword}>{`#${item}`}</Text>
        ))}
      </View>
      <VideoPlayer
        source={{
          uri: 'https://mova-cms.oss-cn-shanghai.aliyuncs.com/mp4s/1739932317583.mp4',
        }}
        customStyles={{
          wrapper: styles.videoWrapper,
        }}
      />
      <View style={styles.interaction}>
        <View style={styles.operationed}>
          <View style={styles.operationedContent}>
            <Icon
              source={require('../../../assets/images/social/liked.png')}
              size={20}
            />
            <Text style={styles.likedCount}>1236</Text>
          </View>
          <View style={styles.operationedContent}>
            <Text style={styles.operationedText}>Comment: 2337</Text>
            <Text style={styles.operationedText}>Share: 1002</Text>
          </View>
        </View>

        <View style={styles.operation}>
          <View style={styles.operationItem}>
            <Icon
              source={require('../../../assets/images/social/like.png')}
              size={20}
            />
            <Text>Like</Text>
          </View>
          <View style={styles.operationItem}>
            <Icon
              source={require('../../../assets/images/social/comment.png')}
              size={20}
            />
            <Text>Comment</Text>
          </View>
          <View style={styles.operationItem}>
            <Icon
              source={require('../../../assets/images/social/share.png')}
              size={20}
            />
            <Text>Share</Text>
          </View>
        </View>
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
    backgroundColor: '#f5f5f5',
  },
  header: {
    width: width,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 15,
    paddingBottom: 5,
  },
  info: {
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    height: 50,
    marginLeft: 10,
    paddingTop: 4,
    paddingBottom: 4,
  },
  infoTop: {
    flex: 1,
    flexDirection: 'row',
    width: width - 50 - 10 - 10 - 10,
    justifyContent: 'space-between',
  },
  infoTopRight: {
    flexDirection: 'row',
    width: 46,
    justifyContent: 'space-between',
  },
  infoBottom: {},
  keywordContainer: {
    width: width,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  keyword: {
    fontSize: 18,
    color: '#1e90ff',
  },
  username: {
    fontWeight: 800,
  },
  image: {
    width: width / 2 - 15,
    height: 200,
  },
  interaction: {
    paddingLeft: 3,
    marginTop: 2,
    marginBottom: 2,
  },
  operationed: {
    width: width,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 6,
    paddingLeft: 10,
    paddingRight: 10,
  },
  operationedContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  likedCount: {
    fontSize: 12,
    color: '#0f65f1',
  },
  operationedText: {
    fontSize: 12,
    marginRight: 10,
  },
  operation: {
    width: width,
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 6,
    marginBottom: 6,
  },
  operationItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  description: {
    fontSize: 18,
    paddingLeft: 5,
    paddingRight: 5,
  },
  videoWrapper: {
    width: width,
    height: 230,
  },
});

export default PostItem;
