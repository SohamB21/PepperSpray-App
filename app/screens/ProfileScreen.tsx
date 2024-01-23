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
    userName: "Zendaya",
    userId: "zendaya10",
    userBio: "Zendaya Maree Stoermer Coleman is an American actress and singer.",
    location: "California, US",
    joinedMonth: "May",
    joinedYear: "2023",
    verified: true,
    profilePicture: "https://i.pinimg.com/originals/24/ca/51/24ca51edd82d5828340f6a87edbbb529.jpg",
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
