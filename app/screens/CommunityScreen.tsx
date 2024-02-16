import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import Header from '../components/Header';
import Post from '../components/Post';
import { COLORS } from '../theme/theme';

const CommunityScreen = () => {
  const posts = [
    {
      id: 1,
      profilePicture: "https://ienglishstatus.com/wp-content/uploads/2022/04/DP-Pics-For-Girls-Cartoon-576x1024.jpg",
      user: 'Rosy',
      username: 'rosy87',
      comments: 150,
      downvotes: 5,
      upvotes: 120,
      time: '2h',
      title: 'Warning: Avoid Street 11 after dark. Survived a concerning incident there last night. #SafetyAlert #Neighborhood',
    },
    {
      id: 2,
      profilePicture: "https://static.vecteezy.com/system/resources/previews/020/389/525/original/hand-drawing-cartoon-girl-cute-girl-drawing-for-profile-picture-vector.jpg",
      user: 'Sharmili',
      username: 'sharmili10',
      comments: 10,
      downvotes: '10',
      upvotes: 10,
      time: '3h',
      title: 'Hey everyone.. thinking about publising an international petition on women safety! What are your thoughts about it? #lovetoall',
    },
    {
      id: 3,
      profilePicture: "https://wishes143.com/wp-content/uploads/2023/12/aesthetic-boy-dp-for-insta-e1702896500673.jpg",
      user: 'John',
      username: 'john87',
      comments: 15,
      downvotes: 5,
      upvotes: 20,
      time: '3h',
      title: 'Considering starting a community workshop on self-defense techniques for women. Would anyone be interested in joining? #SelfDefense #Empowerment',
    },
    {
      id: 10,
      profilePicture: "https://i0.wp.com/earnurl.in/wp-content/uploads/2023/03/best-dp-girls.webp?resize=840%2C931&ssl=1",
      user: 'Julie',
      username: 'julie_activist',
      comments: 20,
      downvotes: 3,
      upvotes: 25,
      time: '8h',
      title: "Attending @john87's a workshop on self-defense techniques specifically for women. Lets empower ourselves! #SelfDefense #Empowerment",
    },
    {
      id: 5,
      profilePicture:
        'https://wishes143.com/wp-content/uploads/2022/10/aesthetic-anime-girl-dp.jpg',
      user: 'Aishwarya',
      username: 'aishwarya17',
      comments: '42',
      downvotes: '3',
      upvotes: '55',
      time: '5h',
      title: 'Sharing tips for staying safe while traveling alone as a woman. Knowledge is power! #TravelSafety #WomenEmpowerment',
    },
    {
      id: 6,
      profilePicture:
        'https://cdn4.sharechat.com/compressed_gm_40_img_228008_1e77e3c5_1698132224989_sc.jpg?tenant=sc&referrer=pwa-sharechat-service&f=989_sc.jpg',
      user: 'Anoushka',
      username: 'anu21_',
      comments: '22',
      downvotes: '10',
      upvotes: '100',
      time: '5h',
      title: 'Creating a support group for women to share their experiences and support each other in navigating safety concerns. Together, we are stronger! #SupportGroup #WomenSafety',
    },
  ];

  return (
    <View style={styles.container}>
      <Header screen="Community" icon="settings" />
      <ScrollView contentContainerStyle={styles.contentContainer}>
        {posts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
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
});
export default CommunityScreen;