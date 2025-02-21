import React, {useEffect, useState} from 'react';
import {
  FlatList,
  Text,
  View,
  StyleSheet,
  ViewStyle,
  TextStyle,
} from 'react-native';

// 定义Item的数据结构
interface ItemData {
  id: string;
  title: string;
}

// 定义传入的props类型
interface CellListProps {
  data: ItemData[]; // 数据数组
  itemStyle?: ViewStyle; // 每个item的样式
  titleStyle?: TextStyle; // 标题的样式
  listTitle?: string; // 列表标题
}

// 渲染每个Item
function Item({title, itemStyle}: {title: string; itemStyle?: ViewStyle}) {
  return (
    <View style={[styles.item, itemStyle]}>
      <Text>{title}</Text>
    </View>
  );
}

const CellList: React.FC<CellListProps> = ({
  data,
  itemStyle,
  titleStyle,
  listTitle,
}) => {
  // 用于保存separator的宽度
  const [separatorWidth, setSeparatorWidth] = useState<number | null>(null);

  // 在itemStyle发生变化时，重新计算separator的宽度
  useEffect(() => {
    if (itemStyle && itemStyle.width) {
      setSeparatorWidth(Number(itemStyle.width) * 0.9);
    } else {
      setSeparatorWidth(null);
    }
  }, [itemStyle]);

  // 渲染分隔符
  function renderSeparator() {
    return (
      <View
        style={[
          styles.separator,
          separatorWidth ? {width: separatorWidth} : {},
        ]}
      />
    );
  }

  return (
    <View style={styles.container}>
      {/* 如果传入了listTitle则显示标题 */}
      {listTitle && (
        <Text style={[styles.listTitle, titleStyle]}>{listTitle}</Text>
      )}

      <View style={styles.listContianer}>
        <FlatList
          data={data}
          renderItem={({item}) => (
            <Item title={item.title} itemStyle={itemStyle} />
          )}
          keyExtractor={item => item.id}
          ItemSeparatorComponent={renderSeparator}
          extraData={separatorWidth}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    paddingHorizontal: 10,
  },
  listTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  item: {
    padding: 15,
    backgroundColor: '#f9f9f9',
    borderRadius: 5,
  },
  separator: {
    marginLeft: 20,
    marginRight: 10,
    height: 1,
    backgroundColor: '#cccccc',
    marginVertical: 5,
  },
  listContianer: {
    borderRadius: 20,
  },
});

export default CellList;
