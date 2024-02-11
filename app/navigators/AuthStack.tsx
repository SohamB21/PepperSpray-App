import React, {useState, useEffect} from 'react';
import {View} from 'react-native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignupScreen from '../screens/SignupScreen';
import LoginScreen from '../screens/LoginScreen';
import OnboardingScreen from '../screens/OnboardingScreen';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
	// const [isFirstLaunch, setIsFirstLaunch] = useState(null);
	// let routeName;

	// useEffect(() => {
	// 	AsyncStorage.getItem('alreadyLaunched').then((value) => {
	// 		if (value == null) {
	// 			AsyncStorage.setItem('alreadyLaunched', 'true');
	// 			setIsFirstLaunch(true);
	// 		} else {
	// 			setIsFirstLaunch(true); // false
	// 		}
	// 	});
	// }, []);

	// if(isFirstLaunch === null)
	// 	return null;
	// else if(isFirstLaunch == true)
	// 	routeName = 'Onboarding';
	// else
	// 	routeName = 'Login';

	// initialRouteName={routeName}

	return (
		<Stack.Navigator screenOptions={{ headerShown: false }} >
			<Stack.Screen name="Onboarding" component={OnboardingScreen} />
			<Stack.Screen name="Login" component={LoginScreen} options={{animation: 'slide_from_right'}} />
			<Stack.Screen name="Signup" component={SignupScreen} options={{animation: 'slide_from_right'}} />
		</Stack.Navigator>
	);
};

export default AuthStack;