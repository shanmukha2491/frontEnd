import React from 'react';
import { View, StatusBar } from 'react-native';

import OnBoarding from '../components/onboarding';

export default function App() {
  return (
    <View className="flex-1 justify-center items-center">
        {/* <StatusBar 
        backgroundColor="#355CA9"
    
      /> */}
      
      <View>
        <OnBoarding />
      </View>
    </View>
  );
}
