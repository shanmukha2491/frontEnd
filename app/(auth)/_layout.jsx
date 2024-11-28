import { StyleSheet, Text, View, useWindowDimensions, Image } from 'react-native'
import React, {useState} from 'react'
import { TabView, SceneMap, TabBar } from 'react-native-tab-view'
import SignIn from './sign-in'
import SignUp from './sign-up'
import images from '../../constants/images'
import GradientText from '../../components/gradientText'
const renderScene = SceneMap({
    first: SignIn,
    second: SignUp,
  });
  
const AuthLayout = () => {

    const renderTabBar = (props) => (
        <TabBar
          {...props}
          style={styles.tabBar} // Apply your custom styles here
          indicatorStyle={styles.indicator} // Custom indicator style
          renderLabel={({ route, focused, color }) => (
            <Text style={[styles.tabLabel, { color: focused ? '#000000' : '#A9A9A9' }]}>
              {route.title}
            </Text>
          )}
        />
      );

    const layout = useWindowDimensions();
    const [index, setIndex] = useState(0);
    const [routes] = React.useState([
        { key: 'first', title: 'Sign In' },
        { key: 'second', title: 'Sign Up' },
      ]);

  return (
    
        <View className="flex-1 justify-start">
            <GradientText Text="SAVARI" />
            <Image 
            className="w-full"
            source={images.AuthBackground}
            />
            <TabView
                navigationState={{ index, routes }}
                renderScene={renderScene}
                onIndexChange={setIndex}
                initialLayout={{ width: layout.width }}
                renderTabBar={renderTabBar} // Use the custom tab bar
            />
        </View>
   
  )
}

export default AuthLayout

const styles = StyleSheet.create({
    tabBar: {
      backgroundColor: '#ffffff', // Tab bar background color
    },
    indicator: {
      backgroundColor: '#000000', // Change to desired indicator color
      height: 4, // Thickness of the selected tab indicator
    },
    backgroundImage: {
      width: '100%', // Adjust as needed
      height: '30%', // Adjust as needed
      position: 'absolute', // Positioning
      top: 0, // Adjust if needed
    },
    tabLabel: {
        fontSize: 16, // Font size for tab labels
        textAlign: 'center', // Center the text
        padding:5
      },
  });