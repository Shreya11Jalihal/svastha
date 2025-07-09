import { useAuth } from '@/contexts/authContext';
import { router } from 'expo-router';
import React, { useState } from 'react';
import { Alert, StyleSheet, TouchableOpacity, View } from 'react-native';
import { Button, colors, Icon, Input, Text } from 'react-native-elements';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

function Register() {
 const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({email: "", password: ""});
  const {register : registerUser} = useAuth();
  const [secureText, setSecureText] = useState(true);

  const validate=()=>{
    const newErrors = {email: "", password: ""};
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$&]).{8,}$/;

    // Email required & valid format
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)
    ) {
      newErrors.email = "Invalid email address.";
    }

    // Password required & minimum length
    if (!formData.password) {
      newErrors.password = "Password is required.";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters.";
    } else if (!passwordRegex.test(formData.password)){
      newErrors.password = "Password must have at least 1 uppercase letter, 1 lowercase letter, 1 number, 1 special character (@, #, $, &)";
    }

     setErrors(newErrors);
     return Object.keys(newErrors).length === 0;
  }

  const handleSubmit = async () =>{
    if(validate()){
      const res = await registerUser(formData.name,formData.email, formData.password );
      if(!res.success) Alert.alert("sign up error",res.msg);
    }
  }

  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <View>
           <Text h2 h2Style={{ color:colors.grey0, fontSize: 30, marginLeft: 12,paddingTop:28 }}>Let's</Text>
           <Text h2 h2Style={{ color:colors.grey0, fontSize: 30 , marginLeft: 12 }}>Get Started</Text>
           <Text h4 h4Style={{ color:colors.grey3, fontSize: 16, marginLeft: 12 }}>Create an account to track your health</Text>
        
         <Input inputStyle ={{ fontSize: 16 , fontWeight: 'bold'}} placeholder='Enter your name' autoCapitalize="none"  onChangeText={(value) =>
              setFormData((prev) => ({ ...prev, name: value }))
            }/>
        
        <Input   inputStyle ={{ fontSize: 16 , fontWeight: 'bold'}} placeholder='Enter your email address' autoCapitalize="none"  keyboardType="email-address"
        onChangeText={(value) => (formData.email= value)}/>
        {errors.email ? (<Text style={{ color: 'red', marginLeft: 12, marginTop:0 }}>{errors.email}</Text>) : null}
        
        <Input   inputStyle ={{ fontSize: 16 , fontWeight: 'bold'}} 
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
          placeholder='Enter your password' autoCapitalize="none" 
          onChangeText={(value) => (formData.password= value)}/>
                {errors.password ? (<Text style={{ color: 'red', marginLeft: 12, marginTop:0 }}>{errors.password}</Text>) : null}

        
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
        </View>
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
    color: '#4A4A68',
    fontSize: 16,
    marginVertical: 8,
    marginHorizontal: 10,
    alignSelf: 'flex-end',
  },
});

export default Register;