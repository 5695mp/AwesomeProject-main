import React, {useRef, useState} from 'react';
import {FlatList, View, SafeAreaView} from 'react-native';
import CellList from './container/cell';
import stylesGlobal from '../../helper/globalStyle';
import Data from './API_Data.json';

const ListData = React.memo((props: any) => {
  return <CellList {...props} />;
});

export default function FeedScreen() {
  const flatListRef: any = useRef();
  const [listData] = useState(Data);

  const scrollListTo = (index: number, animated = true) => {
    if (index === listData.length) {
      alert('List is completed');
    } else {
      flatListRef.current.scrollToIndex({
        animated,
        index,
      });
    }
  };

  const renderItem = ({item, index}) => {
    return (
      <ListData
        key={index}
        index={index}
        {...item}
        onPressEffect={index => {
          scrollListTo(index + 1);
        }}
      />
    );
  };

  return (
    <SafeAreaView style={stylesGlobal.flexContainer}>
      <FlatList
        ref={flatListRef}
        data={listData}
        style={stylesGlobal.flexContainer}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        decelerationRate="fast"
        pagingEnabled
        scrollEventThrottle={2}
        scrollEnabled={false}
        bounces={false}
      />
    </SafeAreaView>
  );
}
