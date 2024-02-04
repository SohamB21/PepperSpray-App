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
      // onSkip={() => navigation.replace("Login")}
      onDone={() => navigation.navigate("Login")}
      // onDone={() => navigation.replace("Login")}
      pages={[
        {
          backgroundColor: '#a6e4d0',
          image: <Image source={require('../assets/images/PepSprayAppIcon-draft.png')} 
          style={styles.onboardingImage} />,
          title: <Text style={styles.titleText}>Demo Title 1</Text>,
          subtitle: <Text style={styles.subtitleText}>Demo Subtitle 1</Text>,
        },
        {
          backgroundColor: '#fdeb93',
          image: <Image source={require('../assets/images/PepSprayAppIcon-draft.png')} 
          style={styles.onboardingImage} />,
          title: <Text style={styles.titleText}>Demo Title 2</Text>,
          subtitle: <Text style={styles.subtitleText}>Demo Subtitle 2</Text>,
        },
        {
          backgroundColor: '#e9bcbe',
          image: <Image source={require('../assets/images/PepSprayAppIcon-draft.png')} 
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
    fontFamily: FONTFAMILY.poppins_semibold, 
    color: COLORS.PrimaryText, 
  },
  subtitleText: {
    fontSize: 14, 
    fontFamily: FONTFAMILY.poppins_medium, 
    color: COLORS.PrimaryText, 
  },
});
