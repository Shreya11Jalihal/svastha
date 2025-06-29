import { auth } from '@/config/firebase'
import { colors, spacingX } from '@/constants/theme'
import { signOut } from 'firebase/auth'
import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const Home= () => {

  const handleLogout= async ()=>{
    await signOut(auth);
  }

  return (
    <View>
      <Text>Home</Text>
      <TouchableOpacity onPress={handleLogout} style={styles.logoutButton}>
        <Text>Logout</Text>
        </TouchableOpacity>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  logoutButton: {
      alignSelf: "flex-end",
      marginRight: spacingX._20,
      color: colors.blue
    },
})