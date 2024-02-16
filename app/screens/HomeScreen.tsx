import React, {useContext, useState} from 'react';
import {View, Text, ScrollView, StyleSheet, TouchableOpacity} from 'react-native';

import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import Welcome from '../components/Welcome';
import Map from '../components/Map';
import Trending from '../components/Trending';
import {AuthContext} from '../navigators/AuthProvider';
import {COLORS} from '../theme/theme';

const HomeScreen = ({navigation}: any) => {
  const [userName, setUserName] = useState('Sharmili');
  const {user} = useContext(AuthContext);

 const posts = [
    {
      id: 1,
      profilePicture:
        'https://i.pinimg.com/236x/8a/f6/82/8af6821d49b5785f48ccc9c7ef3e3bab.jpg',
      user: 'Emma',
      username: 'emma26',
      comments: '46',
      downvotes: '18',
      upvotes: '363',
      time: '3h',
      title: 'On the subway and being harassed by a man. Need advice or assistance. #Harassment #PublicTransit',
    },
    {
      id: 2,
      profilePicture:
        'https://images.pexels.com/photos/1280638/pexels-photo-1280638.jpeg',
      user: 'Ryan',
      username: 'ryan_xo',
      comments: '47',
      downvotes: '19',
      upvotes: '364',
      time: '4h',
      title: 'Just got harassed by a group of guys in the college canteen because of my sexuality. Left shaken. #LGBTQ+ #Bullying',
    },
    {
      id: 3,
      profilePicture:
        'https://i.pinimg.com/736x/9a/47/73/9a47735b12887ba82933e1cb6ef22adc.jpg',
      user: 'Sarah',
      username: 'sarah17',
      comments: '47',
      downvotes: '19',
      upvotes: '364',
      time: '4h',
      title: 'At a nightclub and being aggressively approached by a stranger. Feeling unsafe. Any tips on how to handle this situation? #Nightlife #Safety',
    },
    {
      id: 4,
      profilePicture: 'https://i.pinimg.com/originals/c2/dc/ca/c2dcca609308f72ab76e3a9c87a35094.jpg',
      user: 'Alex',
      username: 'alex123',
      comments: '40',
      downvotes: '8',
      upvotes: '250',
      time: '1d',
      title: 'Hey @emma26, sorry to hear about your situation on the subway. If you are still feeling uncomfortable, consider moving to a crowded area or contacting transit security. Stay safe!',
    },
    {
      id: 5,
      profilePicture: 'https://cdn4.sharechat.com/attitudegirl,dpwallpaper_5deb6d7_1647847898349_sc_cmprsd_75.jpg?tenant=sc&referrer=pwa-sharechat-service&f=rsd_75.jpg',
      user: 'Samantha',
      username: 'samantha89',
      comments: '35',
      downvotes: '10',
      upvotes: '200',
      time: '2h',
      title: 'Received unwanted advances from a coworker at the office today..unsure how to handle it. Any advice appreciated. #HelpNeeded',
    },
    {
      id: 6,
      profilePicture: 'https://i.pinimg.com/originals/96/5a/33/965a33cf28be7e31250b6b87f1409a89.jpg',
      user: 'Chris',
      username: 'chris66',
      comments: '25',
      downvotes: '5',
      upvotes: '150',
      time: '3h',
      title: 'Experienced catcalling while jogging in the park. Not sure how to respond. Any suggestions on dealing with this? #StreetHarassment ',
    }
    
  ];

  const handleSearchPress = () => {
    navigation.navigate('DetectionScreen');
  };
   
  return (
    <View style={styles.container}>
      <Header screen="Home" icon="settings" />
      <ScrollView contentContainerStyle={styles.contentContainer}>

        <TouchableOpacity onPress={handleSearchPress}>
          <SearchBar placeholder="Search places" />
        </TouchableOpacity>
        <Welcome user={userName} />
        <Map fixedHeight={300} />
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
  }
});

export default HomeScreen;