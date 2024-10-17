import { Animated, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useRef } from 'react'
import { Colors } from '../theme/Colors'
import VectorIcon from '../utils/VectorIcon'
import { MessagesData } from '../data/MessageData'

const ChatBody = () => {

    const ScrollViewRef = useRef()
    const userId = '1jdfnvchjkd'
    const UserMessageView = ({ message, time }) => {
        return (
            <View style={styles.userContainer}>
                <View style={styles.userInnerContainer}>
                    <Text style={styles.message}>{message}</Text>
                    <Text style={styles.time}>{time}</Text>
                    <VectorIcon
                        name="check-double"
                        type="FontAwesome5"
                        size={12}
                        color={Colors.blue}
                        style={styles.doubleCheck}
                    />
                </View>
            </View>
        )

    }

    const OtherUserMessageView = ({ message, time }) => {
        return (
            <View style={styles.otheruserContainer}>
                <View style={styles.otheruserInnerContainer}>
                    <Text style={styles.message}>{message}</Text>
                    <Text style={styles.time}>
                        {time}
                    </Text>
                </View>
            </View>

        )
    }

    const scrollToBottom = () => {
        ScrollViewRef.current.scrollToEnd({ Animated: true })
    }
    return (
        <>

            <ScrollView
                ref={ScrollViewRef}
                onContentSizeChange={scrollToBottom}
                showsVerticalScrollIndicator={false}>
                {
                    MessagesData.map(item => (
                        <>
                            {item.id === userId ?
                                <UserMessageView message={item.message} time={item.time} /> :
                                <OtherUserMessageView message={item.message} time={item.time} />}
                        </>
                    ))
                }
            </ScrollView>
            <View style={styles.scrollDownIcon}>
                <View style={styles.scrollDownArrow}>

                    <VectorIcon
                        type="Fontisto"
                        name="angle-dobule-down"
                        size={12}
                        color={Colors.white}
                        onPress={scrollToBottom}
                    />
                </View>
            </View>
        </>
    )
}

export default ChatBody

const styles = StyleSheet.create({
    userContainer: {
        justifyContent: 'flex-end',
        flexDirection: 'row',
        marginVertical: 5,

    },
    otheruserContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 5,
    },
    userInnerContainer: {
        backgroundColor: Colors.teal,
        paddingVertical: 8,
        paddingHorizontal: 15,
        borderTopLeftRadius: 30,
        borderBottomRightRadius: 30,
        borderBottomLeftRadius: 30,
        flexDirection: 'row',
        alignItems: 'flex-end'
    },
    message: {
        fontSize: 13,
        color: Colors.white,
    },
    time: {
        fontSize: 9,
        color: Colors.white,
        marginLeft: 5,
    },
    doubleCheck: {
        marginLeft: 5
    },
    otheruserInnerContainer: {
        backgroundColor: Colors.primaryColor,
        paddingVertical: 8,
        paddingHorizontal: 15,
        borderTopRightRadius: 30,
        borderBottomRightRadius: 30,
        borderBottomLeftRadius: 30,
        flexDirection: 'row',
        alignItems: 'flex-end'
    },
    scrollDownArrow: {
        backgroundColor: Colors.primaryColor,
        borderRadius: 50,
        height: 30,
        width: 30,
        alignItems: 'center',
        justifyContent: 'center'
    },
    scrollDownIcon: {
        justifyContent: 'flex-end',
        flexDirection: 'row',

    }
})