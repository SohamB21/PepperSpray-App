import React, {useContext, useState} from 'react';
import {View, Text, TouchableOpacity, Image, Platform, StyleSheet, ScrollView} from 'react-native';
import FormInput from '../components/FormInput';
import FormButton from '../components/FormButton';
import SocialButton from '../components/SocialButton';
import { COLORS, FONTFAMILY } from '../theme/theme';
import {AuthContext} from '../navigators/AuthProvider';

const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const {user} = useContext(AuthContext);
  const {login} = useContext(AuthContext);

  const handleLoginPress = () => {
    console.log("Login clicked.");
    login();
  };
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image
        source={require('../assets/images/PepSpray-Ico.png')}
        style={styles.logoImage}
      />
      <Text style={styles.text}>Login To PepperSpray!</Text>

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

      <FormButton
        buttonTitle="Log In"
        onPress={handleLoginPress}
      />

      <TouchableOpacity style={styles.underlinedButtonWrapper} onPress={() => {}}>
        <Text style={styles.navButtonText}>Forgot Password?</Text>
      </TouchableOpacity>

      {Platform.OS === 'android' ? (
        <View>
          <SocialButton
            buttonTitle="Log In With Google"
            btnType="google"
            color={COLORS.PrimaryText}
            backgroundColor={COLORS.SpecialForegroundElement}
            onPress={() => {}}
          />

          <SocialButton
            buttonTitle="Log In With Facebook"
            btnType="facebook"
            color={COLORS.PrimaryText}
            backgroundColor={COLORS.SpecialForegroundElement}
            onPress={() => {}}
          />
        </View>
      ) : null}

      <TouchableOpacity
        style={styles.underlinedButtonWrapper}
        onPress={() => navigation.navigate('Signup')}>
        <Text style={styles.navButtonText}>
          Don't Have An Acount? Create Here
        </Text>
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
});