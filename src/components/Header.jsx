import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import WhatasppLogo from '../assets/whatsapp-logo.png'
import { Colors } from '../theme/Colors'
import VectorIcon from '../utils/VectorIcon'
const Header = () => {
    return (
        <View style={styles.container}>
            <Image source={WhatasppLogo} style={styles.logoStyle} />
            <View style={styles.headerIcons}>
                <VectorIcon type="Feather" name="camera" color={Colors.secondaryColor} size={22} />
                <VectorIcon type="Ionicons" name="search" color={Colors.secondaryColor} size={20} style={styles.iconStyle} />
                <VectorIcon type="Entypo" name="dots-three-vertical" color={Colors.secondaryColor} size={18} />

            </View>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    logoStyle: {
        height: 25, width: 110,
    },
    container: {
        backgroundColor: Colors.primaryColor,
        padding: 16,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    headerIcons: {
        flexDirection: "row",
    },
    iconStyle: {
        marginHorizontal: 25,
    }
})