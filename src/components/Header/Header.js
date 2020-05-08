import React from "react";
import {
  Text,
  View,
  TouchableOpacity,
  Alert,
  Image
} from "react-native";
import { Header, Icon  }                     from 'react-native-elements';
import { NavigationActions, StackActions, }  from 'react-navigation'
import { DrawerActions }                     from 'react-navigation-drawer';
import styles                                from "./styles.js";
import { colors, sizes, projectName } from '../../config/styles.js';


export default class HeaderBar extends React.Component{

  constructor(props) {
    super(props);
    this.state={
    }
  }




  render() {
    return (
      <Header
        placement="left"
        leftComponent={
          <View style={{flexDirection:"row", cursor:'pointer'}}>
            <TouchableOpacity style={{width:40}} onPress={()=> this.props.navigation.toggleDrawer()}>
              <Icon size={30} name='menu' type='material-community' color='#fff' />
            </TouchableOpacity>
          </View> 
        }
        centerComponent={
          <TouchableOpacity onPress={()=>this.navigateScreen('BookingTabView')}>
              <Text style={{alignSelf:"center",fontSize:24,color:"#fff"}}>{this.props.headerName}</Text> 
          </TouchableOpacity>
        }

        
        rightComponent={
          this.props.showBackBtn
          ?
              <TouchableOpacity onPress={()=> this.props.navigation.dispatch(NavigationActions.back())}>
                <Icon size={28} name='arrow-left' type='feather' color='#fff' />
              </TouchableOpacity>
            :
          null
        }
        containerStyle={styles.container}
      />
    );
  }
}


