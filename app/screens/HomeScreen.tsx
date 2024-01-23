import React, {useState} from 'react';
import {View, Text, ScrollView, StyleSheet} from 'react-native';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import Welcome from '../components/Welcome';
import Trending from '../components/Trending';

import {COLORS} from '../theme/theme';

const HomeScreen = ({navigation}: any) => {
  const [userName, setUserName] = useState('Sharmili');

  const posts = [
    {
      id: 1,
      profilePicture:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSd5S5928kiNaJ0bM5keDodBrk2p2Ce22HkGQ&usqp=CAU',
      user: 'Geetanjali',
      username: 'geetanjali26',
      comments: '46',
      downvotes: '18',
      upvotes: '363',
      time: '3h',
      title: 'More power to all women!',
    },
    {
      id: 2,
      profilePicture:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStavLoSzNk309zTkctHbJDSru4jGw_gkQ3zg&usqp=CAU',
      user: 'Ranvijay',
      username: 'ranvijay27',
      comments: '47',
      downvotes: '19',
      upvotes: '364',
      time: '4h',
      title: 'Sunai de raha hain, behra nahi hu main!',
    },
    {
      id: 3,
      profilePicture:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQE3a1kkTDVkwrUAWbiDxVNh-p9UPoZWzcqng&usqp=CAU',
      user: 'Balbir',
      username: 'balbir28',
      comments: '48',
      downvotes: '20',
      upvotes: '365',
      time: '5h',
      title: 'Papa papa papa!',
    },
  ];
   
  return (
    <View style={styles.container}>
      <Header screen="Home" icon="settings" />
      <ScrollView contentContainerStyle={styles.contentContainer}>

        <SearchBar placeholder="Search Cities" />
        <Welcome user={userName} />
        <Trending posts={posts} />
        
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
