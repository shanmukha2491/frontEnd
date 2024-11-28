import { StyleSheet, Text, View, TextInput, TouchableOpacity, Keyboard, TouchableWithoutFeedback } from 'react-native';
import React, { useState } from 'react';
import CountryPicker from 'react-native-country-picker-modal';

const FormField = ({ title, value, placeHolder, handleChangeText, otherStyles, ...props }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [countryCode, setCountryCode] = useState('IN'); // Default country code
  const [callingCode, setCallingCode] = useState('91'); // Default calling code for India

  const onSelectCountry = (country) => {
    setCountryCode(country.cca2);
    setCallingCode(country.callingCode[0]);
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={[styles.formFieldContainer, otherStyles]}>
        <View style={styles.inputWrapper}>
          {/* Country Picker */}
          {title === "Phone Number" && (
            <>
              <CountryPicker
                countryCode={countryCode}
                withFlag
                withCallingCode
                withFilter
                onSelect={onSelectCountry}
                containerButtonStyle={styles.countryPicker}
              />
              <Text style={styles.callingCodeText}>+{callingCode}</Text>
            </>
          )}

          {/* Text Input Field */}
          <TextInput
            style={styles.textInput}
            value={value}
            keyboardType={title === "Phone Number" ? 'number-pad' : 'default'}
            maxLength={title === "Phone Number" ? 10 : undefined}
            placeholder={placeHolder}
            placeholderTextColor="#7B7B8b"
            onChangeText={handleChangeText}
            secureTextEntry={title === "Password" && !showPassword}
            {...props}
          />

          {/* Password toggle button */}
          {title === "Password" && (
            <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
              <Text style={styles.togglePasswordText}>{showPassword ? "Hide" : "Show"}</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default FormField;

const styles = StyleSheet.create({
  formFieldContainer: {
    marginVertical: 8,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 56,
    borderWidth: 2,
    borderColor: '#D1D1D1',
    borderRadius: 12,
    paddingHorizontal: 10,
    backgroundColor: '#F5F5F5',
  },
  countryPicker: {
    marginRight: 10,
  },
  callingCodeText: {
    color: '#000',
    fontWeight: '600',
    paddingRight: 10,
  },
  textInput: {
    flex: 1,
    fontSize: 16,
    color: '#000',
  },
  togglePasswordText: {
    color: '#007AFF',
    fontWeight: '600',
  },
});
