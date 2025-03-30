import { View, Text, Image, ImageBackground } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import { images } from '@/constants/images'
import { icons } from '@/constants/icons'

const TabIcon = ({focused, icon, title}: any) => {

    return !focused ? 
    (<View className='size-full flex justify-center items-center mt-4 rounded-full'>
      <Image source={icon} className='size-5' tintColor={"#A8B5DB"}/>
      {/* <Text>{title}</Text> */}
      </View>
    ) 
    : (
      <ImageBackground source={images.highlight} className='flex justify-center items-center mt-4 min-h-16 min-w-[112px] rounded-full flex-1 flex-row overflow-hidden gap-2'>
        <Image source={icon} tintColor={'#151312'} className='size-5' />
        <Text className='text-secondary text-base font-semibold'>{title}</Text>
      </ImageBackground>
    )

}
const _layout = () => {
  return (
    <Tabs
    screenOptions={{
      tabBarShowLabel: false,
      tabBarItemStyle: {
        justifyContent:'center',
        alignItems: 'center',
        width: '100%',
        height: '100%'
      },
      tabBarStyle:{
        backgroundColor: '#0F0D23',
        borderRadius: 50,
        marginHorizontal:20,
        marginBottom:36,
        height:52,
        position:'absolute',
        overflow: 'hidden',
        borderWidth: 1,
        borderColor: "#0F0D23"
      }
    }}
    >
       <Tabs.Screen name='index' options={{
        title:"Home",
        headerShown: false, 
        tabBarIcon: ({focused}:{focused: boolean}) => <TabIcon focused={focused} title="Home" icon={icons.home} />
       }}/>
         <Tabs.Screen name='search' options={{
          title: "Search",
          headerShown: false,
          tabBarIcon: ({focused}:{focused: boolean}) => <TabIcon focused={focused} title="Search" icon={icons.search} />
         }} />
       
       <Tabs.Screen name='saved' options={{
        title: "Saved",
        headerShown: false,
        tabBarIcon: ({focused}:{focused: boolean}) => <TabIcon focused={focused} title="Saved" icon={icons.save} />
       }}/>
       <Tabs.Screen name='profile' options={{
        title:"Profile",
        headerShown: false,
        tabBarIcon: ({focused}:{focused: boolean}) => <TabIcon focused={focused} title="Profile" icon={icons.person} />
       }} />
    </Tabs>
  )
}

export default _layout