import { useAuth } from '@/contexts/authContext';
import { router } from 'expo-router';
import React, { useRef } from 'react';
import { Alert, StyleSheet, TouchableOpacity } from 'react-native';
import { Button, colors, Input, Text } from 'react-native-elements';
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
    Alert.alert("sign up error",res.msg)
    }
  }

  return (
    <SafeAreaProvider>
      <SafeAreaView>
        
           <Text h2  h2Style={{ color:colors.grey0, fontSize: 30, marginLeft: 12,paddingTop:28 }}>Let's</Text>
           <Text h2 h2Style={{ color:colors.grey0, fontSize: 30 , marginLeft: 12 }}>Get Started</Text>
           <Text h4 h4Style={{ color:colors.grey3, fontSize: 16, marginLeft: 12 }}>Create an account to track your health</Text>
        
        <Input   inputStyle ={{ fontSize: 16 , fontWeight: 'bold'}} placeholder='Enter your name' autoCapitalize="none"  onChangeText={(value) => (nameRef.current = value)}/>

        <Input   inputStyle ={{ fontSize: 16 , fontWeight: 'bold'}} placeholder='Enter your email address' autoCapitalize="none"  keyboardType="email-address"
        onChangeText={(value) => (emailRef.current = value.trim())}/>
        
        <Input   inputStyle ={{ fontSize: 16 , fontWeight: 'bold'}} placeholder='Enter your password' autoCapitalize="none"   onChangeText={(value) => (passwordRef.current= value)}/>

        
        
        <TouchableOpacity onPress={()=>router.push('/auth/login')}>
                <Text style={styles.link}>Login</Text>
        </TouchableOpacity>
        <Button 
              title="Register"
              loading={false}
               loadingProps={{ size: 'small' }}
              buttonStyle={{
                borderColor: 'white',
                borderRadius: 30,
              }}
              titleStyle={{ fontWeight: 'bold', fontSize: 20 }}
              containerStyle={{
                marginHorizontal: 120,
                width: 150,
              }}
              onPress={handleSubmit}
            />
        
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
   link: {
    textDecorationLine: 'underline',
    color: '#4A4A68', // your purple-ish color
    fontSize: 16,
    marginVertical: 8,
    marginHorizontal: 10,
    alignSelf: 'flex-end',
  },
});

export default Register;