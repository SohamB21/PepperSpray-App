import React, { useContext, useState } from 'react';
import { View, Text, TouchableOpacity, Image, Platform, StyleSheet, ScrollView, ToastAndroid } from 'react-native';
import FormInput from '../components/FormInput';
import FormButton from '../components/FormButton';
import SocialButton from '../components/SocialButton';
import { COLORS, FONTFAMILY } from '../theme/theme';
import { AuthContext } from '../navigators/AuthProvider'; 

const LoginScreen = ({ navigation }) => {
  const [userId, setUserId] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const { user } = useContext(AuthContext);
  const { login } = useContext(AuthContext);

  const handleLoginPress = () => {
    ToastAndroid.show('Login Successful!', ToastAndroid.SHORT);
    login();
  };

  const googleLoginPress = () => {
    ToastAndroid.show('Google login feature is currently not working in the app.', ToastAndroid.SHORT);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image
        source={require('../assets/images/PepSpray-Ico.png')}
        style={styles.logoImage}
      />
      <Text style={styles.text}>Login To PepperSpray!</Text>

      <FormInput
        labelValue={userId}
        onChangeText={(userId) => setUserId(userId)}
        placeholderText="Enter User Tag"
        iconType="user-tag"
        keyboardType="default"
        autoCapitalize="none"
        autoCorrect={false}
      />

      <FormInput
        labelValue={email}
        onChangeText={(userEmail) => setEmail(userEmail)}
        placeholderText="Enter Email"
        iconType="google"
        keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
      />

      <FormInput
        labelValue={password}
        onChangeText={(userPassword) => setPassword(userPassword)}
        placeholderText="Enter Password"
        iconType="lock"
        secureTextEntry={true}
      />

      <FormButton
        buttonTitle="Log In"
        onPress={() => {
          if (!userId || !email || !password) {
            ToastAndroid.show('Please fill in all fields to log in.', ToastAndroid.LONG);
          } else if (password.length < 5) {
            ToastAndroid.show('Password should be at least 5 characters long.', ToastAndroid.LONG);
          } else {
            handleLoginPress();
          }
        }}
      />

      <TouchableOpacity 
        style={styles.underlinedButtonWrapper} 
        onPress={() => navigation.navigate('Signup')}>
        <Text style={styles.navButtonText}>Forgot Password?</Text>
      </TouchableOpacity>

      {Platform.OS === 'android' ? (
        <View>
          <SocialButton
            buttonTitle="Log In With Google"
            btnType="google"
            color={COLORS.ForegroundElement}
            backgroundColor={COLORS.OnboardingOne}
            onPress={googleLoginPress}
          />
        </View>
      ) : null}

      <TouchableOpacity
        style={styles.underlinedButtonWrapper}
        onPress={() => navigation.navigate('Signup')}>
        <Text style={styles.navButtonText}>Not registered? Sign up</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
    paddingTop: 40,
    backgroundColor: COLORS.SpecialForegroundElement2,
  },
  logoImage: {
    height: 200,
    width: 200,
    resizeMode: 'contain',
    borderRadius: 100,
  },
  text: {
    color: COLORS.SpecialText,
    fontFamily: FONTFAMILY.poppins_semibold,
    fontSize: 20,
    marginVertical: 20,
    textShadowColor: 'rgba(0, 0, 0, 0.75)', 
    textShadowOffset: { width: 0.5, height: 0.5 }, 
    textShadowRadius: 1, 
  },
  underlinedButtonWrapper: {
    marginVertical: 20,
  },
  navButtonText: {
    fontSize: 15,
    color: COLORS.SpecialText,
    fontFamily: FONTFAMILY.poppins_regular,
    textDecorationLine: 'underline',
  },
});