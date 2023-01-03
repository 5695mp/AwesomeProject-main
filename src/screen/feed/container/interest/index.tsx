import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import Constant from '../../../../helper/constant';

interface ListData {
  title: string;
  image: string;
  detail: string;
}

interface InterestedInterface {
  data?: ListData[];
  isImageDetail?: any;
}

function InterestList({data, isImageDetail}: InterestedInterface) {
  const {
    container,
    interestOneContainer,
    imageContainer,
    imageViewSize,
    textTitleBig,
    interestTextContainer,
    interestSecondContainer,
    interestImageContainer,
    textDetailBig,
    imageDetailContainer,
    imageDetailImageContainer,
    imageHeaderTextStyle,
  } = styles;

  const renderImageView = () => {
    return (
      <View style={imageDetailContainer}>
        {isImageDetail?.name ? (
          <Text style={[textDetailBig, imageHeaderTextStyle]}>
            {isImageDetail?.name}
          </Text>
        ) : null}

        <View style={imageDetailImageContainer}>
          <Text style={textDetailBig}>{isImageDetail?.imageName}</Text>
        </View>
      </View>
    );
  };

  return (
    <View style={container}>
      <View style={interestOneContainer}>
        <View style={imageContainer}>
          <Image style={imageViewSize} source={{uri: data[0]?.image}} />
        </View>
        <View style={interestTextContainer}>
          <Text style={textTitleBig}>{data[0]?.title}</Text>
          {data[0]?.detail ? (
            <Text style={textDetailBig}>{data[0]?.detail}</Text>
          ) : null}
        </View>
      </View>
      <View style={interestSecondContainer}>
        <View style={interestTextContainer}>
          <Text style={textTitleBig}>{data[1]?.title}</Text>
          {data[1]?.detail ? (
            <Text style={textDetailBig}>{data[1]?.detail}</Text>
          ) : null}
        </View>
        <View style={interestImageContainer}>
          <Image style={imageViewSize} source={{uri: data[1]?.image}} />
        </View>
      </View>
      {isImageDetail ? renderImageView() : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {width: '100%', marginHorizontal: 29},
  interestOneContainer: {
    width: Constant.screenWidth - 65,
    flexDirection: 'row',
    marginVertical: 25,
    alignItems: 'center',
  },
  imageContainer: {
    width: 100,
    height: 100,
    backgroundColor: '#FFF',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageViewSize: {width: 60, height: 60},
  textTitleBig: {
    fontSize: 24,
    color: Constant.colorDetail,
    fontWeight: '700',
    lineHeight: 26,
  },
  textDetailBig: {
    fontSize: 13,
    color: Constant.colorDetail,
    fontWeight: '400',
    paddingHorizontal: 10,
  },
  interestTextContainer: {flex: 1, alignItems: 'center'},
  interestSecondContainer: {
    width: Constant.screenWidth - 90,
    flexDirection: 'row',
    marginBottom: 25,
    alignItems: 'center',
  },
  interestImageContainer: {
    width: 100,
    height: 100,
    backgroundColor: '#FFF',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageDetailContainer: {
    width: Constant.screenWidth - 62,
    marginLeft: -14,
    padding: 13,
    borderWidth: 2,
    borderColor: '#000',
    borderRadius: 10,
  },
  imageDetailImageContainer: {
    width: Constant.screenWidth - 90,
    height: (Constant.screenWidth - 90) * 0.68,
    backgroundColor: '#DDDDDD',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageHeaderTextStyle: {marginBottom: 10},
});

export default InterestList;
