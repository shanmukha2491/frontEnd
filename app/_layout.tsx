import { Stack } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet } from 'react-native';
import { StatusBar } from 'react-native';
export default function RootLayout() {


  
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#355CA9" barStyle="light-content" />
      <Stack>
        <Stack.Screen name='index'
            options={{headerShown:false}}/>
        <Stack.Screen name="(tabs)" options={{ headerShown:false }} />
        <Stack.Screen name="(auth)" options={{ headerShown:false}} />
      </Stack>
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1, 
  },
});