import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { COLORS, FONTFAMILY } from '../theme/theme';

const SplashScreen = ({ onFinish }) => {
  const [splashVisible, setSplashVisible] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setSplashVisible(false); 
    }, 2000);
  }, []);

  useEffect(() => {
    if (!splashVisible && onFinish) {
      onFinish();
    }
  }, [splashVisible]);

  if (splashVisible) {
    return (
      <View style={styles.container}>
          <Image
            source={require('../assets/images/PepSpray-Ico.png')}
            style={styles.logoImage}
          />
          <Text style={styles.text}>PepperSpray</Text>
      </View>
    );
  }

  // Once splashVisible is false, render null
  return null;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.ForegroundElement,
  },
  logoImage: {
    height: 200,
    width: 200,
    borderRadius: 100,
    resizeMode: 'contain',
    marginBottom: 10,
  },
  text: {
    color: COLORS.PrimaryText,
    fontFamily: FONTFAMILY.courgette_regular,
    fontSize: 30,
  },
});

export default SplashScreen;
