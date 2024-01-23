import React from 'react';
import { View, Text, ScrollView, Image, StyleSheet } from 'react-native';
import { COLORS, FONTFAMILY } from '../theme/theme';

interface Achievement {
  title: string;
  icon: any;
}

interface AchievementBadgesProps {
  achievementsData: Achievement[];
}

const AchievementBadges: React.FC<AchievementBadgesProps> = ({ achievementsData }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>My Achievements</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.scrollViewContent}>
        {achievementsData.map((achievement, index) => (
          <BadgeCard key={index} title={achievement.title} icon={achievement.icon} />
        ))}
      </ScrollView>
    </View>
  );
};

const BadgeCard: React.FC<{ title: string; icon: any }> = ({ title, icon }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.cardTitle}>{title}</Text>
      <Image source={icon} style={styles.cardIcon} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    marginTop: 6,
  },
  heading: {
    fontSize: 16,
    color: COLORS.PrimaryText,
    fontFamily: FONTFAMILY.poppins_semibold,
  },
  scrollViewContent: {
    flexDirection: 'row',
    marginLeft: 1,
    marginVertical: 8,
  },
  card: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: COLORS.SpecialForegroundElement2,
    borderRadius: 8,
    padding: 16,
    minWidth: 150,
    marginRight: 10,
    width: '100%',
  },
  cardTitle: {
    fontSize: 14,
    color: COLORS.PrimaryText,
    fontFamily: FONTFAMILY.poppins_semibold,
  },
  cardIcon: {
    width: '100%',
    height: 96, 
    resizeMode: 'contain',
  },
  
});

export default AchievementBadges;
