import React, { useState } from 'react';
import { View, Text, Modal, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { COLORS, FONTFAMILY } from '../theme/theme';

interface SettingsPopupProps {
  isVisible: boolean;
  onClose: () => void;
}

const SettingsPopup: React.FC<SettingsPopupProps> = ({ isVisible, onClose }) => {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [dropdownVisible2, setDropdownVisible2] = useState(false);
  const [modalContentTop, setModalContentTop] = useState(140);
  const [darkMode, setDarkMode] = useState(false); 

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
    setModalContentTop(top => (top === 160 ? 150 : 140));
  };

  const toggleDropdown2 = () => {
    setDropdownVisible2(!dropdownVisible2);
    setModalContentTop(top => (top === 140 ? 150 : 140));
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <Modal animationType="fade" transparent={true} visible={isVisible} onRequestClose={() => onClose()}>
      <View style={styles.modalContainer}>
        <View style={styles.overlay} />
        <View style={[styles.modalContent, { top: modalContentTop }]}>
          <TouchableOpacity style={styles.modalItem} onPress={toggleDropdown}>
            <View style={styles.modalItemContent}>
              <Icon name="smartphone" size={26} color={COLORS.SpecialForegroundElement} />
              <View style={styles.textContainer}>
                <Text style={styles.title}>Appearance</Text>
                <Text style={styles.description}>Modify the app's look.</Text>
              </View>
              <Icon name={dropdownVisible ? 'chevron-up' : 'chevron-down'} size={24} color={COLORS.SpecialForegroundElement} />
            </View>
          </TouchableOpacity>
          {dropdownVisible && (
            <View style={styles.dropdownContent}>
              <View style={styles.modalItem}>
                <Text style={styles.dropdowntitle}>Dark Mode</Text>
                <TouchableOpacity onPress={toggleDarkMode}>
                  <Icon name={darkMode ? 'toggle-right' : 'toggle-left'} color={COLORS.SpecialForegroundElement} size={24}></Icon>
                </TouchableOpacity>
              </View>
            </View>
          )}

          <TouchableOpacity style={styles.modalItem} onPress={toggleDropdown2}>
            <View style={styles.modalItemContent}>
              <Icon name="lock" size={26} color={COLORS.SpecialForegroundElement} />
              <View style={styles.textContainer}>
                <Text style={styles.title}>Privacy</Text>
                <Text style={styles.description}>Secure your account.</Text>
              </View>
              <Icon name={dropdownVisible2 ? 'chevron-up' : 'chevron-down'} size={24} color={COLORS.SpecialForegroundElement} />
            </View>
          </TouchableOpacity>
          {dropdownVisible2 && (
            <View style={styles.dropdownContent}>
              <View style={styles.modalItem}>
                <Text style={styles.dropdowntitle}>Blocking</Text>
                <Icon name='alert-circle' color={COLORS.SpecialForegroundElement} size={24}></Icon>
              </View>
              <View style={styles.modalItem}>
                <Text style={styles.dropdowntitle}>Private Account</Text>
                <Icon name='user' color={COLORS.SpecialForegroundElement} size={24}></Icon>
              </View>
            </View>
          )}

          <TouchableOpacity>
            <View style={styles.modalItem}>
              <Icon name="user" size={26} color={COLORS.SpecialForegroundElement} />
              <View style={styles.textContainer}>
                <Text style={styles.title}>Logout</Text>
                <Text style={styles.description}>Exit from PepperSpray.</Text>
              </View>
              <Icon name="chevron-right" size={24} color={COLORS.SpecialForegroundElement} />
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
          <View style={styles.modalItem}>
            <Icon name="help-circle" size={26} color={COLORS.SpecialForegroundElement} />
            <View style={styles.textContainer}>
              <Text style={styles.title}>Help</Text>
              <Text style={styles.description}>More about PepperSpray.</Text>
            </View>
            <Icon name="chevron-right" size={24} color={COLORS.SpecialForegroundElement} />
          </View>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  overlay: {
    flex: 1,
    width: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: '90%',
    borderRadius: 12,
    padding: 20,
    paddingHorizontal: 20,
    paddingBottom: 22,
    paddingTop: 18,
    position: 'absolute',
    backgroundColor: COLORS.SecondaryText
  },
  modalItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 7,
    paddingHorizontal: 2,
  },
  modalItemContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textContainer: {
    flex: 1,
    marginLeft: 12,
  },
  title: {
    fontFamily: FONTFAMILY.poppins_medium, 
    fontSize: 18,
    color: COLORS.SpecialText,
  },
  description: {
    fontFamily: FONTFAMILY.poppins_regular,
    fontSize: 15,
    color: COLORS.PrimaryText,
  },
  dropdownContent: {
    marginLeft: 40,
    marginTop: 10,
  },
  dropdowntitle: {
    fontSize: 16,
    fontFamily: FONTFAMILY.poppins_medium,
    color: COLORS.PrimaryText,
    marginBottom: 5,
  }
});

export default SettingsPopup;
