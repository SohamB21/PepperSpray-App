import React, {useContext, useState} from 'react';
import {View, Text, TouchableOpacity, Image, Platform, StyleSheet, ScrollView} from 'react-native';
import FormInput from '../components/FormInput';
import FormButton from '../components/FormButton';
import SocialButton from '../components/SocialButton';
import { COLORS, FONTFAMILY } from '../theme/theme';

const SignupScreen = ({navigation}) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();


  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image
        source={require('../assets/images/PepSprayAppIcon-draft.png')}
        style={styles.logoImage}
      />
      <Text style={styles.text}>Welcome To PepperSpray!</Text>

      <FormInput
        labelValue={email}
        onChangeText={(userEmail) => setEmail(userEmail)}
        placeholderText="Enter Your Email"
        iconType="user"
        keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
      />

      <FormInput
        labelValue={password}
        onChangeText={(userPassword) => setPassword(userPassword)}
        placeholderText="Enter Your Password"
        iconType="lock"
        secureTextEntry={true}
      />

      <FormInput
        labelValue={confirmPassword}
        onChangeText={(userPassword) => setConfirmPassword(userPassword)}
        placeholderText="Confirm Your Password"
        iconType="user-check"
        secureTextEntry={true}
      />

      <FormButton
        buttonTitle="Sign Up"
        onPress={() => {}}
      />

      <View style={styles.termsPrivacyContainer}>
        <Text style={styles.acceptanceText}>
          By creating an account you accept our{' '}
        </Text>
        <TouchableOpacity onPress={() => alert('Terms Clicked!')}>
          <Text style={[styles.acceptanceText, {color: COLORS.SpecialText}]}>
            Terms Of Service
          </Text>
        </TouchableOpacity>
        <Text style={styles.acceptanceText}> and </Text>
        <TouchableOpacity onPress={() => alert('Privacy Clicked!')}>
          <Text style={[styles.acceptanceText, {color: COLORS.SpecialText}]}>
            Privacy Policy.
          </Text>
        </TouchableOpacity>
      </View>

      {Platform.OS === 'android' ? (
        <View>
          <SocialButton
            buttonTitle="Sign Up With Google"
            btnType="google"
            color={COLORS.PrimaryText}
            backgroundColor={COLORS.SpecialForegroundElement}
            onPress={() => {}}
          />

          <SocialButton
            buttonTitle="Sign Up With Facebook"
            btnType="facebook"
            color={COLORS.PrimaryText}
            backgroundColor={COLORS.SpecialForegroundElement}
            onPress={() => {}}
          />
        </View>
      ) : null}

      <TouchableOpacity
        style={styles.underlinedButtonWrapper}
        onPress={() => navigation.navigate('Login')}>
        <Text style={styles.navButtonText}>
          Have An Acount? Log In
        </Text>
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
    backgroundColor: COLORS.Background,
  },
  logoImage: {
    height: 200,
    width: 200,
    resizeMode: 'contain',
    borderRadius: 100,
  },
  text: {
    color: COLORS.SpecialText,
    fontFamily: FONTFAMILY.courgette_regular, 
    fontSize: 24,
    marginVertical: 20,
  },
  underlinedButtonWrapper: {
    marginVertical: 35,
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
    marginVertical: 35,
    justifyContent: 'center',
    alignItems: 'center',
  },
  acceptanceText: {
    color: COLORS.PrimaryText,
    fontFamily: FONTFAMILY.poppins_light,
    fontSize: 12,
  },
});