import React, {useContext} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {AuthContext} from './AuthProvider';
import LoadingContainer from '../components/LoadingContainer';

import TabNavigator from './TabNavigator';
import AuthStack from './AuthStack'; 

const Routes = () => {
	const {isLoading, userToken} = useContext(AuthContext);

	if (isLoading) {
		return <LoadingContainer text="Just a moment..." />;
	}

	return (
		<NavigationContainer>
			{userToken !== null ? <TabNavigator /> : <AuthStack />}
		</NavigationContainer>
	);
};

export default Routes;