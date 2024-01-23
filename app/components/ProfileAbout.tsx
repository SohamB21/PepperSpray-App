import React  from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { COLORS, FONTFAMILY } from '../theme/theme';

interface UserProfile {
    userName: string; 
    userId: string;
    userBio: string;
    location: string;
    joinedMonth: string;
    joinedYear: string;
    verified: boolean;
    profilePicture: string;
}

interface ProfileAboutProps {
    user: UserProfile;
}

const ProfileAbout: React.FC<ProfileAboutProps> = ({ user }) => {

    return (
        <View style={styles.container}>
            <View style={styles.profilePictureContainer}>
                <Image
                    source={{ uri: user.profilePicture }}
                    style={styles.profilePicture}
                />
                <View style={styles.editButtonContainer}>
                    <TouchableOpacity style={styles.editButton}>
                        <Icon name="edit" size={20} color={COLORS.SpecialText} />
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.userInfoContainer}>
                <Text style={styles.userName}>{user.userName}</Text>
                <Text style={[styles.userId, { color: COLORS.SpecialForegroundElement }]}>@{user.userId}</Text>
                <Text style={styles.userBio}>{user.userBio}</Text>
            </View>

            <View style={styles.detailsContainer}>
                <View style={styles.detailItem}>
                    <Icon name="map-pin" size={16} color={COLORS.SpecialForegroundElement} />
                    <Text style={[styles.detailText,{ color: COLORS.SpecialForegroundElement }]}>{user.location}.</Text>
                </View>
                <View style={styles.detailItem}>
                    <Icon name="calendar" size={16} color={COLORS.SpecialForegroundElement} />
                    <Text style={[styles.detailText,{ color: COLORS.SpecialForegroundElement }]}>
                        Joined {user.joinedMonth}, {user.joinedYear}.
                    </Text>
                </View>
                {user.verified ? (
                    <View style={styles.detailItem}>
                        <Icon name="check-circle" size={16} color={COLORS.SpecialForegroundElement} />
                        <Text style={[styles.detailText,{ color: COLORS.SpecialForegroundElement }]}>Verified phone number.</Text>
                    </View>
                ) : (
                    <View style={styles.detailItem}>
                        <Icon name="alert-triangle" size={16} color={COLORS.PrimaryText} />
                        <Text style={styles.detailText}>Verify phone number.</Text>
                    </View>
                )}
            </View>

            <View style={styles.separator} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    profilePictureContainer: {
        position: 'relative',
        marginBottom: 4,
    },
    profilePicture: {
        width: 120,
        height: 120,
        borderRadius: 60,
        borderColor: COLORS.SpecialForegroundElement,
        borderWidth: 2.6,
    },
    editButtonContainer: {
        position: 'absolute',
        bottom: 0,
        right: 0,
    },
    editButton: {
        backgroundColor: COLORS.SpecialForegroundElement,
        padding: 8,
        borderRadius: 20,
    },
    userInfoContainer: {
        marginVertical: 6,
        alignItems: 'center',
        justifyContent: 'center',
        display: 'flex',
        flexDirection: 'column',
    },
    userName: {
        fontSize: 20,
        color: COLORS.SpecialText,
        fontFamily: FONTFAMILY.poppins_medium,
    },
    userId: {
        fontSize: 14,
        color: COLORS.PrimaryText,
        fontFamily: FONTFAMILY.poppins_semibold,
        marginBottom: 6,
    },
    userBio: {
        fontSize: 16,
        color: COLORS.SpecialText,
        fontFamily: FONTFAMILY.poppins_medium,
        textAlign:'center',
    },
    detailsContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 8,
    },
    detailItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 8,
    },
    detailText: {
        marginLeft: 4,
        fontWeight: '600',
        color: COLORS.PrimaryText,
        fontFamily: FONTFAMILY.poppins_semibold,
    },
    separator: {
        borderBottomColor: COLORS.SpecialForegroundElement,
        borderBottomWidth: 1,
        width: '100%',
        marginVertical: 8,
    },
});

export default ProfileAbout ;    
export type { UserProfile };

