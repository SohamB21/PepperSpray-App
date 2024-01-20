import React from 'react';
import {View, StyleSheet, Text, useWindowDimensions} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import DetectionScreen from '../screens/DetectionScreen';
import NewPostScreen from '../screens/NewPostScreen';
import CommunityScreen from '../screens/CommunityScreen';
import ProfileScreen from '../screens/ProfileScreen';
import Icon from 'react-native-vector-icons/Feather';
import {COLORS} from '../theme/theme';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  const dimensions = useWindowDimensions();
  const isPortrait = dimensions.height > dimensions.width;
  const tabBarHeight = isPortrait ? '7%' : '14%';

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarHideOnKeyboard: true,
        headerShown: false,
        tabBarStyle: {
          backgroundColor: COLORS.SpecialForegroundElement,
          borderTopWidth: 0,
          height: tabBarHeight,
          flexDirection: 'row',
          justifyContent: 'space-between',
        },
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({focused}) => {
            return (
              <View style={styles.tabItem}>
                <Icon
                  name="home"
                  size={24}
                  style={[focused ? styles.iconFocused : styles.iconStyle]}
                />
                <Text style={[focused ? styles.textFocused : styles.textStyle]}>
                  Home
                </Text>
              </View>
            );
          },
        }}
      />

      <Tab.Screen
        name="Detection"
        component={DetectionScreen}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({focused}) => {
            return (
              <View style={styles.tabItem}>
                <Icon
                  name="compass"
                  size={24}
                  style={[focused ? styles.iconFocused : styles.iconStyle]}
                />
                <Text style={[focused ? styles.textFocused : styles.textStyle]}>
                  Detection
                </Text>
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="NewPost"
        component={NewPostScreen}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({focused}) => {
            return (
              <View style={styles.tabItem}>
                <Icon
                  name="plus-square"
                  size={24}
                  style={[focused ? styles.iconFocused : styles.iconStyle]}
                />
                <Text style={[focused ? styles.textFocused : styles.textStyle]}>
                  New
                </Text>
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="Community"
        component={CommunityScreen}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({focused}) => {
            return (
              <View style={styles.tabItem}>
                <Icon
                  name="mail"
                  size={24}
                  style={[focused ? styles.iconFocused : styles.iconStyle]}
                />
                <Text style={[focused ? styles.textFocused : styles.textStyle]}>
                  Community
                </Text>
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({focused}) => {
            return (
              <View style={styles.tabItem}>
                <Icon
                  name="user"
                  size={24}
                  style={[focused ? styles.iconFocused : styles.iconStyle]}
                />
                <Text style={[focused ? styles.textFocused : styles.textStyle]}>
                  Profile
                </Text>
              </View>
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: 80,
  },
  iconStyle: {
    color: COLORS.PrimaryText,
    opacity: 0.6,
  },
  iconFocused: {
    fontWeight: 'bold',
    color: COLORS.PrimaryText,
  },
  textStyle: {
    color: COLORS.PrimaryText,
    opacity: 0.6,
  },
  textFocused: {
    fontWeight: 'bold',
    color: COLORS.PrimaryText,
  },
});

export default TabNavigator;
