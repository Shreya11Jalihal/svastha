import { auth } from '@/config/firebase';
import { signOut } from 'firebase/auth';
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-elements';

const Profile = () => {const handleLogout= async ()=>{
    await signOut(auth);
  }
const user = auth.currentUser;


  return (
    <View style={styles.container}>
      <Button  title="Logout" onPress={handleLogout}/>
              
       
      <Image
        source={require('../../assets/images/welcome.png')}
        style={styles.image}
        resizeMode="contain"
      />

      <Text  style={styles.heading}>
        Hello { user?.displayName }
      </Text>

      <Text style={styles.subtitle}>
        You are doing well today. Don’t forget to exercise in the evening and take glucose test after your meal in the evening.
      </Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff', // adjust to match your design
  },
  image: {
    width: 250,
    height: 250,
    marginBottom: 32,
  },
  heading: {
    fontWeight: 'bold',
    marginBottom: 12,
  },
  subtitle: {
    textAlign: 'center',
    color: '#666',
    marginBottom: 24,
    paddingHorizontal: 16,
  },
  button: {
    backgroundColor: '#6B4EFF',
    paddingHorizontal: 24,
    borderRadius: 12,
  },
});

export default Profile