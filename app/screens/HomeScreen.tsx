import React, {useState} from 'react';
import {View, Text, ScrollView, StyleSheet} from 'react-native';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import Welcome from '../components/Welcome';
import {COLORS} from '../theme/theme';

const HomeScreen = ({navigation}: any) => {
  const [userName, setUserName] = useState('Sharmili');

  return (
    <View style={styles.container}>
      <Header screen="Home" icon="settings" />
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <SearchBar placeholder="Search Cities" />
        <Welcome user={userName} />

        <Text style={styles.welcomeText}>Welcome to PepperSpray!</Text>
        <Text style={styles.welcomeText}>Welcome to PepperSpray!</Text>
        <Text style={styles.welcomeText}>Welcome to PepperSpray!</Text>
        <Text style={styles.welcomeText}>Welcome to PepperSpray!</Text>
        <Text style={styles.welcomeText}>Welcome to PepperSpray!</Text>
        <Text style={styles.welcomeText}>Welcome to PepperSpray!</Text>
        <Text style={styles.welcomeText}>Welcome to PepperSpray!</Text>
        <Text style={styles.welcomeText}>Welcome to PepperSpray!</Text>
        <Text style={styles.welcomeText}>Welcome to PepperSpray!</Text>
        <Text style={styles.welcomeText}>Welcome to PepperSpray!</Text>
        <Text style={styles.welcomeText}>Welcome to PepperSpray!</Text>
        <Text style={styles.welcomeText}>Welcome to PepperSpray!</Text>
        <Text style={styles.welcomeText}>Welcome to PepperSpray!</Text>
        <Text style={styles.welcomeText}>Welcome to PepperSpray!</Text>
        <Text style={styles.welcomeText}>Welcome to PepperSpray!</Text>
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
    padding: 12,
  },
  welcomeText: {
    color: COLORS.PrimaryText,
    fontSize: 18,
    marginTop: 16,
  },
});

export default HomeScreen;
