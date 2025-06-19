import { colors } from "@/constants/theme";
import 'expo-router/entry';
import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

const index = () => {
  /*const router=useRouter();
  useEffect(()=>{
    setTimeout(()=>{
      router.push("/welcome");
        },2000);
  },[]);*/
  return (
    <View style={styles.container}>
      <Image
      style={styles.logo}
      resizeMode="contain"
      source={require("../assets/images/health1.jpg")}/>
    </View>
  )
}

export default index

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.black
  },
  logo:{
    height:"20%",
    aspectRatio:1,
  }
})