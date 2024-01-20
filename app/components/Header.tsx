import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  useWindowDimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {COLORS} from '../theme/theme';

const Header = (props: any) => {
  const dimensions = useWindowDimensions();
  const isPortrait = dimensions.height > dimensions.width;
  const headerHeight = isPortrait ? '8%' : '14%';

  return (
    <View style={[styles.container, {height: headerHeight}]}>
      <Text style={styles.headerText}>{props.screen}</Text>
      <TouchableOpacity style={styles.iconBG} onPress={() => {}}>
        <Icon name={props.icon} size={24} style={styles.iconStyle} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: COLORS.SpecialForegroundElement,
    paddingHorizontal: '5%',
  },
  iconStyle: {
    color: COLORS.PrimaryText,
  },
  iconBG: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    color: COLORS.SpecialText,
    fontWeight: 'bold',
    fontSize: 20,
  },
});

export default Header;
