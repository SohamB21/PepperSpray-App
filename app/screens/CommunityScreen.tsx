import React from 'react';
import {View, Text, ScrollView, StyleSheet} from 'react-native';
import Header from '../components/Header';
import {COLORS} from '../theme/theme';

const CommunityScreen = () => {
  return (
    <View style={styles.container}>
      <Header screen="Community" icon="settings" />
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <Text style={styles.welcomeText}>Welcome to Community!</Text>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.Background,
  },
  contentContainer: {
    padding: 16,
  },
  welcomeText: {
    color: COLORS.PrimaryText,
    fontSize: 18,
    marginTop: 20,
  },
});
export default CommunityScreen;
