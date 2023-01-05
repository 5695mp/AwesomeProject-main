import React from 'react';
import {
  ScrollView,
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
import {AnimatedCircularProgress} from 'react-native-circular-progress';
import Constant from '../../../../helper/constant';
import InterestList from '../interest';

interface ListData {
  userName: string;
  age: number;
  km: number;
  per: number;
  interested: any[];
  onPressEffect?: (value: number, status: boolean) => void;
  index: number;
  isLike?: boolean;
}

function CellList({
  userName,
  age,
  km,
  per,
  interested,
  onPressEffect,
  index,
  isLike,
}: ListData) {
  const {
    container,
    profileMainContainer,
    profileContainer,
    profilePicContainer,
    textTitleBig,
    textDetail,
    textDetailKM,
    progressBarContainer,
    bottomContainer,
    unLikeContainer,
    likeContainer,
    bottomImages,
    userContainer,
    userSubContainer,
    profilePictureContainer,
    separatorLine,
    textPer,
    avtarImagePlaceholder,
    perValueText,
    likeColor,
  } = styles;
  let backCount = 0;

  const onPressDoubleClick = () => {
    backCount++;
    if (backCount === 2) {
      backCount = 0;
      clearTimeout(this.backTimer);
      if (onPressEffect) {
        onPressEffect(index, true);
      }
    } else {
      this.backTimer = setTimeout(() => {
        backCount = 0;
      }, 500);
    }
  };

  const renderLikeOrUnlike = () => {
    return (
      <View style={bottomContainer}>
        <TouchableOpacity
          onPress={() => {
            if (onPressEffect) {
              onPressEffect(index, false);
            }
          }}
          style={unLikeContainer}>
          <Image style={bottomImages} source={{uri: 'icon_not_like'}} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            if (onPressEffect) {
              onPressEffect(index, true);
            }
          }}
          style={[unLikeContainer, likeContainer, isLike ? likeColor : null]}>
          <Image style={bottomImages} source={{uri: 'icon_like'}} />
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <ScrollView nestedScrollEnabled style={container}>
      <TouchableOpacity
        activeOpacity={1}
        onPress={onPressDoubleClick}
        style={profileMainContainer}>
        {/* <View style={profileMainContainer}> */}
        <View>
          <View style={profileContainer}>
            <View style={profilePicContainer}>
              <Text style={avtarImagePlaceholder}>Avatar</Text>
            </View>
            <View style={userContainer}>
              <View style={userSubContainer}>
                <Text style={textTitleBig}>{userName}</Text>
                <Text style={textDetail}>{`Age ${age}`}</Text>
                <Text style={textDetailKM}>{`${km} KM away`}</Text>
              </View>
              <View style={profilePictureContainer}>
                <Text style={avtarImagePlaceholder}>{'Profile\nPicture'}</Text>
              </View>
            </View>
            <View style={progressBarContainer}>
              <AnimatedCircularProgress
                size={60}
                width={12}
                fill={per || 0}
                rotation={0}
                tintColor={Constant.progressBarFill}
                backgroundColor={Constant.progressBarUnFill}
              />
              <View style={perValueText}>
                <Text style={textPer}>{per || ''}</Text>
              </View>
            </View>
          </View>
          <View style={separatorLine} />
          {interested?.map(item => (
            <InterestList
              data={item?.option}
              isImageDetail={item?.isImageDetail}
            />
          ))}
          {renderLikeOrUnlike()}
          {/* </View> */}
        </View>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: Constant.screenWidth,
    height: Constant.screenHeight + 20,
    backgroundColor: '#FFF',
    overflow: 'hidden',
  },
  profileMainContainer: {
    width: Constant.screenWidth - 34,
    marginHorizontal: 17,
    borderRadius: 10,
    backgroundColor: '#F7F7F7',
    paddingVertical: 13,
  },
  profileContainer: {
    width: Constant.screenWidth - 62,
    marginHorizontal: 14,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#000',
    paddingVertical: 10,
  },
  profilePicContainer: {
    width: Constant.screenWidth - 84,
    height: Constant.screenWidth - 84,
    backgroundColor: '#DDDDDD',
    marginHorizontal: 9.5,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avtarImagePlaceholder: {
    fontSize: 15,
    color: Constant.colorDetail,
    fontWeight: '400',
  },
  textTitleBig: {
    fontSize: 24,
    color: Constant.colorDetail,
    fontWeight: '700',
    lineHeight: 26,
  },
  textDetail: {
    fontSize: 15,
    color: Constant.colorGray,
    fontWeight: '400',
    marginTop: 6,
  },
  textDetailKM: {
    fontSize: 15,
    color: Constant.colorGray,
    fontWeight: '400',
  },
  textPer: {
    fontSize: 15,
    color: Constant.colorDetail,
    fontWeight: '700',
  },
  progressBarContainer: {
    position: 'absolute',
    left: Constant.screenWidth / 2 - 60,
    bottom: -26,
    width: 52,
    height: 52,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF',
    borderColor: '#000',
    borderWidth: 2,
    overflow: 'hidden',
  },
  bottomContainer: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: 24,
  },
  unLikeContainer: {
    width: 60,
    height: 60,
    borderRadius: 30,
    borderWidth: 2,
    borderColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  likeContainer: {marginLeft: 18},
  likeColor: {backgroundColor: 'red'},
  bottomImages: {width: 30, height: 30, resizeMode: 'contain'},
  userContainer: {flexDirection: 'row', marginTop: 11, marginHorizontal: 24},
  userSubContainer: {flex: 1, justifyContent: 'center'},
  profilePictureContainer: {
    width: 102,
    height: 102,
    backgroundColor: '#DDDDDD',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },
  separatorLine: {
    width: '100%',
    height: 2,
    backgroundColor: '#EBEBEB',
    marginTop: 51,
  },
  perValueText: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default CellList;
