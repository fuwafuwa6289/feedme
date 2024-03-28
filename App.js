import * as React from 'react';
import { StyleSheet, Text, View, TextInput, Image, ScrollView, TouchableOpacity } from 'react-native';
import { NavigationContainer, useTheme } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'; // เปลี่ยน import statement
import Home from './Screen/Home'; // นำเข้า Home.js
import Post from './Screen/Post'; // นำเข้า Post.js
import CreateParty from './Screen/CreateParty'; // นำเข้า CreateParty.js
import Notifications from './Screen/Noti'; // นำเข้า Notifications.js
import Chat from './Screen/Chat'; // นำเข้า Chat.js
import Icon from 'react-native-vector-icons/Ionicons'; // Import Ionicons or any other icon library

const Tab = createBottomTabNavigator(); // เปลี่ยนการสร้าง Bottom Tab Navigator

function MyTabs() {
  const { colors } = useTheme(); // เรียกใช้ hook useTheme เพื่อใช้งานสีจาก theme

  return (
    <Tab.Navigator
  initialRouteName="Home"
  tabBarOptions={{
    activeTintColor: '#FF8259', 
    inactiveTintColor: '#FFFFFF', 
    activeBackgroundColor: '#FFFFFF', 
    inactiveBackgroundColor: '#FF8259', 
    style: { backgroundColor: '#FF8259' }, 
    labelStyle: { fontSize: 12 },
    showLabel: false, 
  }}
>

      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <Icon name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Post"
        component={Post}
        options={{
          tabBarLabel: 'Post',
          tabBarIcon: ({ color }) => (
            <Icon name="newspaper" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="CreateParty"
        component={CreateParty}
        options={{
          tabBarLabel: 'Create',
          tabBarIcon: ({ color }) => (
            <Image
              source={require('./assets/fluentfoodpizza24regular.png')}
              style={{ tintColor: color, width: 30, height: 30 }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={Notifications}
        options={{
          tabBarLabel: 'Noti',
          tabBarIcon: ({ color }) => (
            <Icon name="notifications" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Chat"
        component={Chat}
        options={{
          tabBarLabel: 'Chat',
          tabBarIcon: ({ color }) => (
            <Icon name="chatbubbles" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}
