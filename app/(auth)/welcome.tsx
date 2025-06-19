import ScreenWrapper from '@/components/ScreenWrapper'
import Typo from '@/components/Typo'
import { colors, spacingX, spacingY } from '@/constants/theme'
import { verticalScale } from '@/utils/styling'
import { useRouter } from 'expo-router'
import React from 'react'
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native'

const Welcome = ()=> {
  const router= useRouter();
  return (
    <ScreenWrapper>
      <View style={styles.container}>
        {/*login button*/}
         <View>
          <TouchableOpacity onPress={()=>router.push('/(auth)/login')} style={styles.loginButton}>
            <Typo fontWeight="500">Sign in</Typo>
          </TouchableOpacity>
           <TouchableOpacity onPress={()=>router.push('/(auth)/register')} style={styles.loginButton}>
            <Typo fontWeight="500">Register</Typo>
          </TouchableOpacity> 

          <Image
            source={require("../../assets/images/tablets.jpg")}
            style={styles.welcomeImage}
            resizeMode="contain"
          />
        </View>
      </View>
    </ScreenWrapper>
  )
}

export default Welcome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    paddingTop: spacingY._7,
    paddingHorizontal: spacingX._7,
  },

  welcomeImage: {
    width: "100%",
    height: verticalScale(300),
    alignSelf: "center",
    marginTop: verticalScale(100),
  },
  loginButton: {
    alignSelf: "flex-end",
    marginRight: spacingX._20,
    color: colors.blue
  },
  footer: {
    backgroundColor: colors.primary,
    alignItems: "center",
    paddingTop: verticalScale(30),
    paddingBottom: verticalScale(45),
    gap: spacingY._20,
    shadowColor: "white",
    shadowOffset: { width: 0, height: -10 },
    shadowOpacity: 0.15,
    shadowRadius: 25,
    elevation: 10,
  },
  buttonContainer:{
    width: "100%",
    paddingHorizontal : spacingX._25
  }
});