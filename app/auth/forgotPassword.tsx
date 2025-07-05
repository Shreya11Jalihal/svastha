import { useRouter } from 'expo-router';
import { getAuth, sendPasswordResetEmail } from 'firebase/auth';
import React, { useState } from 'react';
import { Alert, StyleSheet, View } from 'react-native';
import { Button, colors, Input, Text } from 'react-native-elements';

const forgotPassword = () => {
   const [email, setEmail] = useState('');
   const auth = getAuth();
   const router= useRouter();
   const handleResetPassword = () => {
    if (!email) {
      Alert.alert('Error', 'Please enter your email.');
      return;
    }

    sendPasswordResetEmail(auth, email)
      .then(() => {
        setEmail('');
        Alert.alert(
          'Success',
          'A password reset email has been sent!',
          [{ text: 'OK', onPress: () => router.back }]
        );
        router.back();
      })
      .catch((error) => {
        console.log(error);
        Alert.alert('Error', error.message);
      });
  };

  return (
    <View style={styles.container}>
      <Text h4 h4Style={styles.title}>Forgot Password</Text>
      <Input inputStyle ={{ fontSize: 16 , fontWeight: 'bold'}}
        placeholder="Enter your email"
        leftIcon={{ type: 'material', name: 'email' }}
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        keyboardType="email-address"
      />
      <Button
        title="Send Reset Email"
        onPress={handleResetPassword}
        containerStyle={styles.button}
      />
    </View>
  );
}

export default forgotPassword

const styles = StyleSheet.create({
    container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    textAlign: 'center',
    fontSize:16,
    marginBottom: 20,
    color:colors.grey3,
  },
  button: {
    marginTop: 10,
  },
})