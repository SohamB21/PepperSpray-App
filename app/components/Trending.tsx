import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Post from './Post';
import { COLORS, FONTFAMILY } from '../theme/theme';

const Trending = ({ posts }) => {
  const [showAllPosts, setShowAllPosts] = useState(false);
  const displayedPosts = showAllPosts ? posts : [posts[0]];
  const handleSeeAllClick = () => {
    setShowAllPosts(!showAllPosts);
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerRow}>
        <Text style={styles.headerText}>Trending Community Posts</Text>
        <View>
          <TouchableOpacity
            style={styles.seeAllButton}
            onPress={handleSeeAllClick}
          >
            <Text style={styles.seeAllButtonText}>
              {showAllPosts ? 'See Less' : 'See All'}
            </Text>
          </TouchableOpacity>
        </View>
      </View> 

      {displayedPosts.map((post) => (
        <View key={post.id}>
          <Post post={post} />
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'stretch',
    marginVertical: 12,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginBottom: 6,
  },
  headerText: {
    color: COLORS.PrimaryText,
    fontFamily: FONTFAMILY.poppins_semibold, 
    fontSize: 16,
  },
  seeAllButton: {
    color: COLORS.Background,
    borderRadius: 5,
    padding: 5,
  },
  seeAllButtonText: {
    color: COLORS.SpecialText,
    fontFamily: FONTFAMILY.poppins_semibold, 
    fontSize: 14,
  },
});

export default Trending;
