import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import VectorIcon from '../utils/VectorIcon'
import { Colors } from '../theme/Colors'

const CallLink = () => {
    return (
        <View style={styles.container}>
            <View style={styles.iconBg}>
                <VectorIcon
                    name="link"
                    type="Fontisto"
                    size={20}
                    color={Colors.white}
                />
            </View>
            <View style={styles.linkSection}>
                <Text style={styles.callLink}>Create call Link</Text>
                <Text style={styles.shareLink}>share a link for you Whatsapp call</Text>
            </View>
        </View>
    )
}

export default CallLink

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
    },

    iconBg: {
        backgroundColor: Colors.tertiary,
        height: 45,
        width: 45,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },
    callLink: {
        fontSize: 15,
        color: Colors.white,
        fontWeight: '500'
    },
    shareLink: {
        fontSize: 13,
        color: Colors.textGrey,
        marginTop: 3,
    },
    linkSection: {
        marginLeft: 15,
    }
})