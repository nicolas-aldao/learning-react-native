import React from "react";
import Constants from 'expo-constants';
import { View } from "react-native";
import Navbar from "./Navbar";
import RepositoryList from "./RepositoryList";

const Main = () => {
  return (
    <View style={{marginTop: Constants.statusBarHeight, flex: 1}}>
      <Navbar/>
      <RepositoryList/>
    </View>
  );
};

export default Main;
