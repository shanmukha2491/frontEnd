import { Image, View, Text } from 'react-native'
import icons from "../../constants/icons"
import React from 'react'
import { Tabs, Redirect } from 'expo-router'



const TabIcon = ({icon, color, name, focused}) =>{
  return (
    <View className="flex-1 justify-center items-center gap-1">
      <Image 
      source={icon}
      resizeMode='contain'
      tintColor={color}
      className="w-6 h-6"
      />

      <Text
      className={`${focused ? "font-bold" : "font-plight"}`}

      style={{color:color}}
      >{name}</Text>
    </View>
  )
}


const TabLayout = () => {
  return (
    <>
      <Tabs
      screenOptions={{
        tabBarShowLabel:false,
        tabBarActiveTintColor: "#FFC700",
        tabBarInactiveTintColor: "#CDCDE0",
        tabBarStyle:{
          backgroundColor: '#355CA9',
          height:84
        }
      }}>
        <Tabs.Screen 
        name='home'
        options={{
          title:"Home",
          headerShown:false,
          tabBarIcon :({color, focused}) => (
            <TabIcon 
            icon={icons.home}
            color={color}
            name="Home"
            focused={focused}
            />
          )}}
        />

<Tabs.Screen 
        name='bus'
        options={{
          title:"Bus",
          headerShown:false,
          tabBarIcon :({color, focused}) => (
            <TabIcon 
            icon={icons.bus}
            color={color}
            name="Bus"
            focused={focused}
            />
          )}}
        />

<Tabs.Screen 
        name='train'
        options={{
          title:"Train",
          headerShown:false,
          tabBarIcon :({color, focused}) => (
            <TabIcon 
            icon={icons.train}
            color={color}
            name="Train"
            focused={focused}
            />
          )}}
        />

<Tabs.Screen 
        name='flight'
        options={{
          title:"Flight",
          headerShown:false,
          tabBarIcon :({color, focused}) => (
            <TabIcon 
            icon={icons.flight}
            color={color}
            name="Flight"
            focused={focused}
            />
          )}}
        />

<Tabs.Screen 
        name='hotel'
        options={{
          title:"Hotels",
          headerShown:false,
          tabBarIcon :({color, focused}) => (
            <TabIcon 
            icon={icons.hotel}
            color={color}
            name="Hotels"
            focused={focused}
            />
          )}}
        />
      </Tabs>
    </>
  )
}

export default TabLayout

