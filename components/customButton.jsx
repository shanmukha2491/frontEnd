import { Text, TouchableOpacity } from 'react-native'
import React from 'react'

const CustomButton = ({title, handlePress, containerStyle, textStyles, isLoading}) => {
  return (
    <TouchableOpacity 
    disabled={isLoading}
    onPress={handlePress}
    activeOpacity={0.7}
    className={`bg-secondary rounded-xl min-h-[62px] min-w-fit px-20 justify-center items-center bg-[#FFC700] ${containerStyle} ${isLoading ? 'opacity-50' : ""}`
    
    }>
      <Text className={`text-primary font-psemibold text-lg ${textStyles}`}>{title}</Text>
    </TouchableOpacity>
  )
}

export default CustomButton

