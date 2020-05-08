import React, { Component }   from "react";
import {View,Text,StatusBar}  from "react-native";
import  HomeStack             from "./src/config/routes.js";
import  AuthStack             from "./src/config/routes.js";
import { createAppContainer } from 'react-navigation';
import axios                  from 'axios';
import AsyncStorage           from '@react-native-community/async-storage';

const HomeStackContainer = createAppContainer(HomeStack);
const AuthStackContainer = createAppContainer(AuthStack);

axios.defaults.baseURL = 'http://autoservices.nsofttek.com/Web/Web';
console.log("axios.defaults.baseURL",axios.defaults.baseURL);


 
export default class App extends Component {
  componentDidMount(){
    StatusBar.setHidden(true);
  }

  render() {
    return( 
        <HomeStackContainer />
      );
  }
}

