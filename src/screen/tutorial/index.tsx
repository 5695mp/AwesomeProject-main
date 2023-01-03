import React, {useEffect, useState} from 'react';
import {StyleSheet, View, Image, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import AsyncStorage from '@react-native-async-storage/async-storage';
import GestureRecognizer from 'react-native-swipe-gestures';
import DoubleClick from 'react-native-double-click';
import Constant from '../../helper/constant';
import stylesGlobal from '../../helper/globalStyle';

export default function TutorialScreen() {
  const {
    container,
    imageStyle,
    textStyle,
    headerView,
    textHeaderSmall,
    textHeaderBig,
    imageSwipeStyle,
  } = styles;
  const navigation: any = useNavigation();
  const [tutorialPage, setTutorialPage] = useState(0);

  useEffect(() => {}, []);

  const onComplete = () => {
    if (tutorialPage === 1) {
      AsyncStorage.setItem('user', JSON.stringify({tutorialCompleted: true}));
      navigation.navigate('Feed', {});
    }
  };
  const config = {
    velocityThreshold: 0.3,
    directionalOffsetThreshold: 80,
  };

  return (
    <LinearGradient
      colors={Constant.splashScreenGradient}
      start={{x: 1, y: 0}}
      end={{x: 1, y: 1}}
      style={container}>
      <GestureRecognizer
        onSwipeUp={(direction, state) => onComplete()}
        config={config}
        style={{
          flex: 1,
        }}>
        <DoubleClick onClick={() => setTutorialPage(1)}>
          <View style={{flex: 1, alignItems: 'center'}}>
            <View style={[stylesGlobal.flexContainer, headerView]}>
              <Text style={textHeaderSmall}>
                {tutorialPage === 0
                  ? 'If you want to be friends with someone'
                  : "If you don't like someone"}
              </Text>
              <Text style={textHeaderBig}>
                {tutorialPage === 0 ? 'Double-tap to LIKE' : 'Swipe up to PASS'}
              </Text>
            </View>
            <Image
              style={tutorialPage === 0 ? imageStyle : imageSwipeStyle}
              source={{
                uri:
                  tutorialPage === 0
                    ? 'activity_background_img'
                    : 'activity_background_swipe',
              }}
            />
            <View style={stylesGlobal.flexContainer}>
              <View style={stylesGlobal.flexContainer} />
              <Text style={textStyle}>
                {tutorialPage === 0
                  ? 'Double-tap to\ncontinue'
                  : 'Swipe-up to\ncontinue'}
              </Text>
            </View>
          </View>
        </DoubleClick>
      </GestureRecognizer>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageStyle: {
    height: Constant.screenWidth * 0.34 * 1.4,
    width: Constant.screenWidth * 0.34,
    marginLeft: Constant.screenWidth * 0.34 * 0.126,
    resizeMode: 'contain',
  },
  imageSwipeStyle: {
    height: Constant.screenWidth * 0.34 * 1.4,
    width: Constant.screenWidth * 0.34,
    marginLeft:
      Constant.screenWidth * 0.34 * 0.126 - Constant.screenWidth * 0.03,
    resizeMode: 'contain',
  },
  textStyle: {
    textAlign: 'center',
    color: Constant.colorText,
    marginBottom: 20,
    fontSize: 20,
  },
  textHeaderSmall: {
    fontSize: 16,
    color: Constant.colorText,
  },
  textHeaderBig: {
    fontSize: 32,
    fontWeight: '700',
    color: Constant.colorText,
  },
  headerView: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
