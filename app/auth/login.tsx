
import { useAuth } from '@/contexts/authContext';
import { router } from 'expo-router';
import React, { useRef, useState } from 'react';
import { Alert, StyleSheet, TouchableOpacity } from 'react-native';
import { Button, colors, Icon, Input, Text } from 'react-native-elements';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

const Login = () => {
  const emailRef =  useRef("");
  const passwordRef =  useRef("");
  const [secureText, setSecureText] = useState(true);
  const [isBiometricSupported, setIsBiometricSupported] = useState(false);
  const fallBacktoDefaultAuth = () =>{
    console.log("fallback to password Authentication");
  }
  const handleBiometricAuthentication = async() =>{
if(!isBiometricSupported)
{
  Alert.alert("Biomertic is not supported, please enter your passwor")
}
  }
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
      router.replace("../tabs");
    }
  }
  
  return (
    <SafeAreaProvider>
       <SafeAreaView>    
          <Text h2  h2Style={{ color:colors.grey0, fontSize: 30, marginLeft: 12,paddingTop:28 }}>Hey</Text>
          <Text h4 h4Style={{ color:colors.grey3, fontSize: 16, marginLeft: 12, marginBottom:10 }}>Welcome Back!</Text>
        <Input   inputStyle ={{ fontSize: 16 , fontWeight: 'bold'}} placeholder='Enter email' autoCapitalize="none" onChangeText={(value) => (emailRef.current = value)}/>

        <Input inputStyle ={{ fontSize: 16 , fontWeight: 'bold'}}
        secureTextEntry={secureText}
        rightIcon={
          <Icon
            name={secureText ? 'eye-off' : 'eye'}
            type="feather"
            color="#888"
            size={20}
            onPress={() => setSecureText(!secureText)}
          /> 
        }
          placeholder="Enter password" onChangeText={(value) => (passwordRef.current = value)}
        />
           
       <TouchableOpacity onPress={()=>router.push('/auth/register')}>
        <Text style={styles.link}>Register</Text>
       </TouchableOpacity>

      <TouchableOpacity onPress={()=>router.push('/auth/forgotPassword')}>
        <Text style={styles.link}>Forgot Password</Text>
       </TouchableOpacity>

        <Button 
              title="Login"
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
            
            <TouchableOpacity>
            <Icon
            name={"fingerprint"}
            type="entypo"
            color="#888"
            size={20}
            onPress={handleSubmit}
           /> 
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
  container: {
    marginTop: 20,
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

export default Login;

function userRef(arg0: string) {
  throw new Error('Function not implemented.');
}
