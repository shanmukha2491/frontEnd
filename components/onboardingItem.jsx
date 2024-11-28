import { Text, View, Image, useWindowDimensions } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const OnBoardingItem = ({ item }) => {
  const { width, height } = useWindowDimensions();
  const navigation = useNavigation();

  return (
    <View className="flex-1 bg-white" style={{ width }}>
      {/* Image Container */}
      <View className="justify-center items-center">
        <Image
          source={item.image}
          style={{
            width: width * 0.8, // Set width to 80% of the screen width
          
            resizeMode: 'contain', // Ensures the image scales without distortion
          }}
        />
      </View>

      {/* Text Container */}
      <View className="justify-center items-center mt-5">
        <Text className="text-3xl mt-10">{item.title}</Text>
        <Text className="mx-11 text-lg mt-6 text-center">{item.description}</Text>
      </View>
    </View>
  );
};

export default OnBoardingItem;
