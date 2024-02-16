import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';
import {windowHeight, windowWidth} from '../utils/Dimensions';
import { COLORS, FONTFAMILY } from '../theme/theme';

const FormButton = ({buttonTitle, ...rest}) => {
  return (
    <TouchableOpacity style={styles.buttonContainer} {...rest}>
      <Text style={styles.buttonText}>{buttonTitle}</Text>
    </TouchableOpacity>
  );
};

export default FormButton;

const styles = StyleSheet.create({
  buttonContainer: {
    marginTop: 40,
    width: '70%',
    height: windowHeight / 15,
    backgroundColor: COLORS.OnboardingOne, 
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    shadowColor: 'rgba(0, 0, 0, 0.75)', 
    shadowOffset: { width: 0.5, height: 0.5 }, 
    shadowRadius: 1, 
    elevation: 5, // For Android
  },
  buttonText: {
    fontSize: 18,
    color: COLORS.ForegroundElement,
    fontFamily: FONTFAMILY.poppins_semibold,
    textShadowColor: 'rgba(0, 0, 0, 0.75)', 
    textShadowOffset: { width: 0.5, height: 0.5 }, 
    textShadowRadius: 1, 
  },
});