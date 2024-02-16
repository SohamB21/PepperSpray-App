import React, { useContext, useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, useWindowDimensions } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import SettingsPopup from './SettingsPopup'; 
import { COLORS } from '../theme/theme';
import {AuthContext} from '../navigators/AuthProvider';

interface HeaderProps {
  screen: string;
  icon: string;
}

const Header: React.FC<HeaderProps> = (props) => {
  const dimensions = useWindowDimensions();
  const isPortrait = dimensions.height > dimensions.width;
  const headerHeight = isPortrait ? '8%' : '14%';
  const {logout} = useContext(AuthContext);

  const [isSettingsPopupVisible, setSettingsPopupVisible] = useState(false);

  const showSettingsPopup = () => {
    setSettingsPopupVisible(true);
  };

  const closeSettingsPopup = () => {
    setSettingsPopupVisible(false);
  };

  const handleLogout = () => {
    console.log("Logout button pressed.");
    logout();
  };

  return (
    <View style={[styles.container, { height: headerHeight }]}>
      <Text style={styles.headerText}>{props.screen}</Text>
      <TouchableOpacity style={styles.iconBG} onPress={showSettingsPopup}>
        <Icon name={props.icon} size={24} style={styles.iconStyle} />
      </TouchableOpacity>
      <SettingsPopup isVisible={isSettingsPopupVisible} onClose={closeSettingsPopup} />
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
