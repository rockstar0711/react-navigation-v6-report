import React from 'react';
import {
  HOME,
} from '../constants/routeNames';
import Home from '../screens/Home';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View } from 'react-native';

const HomeNavigator = () => {
  const HomeStack = createNativeStackNavigator();

  return (
    <>
      <HomeStack.Navigator initialRouteName={HOME}>
        <HomeStack.Screen
          name={HOME}
          component={Home}
          options={{
            headerTransparent: true,
            headerTitleAlign: 'center',
            headerLeft: () => (
              <View style={{ width: 30, height: 30, backgroundColor: 'blue' }} />
            ),
            headerTitle: () => (
              <View style={{ width: 30, height: 30, backgroundColor: 'red' }} />
            ),
            headerRight: () => (
              <View style={{ width: 30, height: 30, backgroundColor: 'green' }} />
            ),
          }}></HomeStack.Screen>

      </HomeStack.Navigator>
    </>
  );
};

export default HomeNavigator;
