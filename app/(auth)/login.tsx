import { useAuth } from '@/contexts/authContext';
import { router } from 'expo-router';
import React, { useRef } from 'react';
import { Alert, StyleSheet, Text, TextInput, TouchableOpacity } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

const Login = () => {
  const emailRef =  useRef("");
  const passwordRef =  useRef("");

  const {login : loginUser } =useAuth();
  const handleSubmit= async() =>{
    if(!emailRef.current || !passwordRef.current)
    {
      console.log(emailRef.current,passwordRef.current )
      Alert.alert("please fill in all the details")
    }
    const res=await loginUser(emailRef.current, passwordRef.current);
    console.log(res)
    if(res.success)
    {
      router.replace("/(tabs)");
    }
  }
  
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <TextInput
          style={styles.input}
          keyboardType="email-address"
          onChangeText={(value) => (emailRef.current = value)}
          autoCapitalize="none"
          placeholder="Email ID"
        />
        <TextInput
        style={styles.input}
        placeholder="Enter your password"
        secureTextEntry={true}
        autoCapitalize="none"
        autoCorrect={false}
        onChangeText={(value) => (passwordRef.current = value)}
        />
  	  
        <TouchableOpacity onPress={handleSubmit} style={styles.button}>
          <Text>Login</Text>
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

export default Login;

function userRef(arg0: string) {
  throw new Error('Function not implemented.');
}
