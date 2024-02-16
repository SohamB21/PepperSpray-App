import React, { useContext, useState } from 'react';
import { View, Text, TouchableOpacity, Image, Platform, StyleSheet, ScrollView, ToastAndroid } from 'react-native';
import FormInput from '../components/FormInput';
import FormButton from '../components/FormButton';
import SocialButton from '../components/SocialButton';
import { COLORS, FONTFAMILY } from '../theme/theme';
import { AuthContext } from '../navigators/AuthProvider';
 
const SignupScreen = ({ navigation }) => {
  const [userName, setUserName] = useState();
  const [userId, setUserId] = useState();
  const [phoneNumber, setPhoneNumber] = useState();
  const [email, setEmail] = useState();
  const [address, setAddress] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const { user } = useContext(AuthContext);
  const { signup } = useContext(AuthContext);

  const handleSignupPress = () => {
    signup(userName, userId, phoneNumber, email, address, password);
  };

  const googleSignupPress = () => {
    ToastAndroid.show('Google signup feature is currently not working in the app.', ToastAndroid.SHORT);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image
        source={require('../assets/images/PepSpray-Ico.png')}
        style={styles.logoImage}
      />
      <Text style={styles.text}>Welcome To PepperSpray!</Text>

      <FormInput
        labelValue={userName}
        onChangeText={(userName) => setUserName(userName)}
        placeholderText="Enter First Name"
        iconType="user-alt"
        keyboardType="default"
        autoCapitalize="words"
        autoCorrect={false}
      />

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
        labelValue={phoneNumber}
        onChangeText={(userPhoneNumber) => setPhoneNumber(userPhoneNumber)}
        placeholderText="Enter Phone Number"
        iconType="phone-alt"
        keyboardType="phone-pad"
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
        labelValue={address}
        onChangeText={(userAddress) => setAddress(userAddress)}
        placeholderText="Enter Address"
        iconType="home"
        keyboardType="default"
        autoCapitalize="none"
        autoCorrect={false}
      />

      <FormInput
        labelValue={password}
        onChangeText={(userPassword) => setPassword(userPassword)}
        placeholderText="Enter Password"
        iconType="unlock-alt"
        secureTextEntry={true}
      />

      <FormInput
        labelValue={confirmPassword}
        onChangeText={(userPassword) => setConfirmPassword(userPassword)}
        placeholderText="Confirm Password"
        iconType="user-lock"
        secureTextEntry={true}
      />

      <FormButton
        buttonTitle="Sign Up"
        onPress={() => {
          if (!userName || !userId || !phoneNumber || !email || !address || !password || !confirmPassword) {
            ToastAndroid.show('Please fill in all fields to sign up.', ToastAndroid.LONG);
          } else if (password.length < 5) {
            ToastAndroid.show('Password should be at least 5 characters long.', ToastAndroid.LONG);
          } else if (password !== confirmPassword) {
            ToastAndroid.show('Passwords do not match.', ToastAndroid.LONG);
          } else {
            handleSignupPress();
          }
        }}
      />

      <View style={styles.termsPrivacyContainer}>
        <Text style={styles.acceptanceText}>
          By creating an account you accept our{' '}
        </Text>
        <TouchableOpacity onPress={() => ToastAndroid.show('Terms Of Service.', ToastAndroid.SHORT)}>
          <Text style={[styles.acceptanceText, { color: COLORS.SpecialText }]}>
            Terms Of Service
          </Text>
        </TouchableOpacity>
        <Text style={styles.acceptanceText}> and </Text>
        <TouchableOpacity onPress={() => ToastAndroid.show('Privacy Policy.', ToastAndroid.SHORT)}>
          <Text style={[styles.acceptanceText, { color: COLORS.SpecialText }]}>
            Privacy Policy.
          </Text>
        </TouchableOpacity>
      </View>

      {Platform.OS === 'android' ? (
        <View>
          <SocialButton
            buttonTitle="Sign Up With Google"
            btnType="google"
            color={COLORS.ForegroundElement}
            backgroundColor={COLORS.OnboardingOne}
            onPress={googleSignupPress}
          />
        </View>
      ) : null}

      <TouchableOpacity
        style={styles.underlinedButtonWrapper}
        onPress={() => navigation.navigate('Login')}>
        <Text style={styles.navButtonText}>Have An Acount? Log In</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default SignupScreen;

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
  termsPrivacyContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginVertical: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  acceptanceText: {
    color: COLORS.PrimaryText,
    fontFamily: FONTFAMILY.poppins_light,
    fontSize: 12,
  },
});

/* (Eg: John), (Eg: john_doe123), (Eg: +123456), (Eg: john1@google.com) */