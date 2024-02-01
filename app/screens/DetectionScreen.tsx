import React from 'react';
import { View, StyleSheet } from 'react-native';
import { COLORS } from '../theme/theme';
import Header from '../components/Header';
// import SearchBar from '../components/SearchBar';
import Map from '../components/Map';

const DetectionScreen = () => {
  return (
    <View style={styles.container}>

      <Header screen="Detection" icon="settings" />
      {/* <SearchBar placeholder="Search places" /> */}
      <Map fixedHeight="92%" />  
      {/* total height - header's height */}

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.Background,
  },
});

export default DetectionScreen;
