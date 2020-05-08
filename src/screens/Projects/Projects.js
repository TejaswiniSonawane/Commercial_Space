import React from 'react';
import {
  ScrollView,
  Text,
  View,
  BackHandler,
  Dimensions,
  TouchableOpacity,
  ImageBackground,
  Image,
  Platform,
} from 'react-native';
import { Header } from 'react-native-elements';
import HeaderBar                    from '../../components/Header/Header.js';
import AsyncStorage                 from '@react-native-community/async-storage';
import ValidationComponent          from "react-native-form-validator";
import { Button, Input, Icon }             from "react-native-elements";
import axios                        from "axios";
import { KeyboardAwareScrollView }  from 'react-native-keyboard-aware-scroll-view';
import { colors, sizes }            from '../../config/styles.js';
import styles 				        from './styles.js';
import FontAwesomeIcon              from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons       from 'react-native-vector-icons/MaterialCommunityIcons';
import { connect }                  from 'react-redux';
import commonStyle                  from '../../config/commonStyle.js';
import { withNavigation }           from 'react-navigation';
const window = Dimensions.get('window');

class Projects extends ValidationComponent {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount = async () => {
    try {
        const { navigation } = this.props;
    } catch (error) {
    // Error retrieving data
    }
  }  

 
  render() {
    const { navigate } = this.props.navigation;
    const { navigation } = this.props;

    return(
      <React.Fragment>
          <HeaderBar navigation={navigation} showBackBtn={false} headerName={"Projects"}/>  
          <ScrollView contentContainerStyle={[commonStyle.container]} scrollsToTop={false}>
              <View style={{flex:1,flexDirection:'column'}}>
                <Text style={{color:'#000', fontSize:20,margin:20}}> Projects Page</Text>
              </View>
          </ScrollView>
        </React.Fragment>
    );

  }
}

const mapStateToProps = (state)=>{
  return {

  }
  
};
const mapDispatchToProps = (dispatch)=>{
  return {
      
  }
};


 export default connect(mapStateToProps,mapDispatchToProps)(withNavigation(Projects));