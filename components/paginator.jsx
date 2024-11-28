import { StyleSheet, Animated, useWindowDimensions, View } from 'react-native'
import React from 'react'
import { Extrapolate } from 'react-native-reanimated'

const Paginator = ({data, scrollX}) => {

    const {width} = useWindowDimensions()


  return (
    <View className="flex-row justify-center items-center">
        {data.map((_, i)=>{
            const inputRange = [(i-1) * width , i* width , (i+1)*width];
            const dotWidth = scrollX.interpolate({
                inputRange, 
                outputRange: [10, 20, 10],
                extrapolate: "clamp"
            })
            
            const opacity = scrollX.interpolate({
                inputRange,
                outputRange:[0.3, 1, 0.3],
                extrapolate:"clamp"
            })
            return <Animated.View style={[
                style.dot,
                 {width:dotWidth, opacity:opacity}]} key={i.toString()}/>
        })}
    </View>
  )
}

export default Paginator

const style = StyleSheet.create({
    dot:{
        height:10, 
        borderRadius:5,
        backgroundColor:"#355CA9",
        marginHorizontal:8,
        verticalAlign:"bottom",
        justifyContent:"center",
    }
})

