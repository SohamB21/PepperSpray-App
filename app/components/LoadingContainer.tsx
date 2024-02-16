import React from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';
import { COLORS, FONTFAMILY } from '../theme/theme';
import { windowHeight, windowWidth } from '../utils/Dimensions'; 

const LoadingContainer = ({ text, spinnerColor }) => {
  return (
    <View style={styles.overlay}>
      <View style={styles.loaderContainer}>
        <ActivityIndicator size={40} color={COLORS.SpecialForegroundElement2} />
        <Text style={styles.loaderText}>{text}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  overlay: {
    position: 'absolute',
    width: windowWidth,
    height: windowHeight,
    backgroundColor: COLORS.SpecialForegroundElement,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loaderContainer: {
    backgroundColor: COLORS.ForegroundElement,
    paddingVertical: 30,
    paddingHorizontal: 60,
    borderRadius: 10,
    elevation: 5,
  },
  loaderText: {
    color: COLORS.SpecialText,
    fontFamily: FONTFAMILY.poppins_medium,
    marginTop: 16,
    fontSize: 16,
  },
});

export default LoadingContainer;
