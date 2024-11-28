import React, { useRef, useState } from 'react';
import { Animated, View, FlatList, Alert } from 'react-native';
import slides from '../constants/slides';
import OnBoardingItem from './onboardingItem';
import GradientText from './gradientText';
import CustomButton from "../components/customButton";
import Paginator from './paginator';
import { useNavigation } from 'expo-router';



const OnBoarding = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;
  const handlePress=() => {

    navigation.navigate('(auth)');
  }
  const slidesRef = useRef(null);
  const viewableItemsChanged = useRef(({ viewableItems }) => {
    setCurrentIndex(viewableItems[0]?.index || 0);
  }).current;

  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;
  const navigation = useNavigation()
  return (
    <View className="flex-1 bg-white">
      {/* Section 1: Gradient Text */}
      <View className="justify-center items-center">
        <GradientText Text="SAVARI" style="mt-10 mb-10"/>
      </View>

      {/* Section 2: FlatList */}
      <View className="flex-[0.8] w-full">
        <FlatList
          data={slides}
          renderItem={({ item }) => <OnBoardingItem item={item} />}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          bounces={false}
          keyExtractor={(item) => item.id}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { x: scrollX } } }],
            { useNativeDriver: false }
          )}
          onViewableItemsChanged={viewableItemsChanged}
          viewabilityConfig={viewConfig}
          scrollEventThrottle={32}
          ref={slidesRef}
        />
      </View>

      {/* Section 3: Custom Button */}
      {currentIndex === slides.length - 1 && (
        <View className="flex-[0.1] justify-center items-center">
          <CustomButton
            title="Get Started"
            handlePress={handlePress}
            containerStyle="mt-7"
            textStyles=""
            isLoading={false} // Set to true if you want to show loading state
          />

        </View>
      )}

      {/* Section 4: Paginator (Always at the bottom) */}
      <View className="absolute bottom-2 left-0 right-0 justify-center items-center">
        <Paginator data={slides} scrollX={scrollX}/>
      </View>
    </View>
  );
};

export default OnBoarding;
