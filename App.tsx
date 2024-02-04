import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabNavigator from './app/navigators/TabNavigator';

import OnboardingScreen from './app/screens/OnboardingScreen';
import LoginScreen from './app/screens/LoginScreen';
import SignupScreen from './app/screens/SignupScreen';

import SettingsScreen from './app/screens/SettingsScreen';
import HomeScreen from './app/screens/HomeScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createNativeStackNavigator();

const App = () => {
  console.log('PepperSpray is executed by Soham');

  // to handle onboarding screens for first launch only
  const [isFirstLaunch, setIsFirstLaunch] = React.useState(null);

  useEffect(() => {
    AsyncStorage.getItem('onboardingShown').then((value) => {
      if (value == null) {
        AsyncStorage.setItem('onboardingShown', 'true');
        setIsFirstLaunch(true);
      }
      else
        setIsFirstLaunch(true); // false
    });
  }, []);


  if(isFirstLaunch === null){
    return null;
  }
  else if(isFirstLaunch === true){
    return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Onboarding" component={OnboardingScreen} />
          <Stack.Screen name="Login" component={LoginScreen} options={{animation: 'slide_from_right'}} />
          <Stack.Screen name="Signup" component={SignupScreen} options={{animation: 'slide_from_right'}} />
          <Stack.Screen name="Tab" component={TabNavigator} options={{animation: 'default'}} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
  else {
    return <LoginScreen />
  }
};

export default App;

// Add more screens for additional navigation if needed 
// <Stack.Screen
//   name="Settings"
//   component={SettingsScreen}
//   options={{animation: 'slide_from_right'}}
// />
// <Stack.Screen name="HomeScreen" component={HomeScreen} />