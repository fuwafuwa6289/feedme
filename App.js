import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image } from 'react-native';
import Home from './Screen/Home';
import Post from './Screen/Post';
import CreateParty from './Screen/CreateParty';
import Notifications from './Screen/Noti';
import Chat from './Screen/Chat';
import Icon from 'react-native-vector-icons/Ionicons';
import ClassThai from './Screen/ClassThai';
import ClassNation from './Screen/ClassNation';
import ClassBakefast from './Screen/ClassBakefast';
import ClassCafe from './Screen/ClassCafe';
import JoinGroup from './Screen/JoinGroup';
import { useEffect, useState } from 'react';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();



function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        activeTintColor: '#FFFFFF',
        inactiveTintColor: '#FFFFFF',
        activeBackgroundColor: '#FE9D80',
        inactiveBackgroundColor: '#FF8259',
        style: { backgroundColor: '#FF8259' },
        showLabel: false, // เพิ่ม showLabel เป็น false เพื่อซ่อนชื่อแท็บบาร์
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="home-outline" color={color} size={26} />
          ),
          headerShown: false, // ซ่อน Header ของหน้า Home
        }}
      />
      <Tab.Screen
        name="Post"
        component={Post}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="newspaper-outline" color={color} size={26} />
          ),
          headerShown: false, // ซ่อน Header ของหน้า Post
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
              style={{ tintColor: color, width: 29, height: 29 }}
            />
          ),
          headerShown: false, // ซ่อน Header ของหน้า CreateParty
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={Notifications}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="notifications-outline" color={color} size={26} />
          ),
          headerShown: false, // ซ่อน Header ของหน้า Notifications
        }}
      />
      <Tab.Screen
        name="Chat"
        component={Chat}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="chatbubbles-outline" color={color} size={26} />
          ),
          headerShown: false, // ซ่อน Header ของหน้า Chat
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Main"
          component={MyTabs}
          options={{ headerShown: false }} // ซ่อน Header Bar ของ Stack Navigator
        />
        <Stack.Screen name="ClassThai"
          component={ClassThai}
          options={{ headerShown: false }} />

        <Stack.Screen name="ClassNation"
          component={ClassNation}
          options={{ headerShown: false }} />

        <Stack.Screen name="ClassCafe"
          component={ClassCafe}
          options={{ headerShown: false }} />

        <Stack.Screen name="ClassBakefast"
          component={ClassBakefast}
          options={{ headerShown: false }} />

        <Stack.Screen name="JoinGroup"
          component={JoinGroup}
          options={{ headerShown: false }} />
      </Stack.Navigator>


    </NavigationContainer>
  );
}


