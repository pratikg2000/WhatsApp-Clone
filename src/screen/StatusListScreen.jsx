import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MyStatus from '../components/MyStatus'
import RecentStatus from '../components/RecentStatus'
import ViewedStatus from '../components/ViewedStatus'
import { Colors } from '../theme/Colors'

const StatusListScreen = () => {
    return (
        <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
            <MyStatus />
            <RecentStatus />
            <ViewedStatus />
        </ScrollView>
    )
}

export default StatusListScreen

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.background,
        padding: 16
    },

})