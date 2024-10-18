import { Image, Modal, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Status1 from '../assets/status1.jpeg'
import User1 from '../assets/user1.jpeg'
import { Colors } from '../theme/Colors';
import VectorIcon from './VectorIcon';
import { useNavigation } from '@react-navigation/native';
import ProgressBar from './ProgressBar';

const FullModal = (props) => {
    const navigation = useNavigation()

    const { showStatusModal, setShowStatusModal, item, setTimeUp } = props;
    console.log("showStatusModal", showStatusModal)
    const updateModalStatus = () => {
        setShowStatusModal(prev => ({ ...prev, [item.id]: false }))
    }
    return (
        <Modal
            animationType='fade'
            visible={showStatusModal}
            onRequestClose={updateModalStatus}
        >
            <View style={styles.container}>
                <ProgressBar setTimeUp={setTimeUp} />
                <View style={styles.topContainer}>
                    <View style={styles.profileSection}>
                        <VectorIcon
                            name="arrow-back"
                            color={Colors.white}
                            size={24} type="Ionicons"
                            onPress={() => setShowStatusModal(prev => ({ ...prev, [item.id]: false }))} />
                        <Image source={User1} style={styles.profileImg} />
                        <Text style={styles.username}>Sameer Kashyap</Text>
                    </View>
                    <VectorIcon type="Entypo" name="dots-three-vertical" color={Colors.white} size={18} />
                </View>
                <Image source={Status1} style={styles.storyImg} />
                <Text style={styles.storyMessage}>My Latest Art</Text>
                <View style={styles.replySection}>
                    <VectorIcon
                        name="chevron-small-up"
                        color={Colors.white}
                        size={24} type="Entypo"
                        onPress={() => setShowStatusModal(prev => ({ ...prev, [item.id]: false }))} />


                    <Text style={styles.reply}>Reply</Text>
                </View>
            </View>
        </Modal>
    )
}

export default FullModal

const styles = StyleSheet.create({
    storyImg: {
        height: "75%",
        width: '100%'
    },
    storyMessage: {
        fontSize: 17,
        color: Colors.white,
        textAlign: 'center',
    },
    container: {
        backgroundColor: Colors.primaryColor,
        height: '100%',
        justifyContent: 'space-between'
    },
    profileImg: {
        height: 40,
        width: 40,
        borderRadius: 40
    },
    username: {
        fontSize: 17,
        color: Colors.white,
        marginLeft: 10,
    },
    topContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 12,
        paddingHorizontal: 10,
        justifyContent: 'space-between'
    },
    profileSection: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    reply: {
        fontSize: 15,
        color: Colors.white,
        textAlign: 'center',
        marginBottom: 10
    },
    replySection: {
        alignItems: 'center'
    }
})