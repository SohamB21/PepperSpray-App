import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(null);
	const [isLoading, setIsLoading] = useState(true);
	const [userToken, setUserToken] = useState(null);

	const login = () => {
		setUserToken('abcdefgh');
		setIsLoading(false);
		console.log("Logged in");
	}
	console.log("Logged token: ", userToken);

	const logout = () => {
		setUserToken(null);
		setIsLoading(false);
	}

	return (
		<AuthContext.Provider value={{ user, setUser, login, logout, isLoading, userToken }}>
			{children}
		</AuthContext.Provider>
	);
};