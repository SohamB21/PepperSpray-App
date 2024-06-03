import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { COLORS, FONTFAMILY } from '../theme/theme';
import Onboarding from 'react-native-onboarding-swiper';

const Dots = ({ selected }) => {
  let backgroundColor;
  backgroundColor = selected ? COLORS.PrimaryText : COLORS.SecondaryText;

  return (
    <View
      style={{
        width: 8,
        height: 8,
        marginHorizontal: 4,
        borderRadius: 4,
        backgroundColor,
      }}
    />
  );
};

const Skip = ({ ...props }) => (
  <TouchableOpacity
    style={{ marginHorizontal: 10 }}
    {...props}
  >
    <Text style={styles.textButton}>Skip</Text>
  </TouchableOpacity>
);

const Next = ({ ...props }) => (
  <TouchableOpacity
    style={{ marginHorizontal: 10 }}
    {...props}
  >
    <Text style={styles.textButton}>Next</Text>
  </TouchableOpacity>
);

const Done = ({ ...props }) => (
  <TouchableOpacity
    style={{ marginHorizontal: 10 }}
    {...props}
  >
    <Text style={styles.textButton}>Done</Text>
  </TouchableOpacity>
);

const OnboardingScreen = ({ navigation }) => {
  return (
    <Onboarding
      SkipButtonComponent={Skip}
      NextButtonComponent={Next}
      DoneButtonComponent={Done}
      DotComponent={Dots}
      onSkip={() => navigation.navigate("Login")}
      onDone={() => navigation.navigate("Login")}
      pages={[
        {
          backgroundColor: COLORS.OnboardingOne,
          image: <Image source={require('../assets/images/Being_Alerted-01.webp')} 
          style={styles.onboardingImage} />,
          title: <Text style={styles.titleText}>Stay Alerted</Text>,
          subtitle: <Text style={styles.subtitleText}>Safety At Your Fingertips.</Text>,
        },
        {
          backgroundColor: COLORS.OnboardingTwo,
          image: <Image source={require('../assets/images/DemoMap.jpg')} 
          style={styles.onboardingImage} />,
          title: <Text style={styles.titleText}>Navigate Safely</Text>,
          subtitle: <Text style={styles.subtitleText}>Empowering Women With Connectivity And Location Awareness.</Text>,
        },
        {
          backgroundColor: COLORS.OnboardingThree,
          image: <Image source={require('../assets/images/Community_To_Rely-01.webp')} 
          style={styles.onboardingImage} />,
          title: <Text style={styles.titleText}>Community To Trust</Text>,
          subtitle: <Text style={styles.subtitleText}>Building Bonds For A Safer Tomorrow.</Text>,
        },
      ]}
    />
  );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textButton: {
    fontSize: 15,
    fontFamily: FONTFAMILY.poppins_regular,
    color: COLORS.SpecialText,
  },
  onboardingImage: {
    width: 280,
    height: 280,
    resizeMode: 'contain',
    borderRadius: 120,
  },
  titleText: {
    fontSize: 28, 
    color: COLORS.Background,
    fontFamily: FONTFAMILY.poppins_bold,
    textShadowColor: 'rgba(0, 0, 0, 0.75)', 
    textShadowOffset: { width: 0.5, height: 0.5 }, 
    textShadowRadius: 5, 
  },
  subtitleText: {
    fontSize: 16, 
    color: COLORS.Background, 
    fontFamily: FONTFAMILY.poppins_bolditalic, 
    textShadowColor: 'rgba(0, 0, 0, 0.75)', 
    textShadowOffset: { width: 0.5, height: 0.5 }, 
    textShadowRadius: 1, 
    textAlign: 'center',
    padding: 10,
  },
});
