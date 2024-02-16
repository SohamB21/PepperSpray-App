import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { BASE_URL } from '../config/config';
import { ToastAndroid } from 'react-native';


export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(null);
	const [isLoading, setIsLoading] = useState(false);
	const [userToken, setUserToken] = useState(null);

	// only password and userToken hashing using bcrypt is left to be done
	const signup = (userName, userId, phone, email, address, password) => {
	  setIsLoading(true);
	  axios.post(`${BASE_URL}/add-new-user`, {
	  	success: true,
	    userName: userName,
	    userId: userId,
	    phone: phone,
	    email: email,
	    address: address,
	    password: password,
	    isLoggedIn: true,
	    userToken: userId 
	  })
	  .then(response => {
	    if (response.status === 201) {
	      console.log("Signup successful", response);
	      setUserToken(userId);
	      AsyncStorage.setItem('userToken', userId)
	      ToastAndroid.show('Signup Successful!', ToastAndroid.SHORT);
	    } else if (response.status === 208) {
	      console.log("User already exists", response);
	      ToastAndroid.show('An Account With This User Tag Already Exists. Try Another!', ToastAndroid.LONG);
	    } else {
	      console.error("Signup failed", response);
	      ToastAndroid.show('Signup Failed!', ToastAndroid.SHORT);
	    }
	  })
	  .catch(error => {
	    console.error("Error during signup: ", error);
	    ToastAndroid.show('Error During Signup!', ToastAndroid.SHORT);
	  })
	  .finally(() => {
	    setIsLoading(false);
	  });
	};

	const login = () => {
	  setIsLoading(true);
	  setUserToken('abcdefgh');
	  AsyncStorage.setItem('userToken', 'abcdefgh')
	    .then(() => {
	      console.log("Logged in");
	      setIsLoading(false);
	    })
	    .catch(error => {
	      console.error("Error during login: ", error);
	      setIsLoading(false);
	    });
	}
	
	console.log("userToken: ", userToken);

	const logout = () => {
	  setIsLoading(true);
	  setUserToken(null);
	  AsyncStorage.removeItem('userToken')
	    .then(() => {
	      console.log("Logged out");
	      setIsLoading(false);
	    })
	    .catch(error => {
	      console.error("Error during logout: ", error);
	      setIsLoading(false);
	    });
	}

	const isLoggedIn = async () => {
		try{
			setIsLoading(true);
			let userToken = await AsyncStorage.getItem('userToken');
			setUserToken(userToken);
			setIsLoading(false);
		} catch(e){
			console.log(`isLoggedIn error ${e}`);
		}
	}

	useEffect (() => {
		isLoggedIn();
	}, []);

	return (
		<AuthContext.Provider value={{ user, setUser, signup, login, logout, isLoading, userToken }}>
			{children}
		</AuthContext.Provider>
	);
};