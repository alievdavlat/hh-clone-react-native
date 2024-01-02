import { Stack } from "expo-router";
import React, { useCallback } from "react";
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import {MyJobs, PopularJobs, Search} from '../components'
import * as SplashScreen from "expo-splash-screen";
import { SIZES } from "../constants";
import { useFonts } from "expo-font";


SplashScreen.preventAutoHideAsync();


const index = () => {
  const [fontsLoaded] = useFonts({
    "Roboto-Regular": require("../assets/fonts/Roboto-Regular.ttf"),
    "Roboto-Bold": require("../assets/fonts/Roboto-Bold.ttf"),
    "Roboto-Medium": require("../assets/fonts/Roboto-Medium.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaView style={styles.SafeAreaViewStyle} onLayout={onLayoutRootView} >

      <Stack.Screen options={{ headerShown: false }} />
      <ScrollView showsHorizontalScrollIndicator={false}>
          <View style={{ flex: 1, padding: SIZES.medium }} >

          <Search/>
          <MyJobs/>
          <PopularJobs/> 

          </View>         

      </ScrollView>


    </SafeAreaView>
  );
};

export default index;

const styles = StyleSheet.create({
  SafeAreaViewStyle:{
    flex:1,
    backgroundColor:"#eee",
  }
});
