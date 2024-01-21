import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { COLORS, FONTFAMILY } from '../theme/theme';

const Post = ({ post }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.userInfo}>
          <Image
            source={{ uri: post.profilePicture }}
            style={styles.profilePicture}
          />
          <Text style={styles.user}>
            {post.user}{' '}<Text style={styles.username}>@{post.username}</Text> posted
          </Text>
        </View>
        <View style={styles.postTime}>
          <Feather name="clock" size={15} style={styles.clockIcon} />
          <Text style={styles.clockText}>{post.time}</Text>
        </View>
      </View>

      <Text style={styles.title}>{post.title}</Text>

      <View style={styles.actions}>
        <View style={styles.actionItem}>
          <TouchableOpacity style={styles.iconContainer} onPress={() => {}}>
            <MaterialCommunityIcons name="arrow-up-bold-outline" size={25} style={styles.iconStyle} />
            <Text style={styles.iconText}>{post.upvotes}</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.actionItem}>
          <TouchableOpacity style={styles.iconContainer} onPress={() => {}}>
            <MaterialCommunityIcons name="arrow-down-bold-outline" size={25} style={styles.iconStyle} />
            <Text style={styles.iconText}>{post.downvotes}</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.actionItem}>
          <TouchableOpacity style={styles.iconContainer} onPress={() => {}}>
            <Feather name="message-circle" size={25} style={styles.iconStyle} />
            <Text style={styles.iconText}>{post.comments}</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.actionItem}>
          <TouchableOpacity style={styles.iconContainer} onPress={() => {}}>
            <Feather name="share-2" size={25} style={styles.iconStyle} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'stretch',
    backgroundColor: COLORS.SpecialForegroundElement2,
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginBottom: 10,
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    maxWidth: '70%',
  },
  profilePicture: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 6,
  },
  user: {
    color: COLORS.PrimaryText,
    fontFamily: FONTFAMILY.poppins_regular,
    fontSize: 14,
    flexWrap: 'wrap',
  },
  username: {
    color: COLORS.SpecialForegroundElement,
    fontFamily: FONTFAMILY.poppins_regular,
    fontSize: 14,
  },
  postTime: {
    flexDirection: 'row',
    alignItems: 'baseline',
    justifyContent: 'flex-end', 
  },
  clockIcon: {
    color: COLORS.PrimaryText,
    marginRight: 1,
  },
  clockText: {
    color: COLORS.PrimaryText,
    fontFamily: FONTFAMILY.poppins_regular,
    fontSize: 14,
  },
  title: {
    color: COLORS.PrimaryText,
    fontFamily: FONTFAMILY.poppins_regular,
    fontSize: 16,
    marginBottom: 4,
  },
  actions: {
    flexDirection: 'row-reverse',
    justifyContent: 'end',
  },
  actionItem: {
    marginLeft: 10,
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: COLORS.Background,
    borderRadius: 50,
    borderWidth: 1.5,
    padding: 5,
  },
  iconStyle: {
    color: COLORS.PrimaryText,
    marginRight: 2,
  },
  iconText: {
    color: COLORS.PrimaryText,
    fontFamily: FONTFAMILY.poppins_regular,
    fontSize: 14,
  }
});

export default Post;
