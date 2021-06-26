import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {StackNavigator} from react-navigation/stack
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, Platform, StatusBar, ImageBackground, Image } from 'react-native';
import DailyPicScreen from "./screens/DailyPic"
import SpaceCraftsScreen from './screens/SpaceCraft';
import StarMapScreen from './screens/starMap';
import spaceGif from './assets/space.gif'


export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

function App(){
  return(
    <NavigationContainer>
      <StackNavigator initialRouteName="Home" screenOptions={{
        headerShown:false
      }}>
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="SpaceCrafts" component={SpaceCraftsScreen}/>
        <Stack.Screen name="DailyPic" component={DailyPicScreen}/>
        <Stack.Screen name="StarMap" component={StarMapScreen}/>
      </StackNavigator>
        
    </NavigationContainer>
  );
}

const App = () => (
  <View style={styles.container}>
    <ImageBackground source={Image} style={styles.Image}>
      <Text style={styles.Text}>Stellar App</Text>
      </ImageBackground>
  </View>
)

<TouchableOpacity style={styles.routeCard} onPress={() =>
this.props.navigation.navigate("TonightSky")
}>
     <Text style={styles.routeText}>TonightSky</Text>
     <Image source={require("../assets/night-sky.png")} style={{ width:80, height: 80}}></Image>
</TouchableOpacity>

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
