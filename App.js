import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './Screen/Home'; // นำเข้า Home.js
import Post from './Screen/Post'; // นำเข้า Post.js
import CreateParty from './Screen/CreateParty'; // นำเข้า CreateParty.js
import Notifications from './Screen/Noti'; // นำเข้า Notifications.js
import Chat from './Screen/Chat'; // นำเข้า Chat.js
import Icon from 'react-native-vector-icons/Ionicons'; // Import Ionicons or any other icon library

const Tab = createMaterialBottomTabNavigator();


function MyTabs() {
  return (
    <Tab.Navigator
  initialRouteName="Home"
  // activeColor="#e91e63"
  labelStyle={{ fontSize: 12 }}
  barStyle={{ backgroundColor: '#FF8259' }}

  
>
      <Tab.Screen
        name="Home"
        component={Home}
        tabBarOptions={{
          activeTintColor: '#FFFFFF', // กำหนดสีของข้อความ Tab ที่ถูกเลือก
          labelStyle: { fontSize: 12 }
        }}
        options={{
          tabBarColor:'white',
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
         
            <Icon name="home-outline" color={color} size={26} />
          ),

        }}
      />
      <Tab.Screen
        name="Post"
        component={Post}
        options={{
          tabBarLabel: 'Post',
          tabBarIcon: ({ color }) => (
            <Icon name="newspaper-outline" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="CreateParty"
        component={CreateParty}
        options={{
          tabBarLabel: 'Create',
          tabBarIcon: ({ color }) => (
            <Icon name="add-outline" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={Notifications}
        options={{
          tabBarLabel: 'Noti',
          tabBarIcon: ({ color }) => (
            <Icon name="notifications-outline" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Chat"
        component={Chat}
        options={{
          tabBarLabel: 'Chat',
          tabBarIcon: ({ color }) => (
            <Icon name="chatbubbles-outline" color={color} size={26} />
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
