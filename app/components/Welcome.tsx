import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {COLORS, FONTFAMILY} from '../theme/theme';

const Welcome = ({user}: {user: string}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>
        Welcome <Text style={styles.userText}>{user}</Text>,
      </Text>
      <Text style={styles.secondaryText}>To a safer world !</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'left',
    flexDirection: 'column',
    justifyContent: 'center',
    marginVertical: 14,
    paddingHorizontal: 4,
  },
  welcomeText: {
    color: COLORS.SpecialText,
    fontFamily: FONTFAMILY.poppins_semibold,
    fontSize: 20,
  },
  userText: {
    fontFamily: FONTFAMILY.courgette_regular,
    fontSize: 24,
  },
  secondaryText: {
    color: COLORS.SpecialText,
    fontFamily: FONTFAMILY.poppins_regular,
    fontSize: 16,
  },
});

export default Welcome;
