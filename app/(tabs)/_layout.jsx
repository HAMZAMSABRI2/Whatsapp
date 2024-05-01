import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import { Entypo } from '@expo/vector-icons'
import Ionicons from '@expo/vector-icons/Ionicons'

const AppTabs = () => {
  return (
    <>
      <Tabs>
        <Tabs.Screen
          name="home"
          options={{
            title: 'Chat',
            tabBarIcon: () => <Ionicons name="chatbubble-outline" />,
          }}
        />
        <Tabs.Screen
          name="call"
          options={{
            title: 'Call',
            tabBarIcon: () => <Ionicons name="call" />,
          }}
        />
        <Tabs.Screen
          name="stories"
          options={{
            title: 'Story',
            tabBarIcon: () => <Ionicons name="add-circle-outline" />,
          }}
        />
        <Tabs.Screen
          name="community"
          options={{
            title: 'Community',
            tabBarIcon: () => <Ionicons name="people-outline" />,
          }}
        />
      </Tabs>
    </>
  )
}

export default AppTabs