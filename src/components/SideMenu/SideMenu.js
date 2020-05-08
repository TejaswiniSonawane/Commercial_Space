import React from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  Alert,
  ImageBackground,
  // AsyncStorage,
  TouchableHighlight,
  Image,
  Platform,
  Dimensions
} from 'react-native';

import { 
	NavigationActions,
	StackActions, 
	withNavigationFocus 
} from 'react-navigation';

import { DrawerActions }    from 'react-navigation-drawer';
import { Icon } 			from 'react-native-elements';
import styles 				from './styles.js';
import {colors} 			from '../../config/styles.js';
import AsyncStorage         from '@react-native-community/async-storage';
import axios                from 'axios';
import { connect }                  from 'react-redux';

const window = Dimensions.get('window');

class SideMenu extends React.Component {
  constructor(props){
    super(props);
    this.state={
      profilePhoto        : "",
    };
  }	

  
  componentDidMount(){
    this.focusListener = this.props.navigation.addListener('didFocus', () => {
    	// this.getUserData();
    })
  }
  componentWillUnmount () {
    this.focusListener.remove()
  }

//   UNSAFE_componentWillReceiveProps(nextProps){
//     this.getUserData();
//   }

//   getUserData(){
  	 
//   }

//   logout=()=>{
//       AsyncStorage.removeItem('user_id');
//       AsyncStorage.removeItem('token');
//       this.props.navigation.closeDrawer();
//       this.props.navigation.navigate('Login');
//   };


  render(){
  	// this._retrieveData();
	  	return(
	      	<ScrollView contentContainerStyle={[styles.container]} scrollsToTop={false}>
		        <View style={styles.upperContainer}>
			        	<ImageBackground
			            	style={[styles.logoImage]}
			            	source={require('../../images/logo1.jpg') }
			            	imageStyle={{ borderRadius: 100 }}
			     		/>
		     		<Text style={styles.ProjectName}> Singapore Commercial Sapce </Text>	
		        </View>
		        <View style={styles.menuWrapper}>
		        	<TouchableHighlight underlayColor='#ddd' onPress={()=>this.props.navigation.navigate('HomePage')}>
			        	<View style={styles.menu}>
			        	<Text style={styles.menuText}>Home</Text>
			        	</View>
		        	</TouchableHighlight>
					<TouchableHighlight underlayColor='#ddd' onPress={()=>this.props.navigation.navigate('PropertiesScreen')}>
			        	<View style={styles.menu}>
			        	<Text style={styles.menuText}>Properties</Text>
			        	</View>
		        	</TouchableHighlight>
					<TouchableHighlight underlayColor='#ddd' onPress={()=>this.props.navigation.navigate('RequirementScreen')}>
			        	<View style={styles.menu}>
			        	<Text style={styles.menuText}>Customer Requirement</Text>
			        	</View>
		        	</TouchableHighlight>
					<TouchableHighlight underlayColor='#ddd' onPress={()=>this.props.navigation.navigate('NewsScreen')}>
			        	<View style={styles.menu}>
			        	<Text style={styles.menuText}>News</Text>
			        	</View>
		        	</TouchableHighlight>
					<TouchableHighlight underlayColor='#ddd' onPress={()=>this.props.navigation.navigate('ProjectsScreen')}>
			        	<View style={styles.menu}>
			        	<Text style={styles.menuText}>Projects</Text>
			        	</View>
		        	</TouchableHighlight>
		        	<TouchableHighlight underlayColor='#ddd' onPress={()=>this.props.navigation.navigate('ContactUsScreen')}>
			        	<View style={styles.menu}>
			        	<Text style={styles.menuText}>Contact Us</Text>
			        	</View>
		        	</TouchableHighlight>
		        </View>
	  		</ScrollView>
	  	);
	}

}
 const mapStateToProps = (state)=>{
  return {
    profilePhoto  : state.profilePhoto,
  }
};
export default connect(mapStateToProps)(SideMenu);
