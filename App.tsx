import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, ActivityIndicator } from 'react-native';
import DayListItem from './src/components/core/DayListItem';
import { useFonts, Inter_900Black } from '@expo-google-fonts/inter';
import * as SplashScreen from 'expo-splash-screen';
import { useState, useEffect } from "react";
import {AmaticSC_400Regular, AmaticSC_700Bold} from '@expo-google-fonts/amatic-sc'

const days = [...Array(24)].map((val, index) => index + 1);
SplashScreen.preventAutoHideAsync(); 

export default function App() {

  const [fontsLoaded, fontError] = useFonts({
    Inter: Inter_900Black,
    amatic: AmaticSC_400Regular,
    amaticBold: AmaticSC_700Bold
  });

  useEffect(() => {
    if(fontsLoaded || fontError){
      SplashScreen.hideAsync();
    }
  },[fontsLoaded,fontError]);

  if(!fontsLoaded && !fontError){
    return null;
  }

  return (
    <View style={styles.container}>

      <FlatList 
        data={days}
        contentContainerStyle = {styles.content}
        columnWrapperStyle = {styles.columns}
        numColumns={2}
        renderItem={({item}) => <DayListItem day={item}/>}
        />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

  },
  columns: {
    gap: 10
  },
  content: {
    gap: 10,
    padding: 10
  },
});
