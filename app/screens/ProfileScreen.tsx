import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import Header from '../components/Header';
import ProfileAbout, { UserProfile } from '../components/ProfileAbout';
import { COLORS } from '../theme/theme';
import AchievementBadges from '../components/AchievementBadges';
import GoldAward from '../assets/badges/GoldAward.png';
import SilverAward from '../assets/badges/SilverAward.png';
import BronzeAward from '../assets/badges/BronzeAward.png';
import MyPost from '../components/MyPost';
import userAnimated from '../assets/images/userAnimated.jpg';

const ProfileScreen = () => {
  const userProfile: UserProfile = {
    userName: "Sharmili",
    userId: "sharmili10",
    userBio: "A strong and independent woman.",
    location: "Kolkata, India",
    joinedMonth: "May",
    joinedYear: "2023",
    verified: true,
    profilePicture: require("../assets/images/user.jpg"),
  };

  const achievementsData = [
    { title: "Safety Advocate", icon: GoldAward },
    { title: "Bug Buster", icon: SilverAward },
    { title: "Consistent Connector", icon: BronzeAward },
    { title: "Spread the Safety", icon: GoldAward },
    { title: "Verified Pepper", icon: BronzeAward },
  ];

  const posts = [
    {
      id: 1,
      profilePicture: 'https://static.vecteezy.com/system/resources/previews/020/389/525/original/hand-drawing-cartoon-girl-cute-girl-drawing-for-profile-picture-vector.jpg',
      user: 'Sharmili',
      username: 'sharmili10',
      comments: 10,
      downvotes: '10',
      upvotes: 10,
      time: '1h',
      title: 'Hey everyone.. thinking about publising an international petition on women safety! What are your thoughts about it? #lovetoall',
    },
    {
      id: 2,
      profilePicture: 'https://static.vecteezy.com/system/resources/previews/020/389/525/original/hand-drawing-cartoon-girl-cute-girl-drawing-for-profile-picture-vector.jpg',
      user: 'Sharmili',
      username: 'sharmili10',
      comments: 20,
      downvotes: '20',
      upvotes: 20,
      time: '2h',
      title: 'Glad to be an user here. More power to all fellow women!',
    },
  ];

  return (
    <View style={styles.container}>
      <Header screen="Profile" icon="settings" />
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <ProfileAbout user={userProfile} />
        <AchievementBadges achievementsData={achievementsData} />
        <MyPost posts={posts} />
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