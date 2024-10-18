import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Header from '../components/Header';
import TopTabbar from '../navigation/TopTabbar';

const HomeScreen = () => {
    return (
        <View style={styles.container}>
            <Header />
            <TopTabbar />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default HomeScreen;
