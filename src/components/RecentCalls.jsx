import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Colors } from '../theme/Colors'
import User1 from '../assets/user1.jpeg'
import VectorIcon from '../utils/VectorIcon'
const RecentCalls = () => {
    return (
        <>
            <Text style={styles.recent}>Recent</Text>
            <View style={styles.container}>
                <View style={styles.row}>

                    <Image source={User1} style={styles.imgStyle} />

                    <View style={styles.linkSection}>
                        <Text style={styles.callLink}>Shivam Joshi</Text>
                        <Text style={styles.shareLink}>June 15, 6:32</Text>
                    </View>
                </View>
                <VectorIcon
                    name="videocam"
                    type="Ionicons"
                    size={24}
                    color={Colors.tertiary}
                />
            </View>
        </>
    )
}

export default RecentCalls
// hhhhhhh

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    recent: {
        fontSize: 14,
        color: Colors.textGrey,
        marginTop: 20,
        paddingBottom: 10
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    imgStyle: {
        height: 45,
        width: 45,
        borderRadius: 50,
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