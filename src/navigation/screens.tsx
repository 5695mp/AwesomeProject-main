import React from 'react';
import {createNativeStackNavigator} from 'react-native-screens/native-stack';
import constant from '../helper/constant';
import SlashScreen from '../screen/splash';
import TutorialScreen from '../screen/tutorial';
import FeedScreen from '../screen/feed';

const Stack =
  (constant.isIOS && createNativeStackNavigator()) ||
  createNativeStackNavigator();

export function Screen() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen
        name="Slash"
        options={{stackAnimation: 'none'}}
        component={SlashScreen}
      />
      <Stack.Screen
        name="Tutorial"
        options={{stackAnimation: 'none'}}
        component={TutorialScreen}
      />
      <Stack.Screen
        name="Feed"
        options={{stackAnimation: 'none'}}
        component={FeedScreen}
      />
    </Stack.Navigator>
  );
}
