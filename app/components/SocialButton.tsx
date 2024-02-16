import React from 'react';
import {Text, TouchableOpacity, View, StyleSheet} from 'react-native';
import {windowHeight, windowWidth} from '../utils/Dimensions';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { COLORS, FONTFAMILY } from '../theme/theme';

const SocialButton = ({ buttonTitle, btnType, color, backgroundColor, ...rest }) => {
  let bgColor = backgroundColor;

  return (
    <TouchableOpacity
      style={[styles.buttonContainer, {backgroundColor: bgColor}]}
      {...rest} >
      <View style={styles.iconWrapper}>
        <FontAwesome name={btnType} size={24} color={color} style={styles.iconStyle} />
      </View>
      <View style={styles.textWrapper}>
        <Text style={[styles.buttonText, {color: color}]}>{buttonTitle}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default SocialButton;

const styles = StyleSheet.create({
  buttonContainer: {
    marginTop: 20,
    width: '70%',
    height: windowHeight / 15,
    padding: 10,
    flexDirection: 'row',
    borderRadius: 10,
    shadowColor: 'rgba(0, 0, 0, 0.75)', 
    shadowOffset: { width: 0.5, height: 0.5 }, 
    shadowRadius: 1, 
    elevation: 5, // For Android
  },
  iconWrapper: {
    width: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconStyle: {
    textShadowColor: 'rgba(0, 0, 0, 0.75)', 
    textShadowOffset: { width: 0.5, height: 0.5 }, 
    textShadowRadius: 1, 
  },
  textWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    fontFamily: FONTFAMILY.poppins_semibold,
    textShadowColor: 'rgba(0, 0, 0, 0.75)', 
    textShadowOffset: { width: 0.5, height: 0.5 }, 
    textShadowRadius: 1, 
  },
});