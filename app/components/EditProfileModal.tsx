import React from 'react';
import { Modal, View, Text, TouchableOpacity, StyleSheet, TextInput, Image, Linking } from 'react-native';
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

    const openFileManager = async () => {
        try {
            await Linking.openURL('https://drive.google.com/drive/u/0/my-drive');
        } catch (error) {
            console.error("An error occurred while opening the file manager:", error);
        }
    };

    return (
        <Modal
            visible={visible}
            animationType="fade"
            transparent={true}
            onRequestClose={onClose}>
            <View style={styles.modalContainer}>
                <View style={styles.modalContent}>
                    <TouchableOpacity style={styles.imageContainer}>
                        <Image
                            source={UserImage}
                            style={styles.profileImage}
                            blurRadius={10}
                        />
                        <View style={styles.overlay}>
                            <View style={styles.editButtonContainer}>
                                <TouchableOpacity style={styles.editButton} onPress={openFileManager} >
                                    <Icon name="edit" size={20} color={COLORS.SpecialText} />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <View style={styles.inputContainer}>
                        <Text style={styles.inputLabel}>{titlePlaceholder}</Text>
                        <TextInput
                            style={styles.titleInput}
                            placeholderTextColor={COLORS.SpecialText}
                        />
                        <View style={styles.underline}></View>
                    </View>
                    <View style={styles.inputContainer}>
                        <Text style={styles.inputLabel}>{titlePlaceholder2}</Text>
                        <TextInput
                            style={styles.titleInput}
                            placeholderTextColor={COLORS.SpecialText}
                        />
                        <View style={styles.underline}></View>
                    </View>
                    <View style={styles.inputContainer}>
                        <Text style={styles.inputLabel}>{titlePlaceholder3}</Text>
                        <TextInput
                            style={styles.titleInput}
                            placeholderTextColor={COLORS.SpecialText}
                        />
                        <View style={styles.underline}></View>
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
        paddingBottom: 20
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
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputContainer: {
        paddingHorizontal: 16,
        backgroundColor: COLORS.Background,
        borderRadius: 10,
        marginBottom: 10,
        marginHorizontal: 20,
        paddingTop: 6,
    },
    inputLabel: {
        color: COLORS.SpecialText,
        fontFamily: FONTFAMILY.poppins_regular,
    },
    titleInput: {
        height: 32,
        paddingHorizontal: 8,
        paddingVertical: 6,
        fontSize: 14,
        backgroundColor: COLORS.Background,
        borderWidth: 0,
        color: COLORS.PrimaryText,
        fontFamily: FONTFAMILY.poppins_regular,
    },
    underline: {
        borderBottomWidth: 2,
        borderBottomColor: COLORS.SpecialForegroundElement,
        marginBottom: 10
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
    },
    editButtonContainer: {
        position: 'absolute',
        top: '45%',
        left: '50%',
        transform: [{ translateX: -17 }, { translateY: -10 }],
    },
    editButton: {
        backgroundColor: COLORS.SpecialForegroundElement,
        padding: 8,
        borderRadius: 20,
    },
});


export default EditProfileModal;
