import React from 'react';
import { Modal, View, Text, TouchableOpacity, StyleSheet, TextInput, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { COLORS, FONTFAMILY } from '../theme/theme';
import UserImage from '../assets/images/user.jpg'

interface EditProfileModalProps {
    visible: boolean;
    onClose: () => void;
    onSave: () => void;
}

const EditProfileModal: React.FC<EditProfileModalProps> = ({ visible, onClose, onSave }) => {
    const titlePlaceholder = "Name";
    const titlePlaceholder2 = "Bio";
    const titlePlaceholder3 = "Location";

    const handleUploadImage = () => {
        console.log("Upload image functionality triggered");
    };

    return (
        <Modal
            visible={visible}
            animationType="fade"
            transparent={true}
            onRequestClose={onClose}>
            <View style={styles.modalContainer}>
                <View style={styles.modalContent}>
                    <TouchableOpacity onPress={handleUploadImage} style={styles.imageContainer}>
                        <Image
                            source={UserImage}
                            style={styles.profileImage}
                            blurRadius={10}
                        />
                        <View style={styles.overlay}>
                            <Icon name="edit" size={20} color={COLORS.PrimaryText} />
                        </View>
                    </TouchableOpacity>
                    <View style={styles.inputContainer}>
                        <View style={styles.textInputContainer}>
                            <TextInput
                                style={styles.titleInput}
                                placeholder={titlePlaceholder}
                                placeholderTextColor={COLORS.SpecialText}
                            />
                        </View>
                        <View style={styles.textInputContainer}>
                            <TextInput
                                style={styles.titleInput}
                                placeholder={titlePlaceholder2}
                                placeholderTextColor={COLORS.SpecialText}
                            />
                        </View>
                        <View style={styles.textInputContainer}>
                            <TextInput
                                style={styles.titleInput}
                                placeholder={titlePlaceholder3}
                                placeholderTextColor={COLORS.SpecialText}
                            />
                        </View>
                    </View>
                    <TouchableOpacity onPress={onSave} style={styles.sendButton}>
                        <Icon name="save" size={30} color={COLORS.PrimaryText} />
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
        position: 'relative',
        backgroundColor: COLORS.SpecialForegroundElement2,
        borderRadius: 10,
        width: '80%',
        overflow: 'hidden',
        paddingTop: 20,
        paddingBottom: 25
    },
    imageContainer: {
        position: 'relative',
        alignItems: 'center',
        marginBottom: 20,
    },
    profileImage: {
        width: 100,
        height: 100,
        borderRadius: 50,
        borderWidth: 2,
        borderColor: COLORS.SpecialForegroundElement,
    },
    overlay: {
        position: 'absolute',
        top: '50%',
        left: 0,
        right: 0,
        alignItems: 'center',
        justifyContent: 'center',
    },
    uploadText: {
        color: COLORS.SecondaryText,
        fontSize: 10,
        fontFamily: FONTFAMILY.poppins_regular,
    },
    inputContainer: {
        paddingHorizontal: 20,
        paddingBottom: 10,
    },
    textInputContainer: {
        marginBottom: 8,
    },
    titleInput: {
        height: 50,
        backgroundColor: COLORS.Background,
        borderWidth: 2,
        borderColor: COLORS.SpecialForegroundElement,
        marginBottom: 10,
        borderRadius: 6,
        paddingBottom: 8,
        paddingLeft: 10,
        color: COLORS.PrimaryText,
        fontFamily: FONTFAMILY.poppins_regular,
    },
    sendButton: {
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: COLORS.SpecialForegroundElement,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        marginBottom: 10
    }
});

export default EditProfileModal;
