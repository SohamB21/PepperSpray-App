import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TabNavigator from './app/navigators/TabNavigator';
import SettingsScreen from './app/screens/SettingsScreen';
import HomeScreen from './app/screens/HomeScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  console.log('PepperSpray is executed by Soham');

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen
          name="Tab"
          component={TabNavigator}
          options={{animation: 'default'}}
        />

        <Stack.Screen
          name="Settings"
          component={SettingsScreen}
          options={{animation: 'slide_from_right'}}
        />

        <Stack.Screen name="HomeScreen" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
