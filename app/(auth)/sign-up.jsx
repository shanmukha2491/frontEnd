import { Text, View, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import React, { useState } from 'react';
import FormField from '../../components/formField';
import { useRouter } from 'expo-router'; 
import CustomButton from "../../components/customButton";

const SignUp = () => {
  const router = useRouter(); // Use router from expo-router


  const [isSubmitting, setIsSubmitting] = useState(false);
  const [form, setForm] = useState({
    userName : "",
    phone : ""
  });

  const submit = () => {
    // Add form validation if necessary
    router.push("/home");
  };




  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }} // Flex to fill the screen
    >
      <ScrollView contentContainerStyle={{ flexGrow: 1 }} keyboardShouldPersistTaps="handled">
        <View className="flex-1 justify-start p-5">
          <View className="w-full">
            <Text className="text-xl mb-3">Enter your details</Text>

            <FormField
            placeHolder="Username"
            onChangeText={(e) => setForm({ ...form, userName: e })}
            />
            <FormField
              title="Phone Number"
              
              placeHolder="Enter your phone number"
              handleChangeText={(e) => setForm({ ...form, phone: e })}
            />
            <CustomButton
              title="Get OTP"
              handlePress={submit}
              containerStyle="mt-7"
              isLoading={isSubmitting}
            />
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default SignUp;
