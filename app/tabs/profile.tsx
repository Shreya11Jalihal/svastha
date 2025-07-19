import { getAuth, onAuthStateChanged } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Profile = () => {

  const userId= "userId1";
  //use 10.0.2.2:8080 The android emulator treats localhost or 127.0.0.1 as itself. 10.0.2.2:8080 is a special alias that
  //forwards to your computer's localhost
  const apiUrl = `http://10.0.2.2:8080/api/v1/health-metrics/${userId}`;
  const [jwtToken, setIdToken] =  useState<string | null>(null);;

  useEffect(()=>{
      const auth = getAuth();
      onAuthStateChanged(auth,async (firebaseUser)=>{
          if(firebaseUser){
          const jwtTokenId= await firebaseUser.getIdToken();
          setIdToken(jwtTokenId);
          }
      });
      handleHealthMetrics();
  });

  const handleHealthMetrics = async() =>{ 
    console.log("ok")
    console.log(jwtToken);
    const bodyData = {
              userId: "userId1",
              userHeight: "154",
              userWeight: "54"
            };
    try{
      //make an api call to the BE 
      const response = await fetch(apiUrl,{
        method: 'POST',
         headers: {
         'Authorization': `Bearer ${jwtToken}`,
         'Content-Type': 'application/json'
        },
        body: JSON.stringify(bodyData)
      })
      const data = await response.json();
      if(data){
         console.log('API response:', data);
      }
      else{
        console.log("Empty json response")
      }
    }
    catch(error){
      console.log("Error fetching data"+ error)
    }
}

  return (
    <View>
      <Text>profile</Text>
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({})