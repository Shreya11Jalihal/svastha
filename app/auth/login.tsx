import { useAuth } from '@/contexts/authContext';
import { router } from 'expo-router';
import React, { useRef } from 'react';
import { Alert, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Button, Input } from 'react-native-elements';
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
      router.replace("../tabs");
    }
  }
  
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <Input   inputStyle ={{ fontSize: 16 , fontWeight: 'bold'}} placeholder='Enter email' autoCapitalize="none" onChangeText={(value) => (emailRef.current = value)}/>

        <Input inputStyle ={{ fontSize: 16 , fontWeight: 'bold'}} placeholder="Enter password" secureTextEntry={true}  onChangeText={(value) => (passwordRef.current = value)}/>
           
       <TouchableOpacity onPress={()=>router.push('/auth/register')}>
        <Text style={styles.link}>Register</Text>
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
