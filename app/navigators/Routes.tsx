import React, {useContext, useState, useEffect} from 'react';
import {View, ActivityIndicator} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {AuthContext} from './AuthProvider';

import TabNavigator from './TabNavigator';
import AuthStack from './AuthStack'; 

const Routes = () => {
	const {isLoading, userToken} = useContext(AuthContext);

	if(isLoading){
		<View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
			<ActivityIndicator size={'large'} />
		</View>;
	}
	
	console.log('isLoading: ', isLoading);
	console.log('userToken: ', userToken);

	return (
		<NavigationContainer>
			{userToken !== null ? <TabNavigator /> : <AuthStack />}
		</NavigationContainer>
	);
};

export default Routes;