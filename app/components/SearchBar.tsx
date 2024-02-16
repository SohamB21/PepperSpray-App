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
    paddingHorizontal: 6,
    borderWidth: 1,
    borderRadius: 12,
    borderColor: COLORS.PrimaryText,
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchIcon: {
    marginHorizontal: 2,
    color: COLORS.SpecialForegroundElement,
  },
  textInput: {
    flex: 1,
    color: COLORS.PrimaryText,
    fontFamily: FONTFAMILY.poppins_semibold,
    fontSize: 16,
    alignItems: 'center',
    borderColor: COLORS.PrimaryText,
    height: 50,
  },
});

export default SearchBar;

/*GooglePlacesAutocomplete not working - billing issue

import React from 'react';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

const SearchBar = () => {
  return (
    <GooglePlacesAutocomplete
      placeholder='Search'
      onPress={(data, details = null) => {
        console.log('Autocomplete Pressed:', data, details);
      }}
      onFail={(error) => console.error('Autocomplete Failed:', error)}
      query={{
        key: 'AIzaSyAM5Gl6foyl2CsmQaci6svWWjCNNjdRzQo',
        language: 'en',
        types: ['geocode'],
      }}
      fetchDetails={true}
      styles={{
        container: {
          flex: 0,
        },
        textInputContainer: {
          width: '100%',
          backgroundColor: 'transparent',
          borderTopWidth: 0,
          borderBottomWidth: 0,
        },
        textInput: {
          marginLeft: 0,
          marginRight: 0,
          height: 38,
          color: '#5d5d5d',
          fontSize: 16,
        },
        predefinedPlacesDescription: {
          color: '#1faadb',
        },
      }}
    />
  );
};

export default SearchBar;*/