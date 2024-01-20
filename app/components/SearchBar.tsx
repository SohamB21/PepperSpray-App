import React, {useState} from 'react';
import {View, TextInput, TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {COLORS, FONTFAMILY} from '../theme/theme';

const SearchBar = ({placeholder}: {placeholder: string}) => {
  const [searchText, setSearchText] = useState<string>('');
  // console.log(searchText);

  return (
    <View style={styles.inputBox}>
      <Icon name="search" size={22} style={styles.searchIcon} />
      <TextInput
        style={styles.textInput}
        onChangeText={textInput => setSearchText(textInput)}
        value={searchText}
        placeholder={placeholder}
        placeholderTextColor={COLORS.SpecialForegroundElement}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputBox: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    borderWidth: 1.2,
    borderColor: COLORS.PrimaryText,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchIcon: {
    marginHorizontal: 2,
    color: COLORS.SpecialForegroundElement,
  },
  textInput: {
    borderColor: COLORS.PrimaryText,
    flex: 1,
    color: COLORS.PrimaryText,
    paddingHorizontal: 6,
    fontFamily: FONTFAMILY.poppins_semibold,
    alignItems: 'center',
  },
});

export default SearchBar;
