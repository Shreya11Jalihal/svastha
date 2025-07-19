import { Tabs } from 'expo-router';
import React from 'react';
import { Icon } from 'react-native-elements';


export default function _layout() {
  return (
    <Tabs>
        <Tabs.Screen name="home" options={{
          tabBarIcon: ({focused}) => {
            let iconName= '';
            iconName = focused ? 'home' : 'home-outline';
            return (
              <Icon
                name={iconName}
                type="ionicon"
                color={"#20a7db"}
              />
            );
          }
        }}
         />
        <Tabs.Screen name="profile" 
        options={{
          tabBarIcon: ({focused}) => {
            let iconName= '';
            iconName = focused ? 'person-circle' : 'person-circle-outline';
            return (
              <Icon
                name={iconName}
                type="ionicon"
                color={"#20a7db"}
              />
            );
          }
        }} />
    </Tabs>
  );
}