import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import community from '../assets/community-img.png'
import { Colors } from '../theme/Colors'


const CommunityScreen = () => {
    return (
        <View style={styles.container}>
            <Image source={community} style={styles.communityImg} />
            <Text style={styles.community} >Introducing Communities</Text>
            <Text style={styles.subText}>Easily organize your related Groups and send announcement. Now, your communities, like neighbourhood or schools, can have thier own space </Text>
            <TouchableOpacity style={styles.buttonStyle}>
                <Text style={styles.buttonTitle}>Start Your Community </Text>
            </TouchableOpacity>
        </View>
    )
}

export default CommunityScreen

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.background,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },

    communityImg: {
        height: 150,
        width: 250,
    },
    community: {
        fontSize: 26,
        color: Colors.white,
        fontWeight: '500',
        marginTop: 40
    },
    subText: {
        color: Colors.textGrey,
        fontSize: 16,
        textAlign: 'center',
        paddingHorizontal: 30,
        marginTop: 5,
        lineHeight: 22,
        letterSpacing: 0.6,
    },
    buttonStyle: {
        backgroundColor: Colors.tertiary,
        marginTop: 30,
        padding: 8,
        borderRadius: 30, width: '80%'
    },
    buttonTitle: {
        textAlign: 'center',
        fontSize: 14,
        color: Colors.background
    }
})