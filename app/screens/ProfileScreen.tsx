import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import Header from '../components/Header';
import ProfileAbout, { UserProfile } from '../components/ProfileAbout';
import { COLORS } from '../theme/theme';
import AchievementBadges from '../components/AchievementBadges';
import GoldAward from '../assets/badges/GoldAward.png';
import SilverAward from '../assets/badges/SilverAward.png';
import BronzeAward from '../assets/badges/BronzeAward.png';

const ProfileScreen = () => {
  const userProfile: UserProfile = {
    userName: "Sharmili",
    userId: "sharmili10",
    userBio: "A strong and independent woman.",
    location: "Kolkata, India",
    joinedMonth: "May",
    joinedYear: "2023",
    verified: true,
    profilePicture: "../assets/images/user.jpg",
  };

  const achievementsData = [
    { title: "Safety Advocate", icon: GoldAward },
    { title: "Bug Buster", icon: SilverAward },
    { title: "Consistent Connector", icon: BronzeAward },
    { title: "Spread the Safety", icon: GoldAward },
    { title: "Verified Pepper", icon: BronzeAward },
  ];

  return (
    <View style={styles.container}>
      <Header screen="Profile" icon="settings" />
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <ProfileAbout user={userProfile} />
        <AchievementBadges achievementsData={achievementsData}/>
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
    marginTop: 20,
  },
});

export default ProfileScreen;
