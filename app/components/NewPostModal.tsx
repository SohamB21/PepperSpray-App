import React, { useEffect } from 'react';
import { View, Text, Modal, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { COLORS, FONTFAMILY } from '../theme/theme';

interface NewPostModalProps {
    showNewPostModal: boolean;
    setShowNewPostModal: React.Dispatch<React.SetStateAction<boolean>>;
  }
  
  const NewPostModal: React.FC<NewPostModalProps> = ({ showNewPostModal, setShowNewPostModal }) => {
  const handleSubmit = () => {
    setShowNewPostModal(false);
  };

  useEffect(() => {
  }, [showNewPostModal]);

  return (
    <Modal
      visible={showNewPostModal}
      animationType="slide"
      transparent={true}
      onRequestClose={() => setShowNewPostModal(false)}>
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <View style={styles.titleContainer}>
            <Image
              source={{ uri: 'https://i.pinimg.com/originals/24/ca/51/24ca51edd82d5828340f6a87edbbb529.jpg' }}
              style={styles.profileImage}
            />
            <TextInput
              style={styles.titleInput}
              placeholder="Enter title of your post"
              placeholderTextColor={COLORS.SpecialForegroundElement}
            />
          </View>
          <TextInput
            style={styles.contentInput}
            multiline
            placeholder="Enter content of your post"
            placeholderTextColor={COLORS.SpecialForegroundElement}
          />
          <View style={styles.actionButtons}>
            <TouchableOpacity style={styles.actionButton}>
              <Icon name="user" size={20} style={styles.actionIcon} color={COLORS.PrimaryText}/>
              <Text style={styles.textStyle}>Gallery</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.actionButton}>
              <Icon name="list" size={20} style={styles.actionIcon} color={COLORS.PrimaryText}/>
              <Text style={styles.textStyle}>Poll</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.actionButton}>
              <Icon name="map-pin" size={20} style={styles.actionIcon} color={COLORS.PrimaryText}/>
              <Text style={styles.textStyle}>Location</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            style={styles.sendButton}
            onPress={handleSubmit}>
            <Icon name="send" size={30} color={COLORS.PrimaryText} />
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: COLORS.SpecialForegroundElement2,
    padding: 20,
    borderRadius: 10,
    width: '80%',
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginBottom: 5
  },
  titleInput: {
    flex: 1,
    height: 40,
    marginLeft: 10,
    backgroundColor: COLORS.Background,
    borderWidth: 1,
    borderColor: COLORS.SpecialForegroundElement,
    marginBottom: 10,
    borderRadius: 6,
  },
  contentInput: {
    height: 100,
    borderWidth: 1,
    marginBottom: 10,
    borderRadius: 6,
    backgroundColor: COLORS.Background,
    borderColor: COLORS.SpecialForegroundElement,
  },
  actionButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  actionIcon: {
    marginRight: 5
  },
  sendButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: COLORS.SpecialForegroundElement,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  } ,
  textStyle:{
    fontFamily: FONTFAMILY.poppins_regular,
    color: COLORS.SpecialText
  }
});

export default NewPostModal;
