import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import profile from '../assets/user1.jpeg';
import VectorIcon from '../utils/VectorIcon';
import { Colors } from '../theme/Colors';
import { useNavigation } from '@react-navigation/native';
const ChatHeader = () => {
    const navigation = useNavigation()

    return (
        <View style={styles.container}>
            <View style={styles.innerContainer}>
                <VectorIcon
                    name="arrow-back"
                    color={Colors.white}
                    size={24} type="Ionicons"
                    onPress={() => navigation.goBack()} />
                <Image source={profile} style={styles.profilePhoto} />
                <Text style={styles.username}>Kaju</Text>

            </View>
            <View style={styles.innerContainer}>
                <VectorIcon
                    name="videocam"
                    type="Ionicons"
                    size={24}
                    color={Colors.white}
                />
                <VectorIcon
                    name="phone-alt"
                    type="FontAwesome5"
                    size={16}
                    color={Colors.white}
                    style={styles.iconStyle}
                />
                <VectorIcon
                    name="dots-three-vertical"
                    type="Entypo"
                    size={18}
                    color={Colors.white}
                />
            </View>
        </View>
    )
}

export default ChatHeader

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.primaryColor,
        padding: 12,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    profilePhoto: {
        height: 40,
        width: 40,
        borderRadius: 50,
    },
    username: {
        fontSize: 17,
        color: Colors.white,
        marginLeft: 10,
    },
    innerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    iconStyle: {
        marginHorizontal: 25,
    },
})