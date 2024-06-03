import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import {windowHeight, windowWidth} from '../utils/Dimensions';
import { COLORS, FONTFAMILY } from '../theme/theme';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const FormInput = ({labelValue, placeholderText, iconType, maxLength, ...rest}) => {
  return (
    <View style={styles.inputContainer}>
      <View style={styles.iconStyle}>
        <FontAwesome5 name={iconType} size={22} color={COLORS.SpecialText} />
      </View>
      <TextInput
        value={labelValue}
        style={styles.input}
        numberOfLines={1}
        placeholder={placeholderText}
        placeholderTextColor={COLORS.SpecialForegroundElement}
        maxLength={maxLength}
        {...rest}
      />
    </View>
  );
};

export default FormInput;

const styles = StyleSheet.create({
  inputContainer: {
    marginVertical: 6,
    width: '98%',
    height: windowHeight / 15,
    borderColor: COLORS.SpecialForegroundElement2,
    borderRadius: 18,
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