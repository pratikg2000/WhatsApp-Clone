import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import User1 from '../assets/user1.jpeg'
import { Colors } from '../theme/Colors';
import VectorIcon from '../utils/VectorIcon';
import { ChatListData } from '../data/ChatListData';
import { useNavigation } from '@react-navigation/native';

const ChatList = () => {
  const navigation = useNavigation()

  const onNavigate = () => {
    navigation.navigate('ChatScreen')
  }

  return (
    <>
      {ChatListData.map(item => (
        <View key={item.id}>

          <TouchableOpacity onPress={onNavigate} style={styles.container}>
            <View style={styles.leftContainer}>
              <Image source={item.profile} style={styles.profileImg} />
              <View >

                <Text style={styles.userName} >{item.name}</Text>
                <Text style={styles.message} >{item.message}</Text>
              </View>
            </View>
            <View style={styles.rigthContainer}>
              <Text style={styles.timeStamp}>{item.time}</Text>
              {item.mute && (
                <VectorIcon
                  type="MaterialCommunityIcons"
                  name="volume-variant-off"
                  size={22}
                  color={Colors.textGrey}
                  style={styles.muteIcon}
                />
              )}

            </View>
          </TouchableOpacity>
        </View>
      ))}
    </>
  );
};

export default ChatList;

const styles = StyleSheet.create({
  profileImg: {
    borderRadius: 50,
    height: 40,
    width: 40,
    marginRight: 15,
  },
  container: {
    backgroundColor: Colors.background,
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between'

  },
  userName: {
    color: Colors.textColor,
    fontSize: 16
  },
  message: {
    color: Colors.textGrey,
    marginTop: 5,
    fontSize: 14
  },
  leftContainer: {
    flexDirection: 'row',
  },
  timeStamp: {
    color: Colors.textGrey,
    fontSize: 12,
  }, muteIcon: {
    marginTop: 5,
    marginLeft: 20,
  }
});
