import React from 'react';
import {View, Text, ScrollView, StyleSheet} from 'react-native';
import Header from '../components/Header';
import Post from '../components/Post';
import {COLORS} from '../theme/theme';

const CommunityScreen = () => {
  const posts = [
    {
      id: 1,
      profilePicture:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSd5S5928kiNaJ0bM5keDodBrk2p2Ce22HkGQ&usqp=CAU',
      user: 'Geetanjali',
      username: 'geetanjali26',
      comments: '61',
      downvotes: '5',
      upvotes: '363',
      time: '3h',
      title: 'More power to all women!',
    },
    {
      id: 2,
      profilePicture:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9wex7BfhtcecOKbaCcNXrdMEhI6lOpIRdCQ&usqp=CAU',
      user: 'Ananya',
      username: 'ananya_25',
      comments: '16',
      downvotes: '7',
      upvotes: '44',
      time: '3h',
      title: 'More power to all women!',
    },
    {
      id: 3,
      profilePicture:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtmSkIfYsEX8UKxyyClnfi9ED5IRjWdY38DQ&usqp=CAU',
      user: 'Deepika',
      username: 'deepika12',
      comments: '17',
      downvotes: '18',
      upvotes: '774',
      time: '4h',
      title: 'More power to all women!',
    },
    {
      id: 4,
      profilePicture:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiOq30Hq9oYy4R8KaXqrMMYkp01jSOqSIZOg&usqp=CAU',
      user: 'Kiara',
      username: 'kiara186',
      comments: '46',
      downvotes: '1',
      upvotes: '112',
      time: '5h',
      title: 'More power to all women!',
    },
    {
      id: 5,
      profilePicture:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSX4WCIAOXStI155I8Iy8zNwTznTrmR2IOpwA&usqp=CAU',
      user: 'Aishwarya',
      username: 'aishwarya17',
      comments: '42',
      downvotes: '3',
      upvotes: '455',
      time: '5h',
      title: 'More power to all women!',
    },
    {
      id: 6,
      profilePicture:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnylG-OAaZBat3eDRLM2Fz0ttfg2XrVE5fHA&usqp=CAU',
      user: 'Katrina',
      username: 'katrina21_',
      comments: '22',
      downvotes: '10',
      upvotes: '152',
      time: '5h',
      title: 'More power to all women!',
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
