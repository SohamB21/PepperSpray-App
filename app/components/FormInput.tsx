import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import {windowHeight, windowWidth} from '../utils/Dimensions';
import { COLORS, FONTFAMILY } from '../theme/theme';
import Feather from 'react-native-vector-icons/Feather';

const FormInput = ({labelValue, placeholderText, iconType, ...rest}) => {
  return (
    <View style={styles.inputContainer}>
      <View style={styles.iconStyle}>
        <Feather name={iconType} size={26} color={COLORS.SpecialForegroundElement} />
      </View>
      <TextInput
        value={labelValue}
        style={styles.input}
        numberOfLines={1}
        placeholder={placeholderText}
        placeholderTextColor={COLORS.SpecialForegroundElement}
        {...rest}
      />
    </View>
  );
};

export default FormInput;

const styles = StyleSheet.create({
  inputContainer: {
    marginTop: 5,
    marginBottom: 10,
    width: '100%',
    height: windowHeight / 15,
    borderColor: COLORS.SpecialForegroundElement2,
    borderRadius: 10,
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.ForegroundElement,    
  },
  iconStyle: {
    padding: 10,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRightColor: COLORS.SpecialForegroundElement2,
    borderRightWidth: 1,
    width: 50,
  },
  input: {
    padding: 10,
    flex: 1,
    fontSize: 15,
    color: COLORS.PrimaryText,
    fontFamily: FONTFAMILY.poppins_regular,
    justifyContent: 'center',
    alignItems: 'center',
  },
});