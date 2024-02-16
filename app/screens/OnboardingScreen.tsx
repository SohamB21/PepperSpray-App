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
          image: <Image source={require('../assets/images/GirlWithPhone.jpg')} 
          style={styles.onboardingImage} />,
          title: <Text style={styles.titleText}>Demo Title 1</Text>,
          subtitle: <Text style={styles.subtitleText}>Demo Subtitle 1</Text>,
        },
        {
          backgroundColor: COLORS.OnboardingTwo,
          image: <Image source={require('../assets/images/DemoMap.jpg')} 
          style={styles.onboardingImage} />,
          title: <Text style={styles.titleText}>Demo Title 2</Text>,
          subtitle: <Text style={styles.subtitleText}>Demo Subtitle 2</Text>,
        },
        {
          backgroundColor: COLORS.OnboardingThree,
          image: <Image source={require('../assets/images/WomenCommunity.jpg')} 
          style={styles.onboardingImage} />,
          title: <Text style={styles.titleText}>Demo Title 3</Text>,
          subtitle: <Text style={styles.subtitleText}>Demo Subtitle 3</Text>,
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
    width: 250,
    height: 250,
    resizeMode: 'contain',
    borderRadius: 125,
  },
  titleText: {
    fontSize: 24, 
    color: COLORS.Background,
    fontFamily: FONTFAMILY.poppins_bold,
    textShadowColor: 'rgba(0, 0, 0, 0.75)', 
    textShadowOffset: { width: 0.5, height: 0.5 }, 
    textShadowRadius: 1, 
  },
  subtitleText: {
    fontSize: 14, 
    fontFamily: FONTFAMILY.poppins_regular, 
    color: COLORS.PrimaryText, 
    textShadowColor: 'rgba(0, 0, 0, 0.75)', 
    textShadowOffset: { width: 0.5, height: 0.5 }, 
    textShadowRadius: 1, 
  },
});
