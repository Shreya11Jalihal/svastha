import { useAuth } from '@/contexts/authContext';
import React, { useRef } from 'react';
import { Alert, StyleSheet, Text, TextInput, TouchableOpacity } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

const Register = () => {
  const emailRef =  useRef("");
  const passwordRef =  useRef("");
  const nameRef =  useRef("");
  const {register : registerUser} = useAuth();

  const handleSubmit = async () =>{

    if(!emailRef.current ||  !nameRef.current || !passwordRef.current)
    {
      Alert.alert("please fill in all the details for Sign up");
      return;

    }
    const res = await registerUser(nameRef.current, emailRef.current, passwordRef.current );
    console.log("register Results", res);
    if(!res.success)
    {
    console.log(/^\s+$/.test(emailRef.current))
    console.log(emailRef.current)
    Alert.alert("sign up error",res.msg)
    }
  }

  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <TextInput
        placeholder="Enter your name"
        onChangeText={(value) => (nameRef.current = value)}
        />

        <TextInput
        placeholder="Enter your email"
        keyboardType="email-address"
        autoCapitalize="none"
        onChangeText={(value) => (emailRef.current = value.trim())}
        />
        <TextInput
        placeholder="Enter your password"
        onChangeText={(value) => (passwordRef.current= value)}
        />
  	  
        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text>Signup</Text>
        </TouchableOpacity>
        
      </SafeAreaView>
    </SafeAreaProvider>

    
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  button: {
    alignItems: 'center',
    backgroundColor: 'colors.blue',
    padding: 10,
  },
});

export default Register;