import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ChatHeader from '../components/ChatHeader'
import ChatBody from '../components/ChatBody'
import ChatFooter from '../components/ChatFooter'
import wallpaper from '../assets/wallpaper.jpeg'
const ChatScreen = () => {
    return (
        <>
            <ChatHeader />
            <ImageBackground source={wallpaper}
                style={styles.wallpaper}>
                <ChatBody />
            </ImageBackground>
            <ChatFooter />
        </>
    )
}

export default ChatScreen

const styles = StyleSheet.create({
    wallpaper: {
        flex: 1,
        paddingVertical: 5,
        paddingHorizontal: 12,
    }
})