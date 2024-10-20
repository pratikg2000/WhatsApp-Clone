import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import CommunityScreen from '../screen/CommunityScreen';
import { Colors } from '../theme/Colors';
import VectorIcon from '../utils/VectorIcon';
import { TabBarData } from '../data/TabbarData';

const Tab = createMaterialTopTabNavigator();

const TopTabbar = () => {
    return (
        <Tab.Navigator
            initialRouteName='Chats'
            screenOptions={() => ({
                tabBarActiveTintColor: Colors.secondaryColor,
                tabBarInactiveTintColor: Colors.tertiary,
                tabBarIndicatorStyle: { backgroundColor: Colors.tertiary },
                tabBarStyle: {
                    backgroundColor: Colors.primaryColor,
                }
            })}>
            <Tab.Screen
                name="Community"
                component={CommunityScreen}
                options={{
                    tabBarShowLabel: false,
                    tabBarIcon: ({ color }) => (
                        <VectorIcon type="FontAwesome" name="users" size={20} color={color} />
                    )
                }}
            />
            {TabBarData.map(tab => (

                <Tab.Screen
                    key={tab.id}
                    name={tab.name}
                    component={tab.route}
                />

            ))}
        </Tab.Navigator>
    );
};

export default TopTabbar;
