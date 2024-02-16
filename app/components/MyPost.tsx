import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Post from './Post';
import { COLORS, FONTFAMILY } from '../theme/theme';

interface MyPostProps {
  posts: {
    id: number;
    profilePicture: string;
    user: string;
    username: string;
    comments: number;
    downvotes: string;
    upvotes: number;
    time: string;
    title: string;
  }[];
}

const MyPost: React.FC<MyPostProps> = ({ posts }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Posts</Text>

      <View style={styles.postContainer}>
        {posts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </View>
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
  title: {
    fontSize: 16,
    color: COLORS.PrimaryText,
    fontFamily: FONTFAMILY.poppins_semibold,
    marginBottom: 6,
  },
  postContainer: {
    marginBottom: 10,
  },
});

export default MyPost;
