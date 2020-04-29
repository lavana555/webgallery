import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import {ListPhoto} from "./src/ui/ListPhoto";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {Itemphoto} from "./src/ui/ItemPhoto";
import {Provider} from "react-redux";
import store from "./src/bll/store";

const Stack = createStackNavigator();


export default function App() {
  return (
      <Provider store={store}>
       <NavigationContainer>
            <Stack.Navigator initialRouteName="ListPhoto">
                <Stack.Screen name="ListPhoto" component={ListPhoto} />
                <Stack.Screen name="Itemphoto" component={Itemphoto} />
            </Stack.Navigator>
        </NavigationContainer>
          </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    display:'flex',
    backgroundColor: '#bfbfbf',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
