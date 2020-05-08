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

import HeaderBar                    from '../../components/Header/Header.js';
import AsyncStorage                 from '@react-native-community/async-storage';
import ValidationComponent          from "react-native-form-validator";
import { Button, Input, Icon }             from "react-native-elements";
import axios                        from "axios";
import { KeyboardAwareScrollView }  from 'react-native-keyboard-aware-scroll-view';
import { colors, sizes }            from '../../config/styles.js';
import styles 				              from './styles.js';
import FontAwesomeIcon              from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons       from 'react-native-vector-icons/MaterialCommunityIcons';
import { connect }                  from 'react-redux';
import commonStyle                  from '../../config/commonStyle.js';
import { withNavigation }           from 'react-navigation';
import { Dropdown }                 from 'react-native-material-dropdown';
const window = Dimensions.get('window');

class HomePage extends ValidationComponent {
  constructor(props) {
    super(props);
    this.state = {
      data : [{value: 'Banana',},
              {value: 'Mango',},
              {value: 'Pear',}],
      PropertyData: [
      {
      name: 'SOHO 2 at The Central',
      address: '12 Eu Tong Sen St,Singapore 059819',  
      action: 'Rent',
      about: '-This unit is currently tenanted @10,000 SFD till Sept',
      price:'3,280,000'
      },{
      name: 'Suntec City Tower',
      address: '7 Temasek Vlvd, Singapore 038987',  
      action: 'Sale',
      about: 'High floor with panoramic view, Approximately 3.',
      price:'37,050'
      }]
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
          <HeaderBar navigation={navigation} showBackBtn={false} headerName={"Dashboard"}/>  
          <ScrollView contentContainerStyle={[styles.scroller]} scrollsToTop={false}>
              <View style={styles.container}>
                <Image
                  style={styles.Logo}
                  source={require('../../images/logo1.jpg')}
                />
                <Text style={styles.ProjectName}> Singapore Commercial Sapce </Text>
              </View>
              <View style={styles.page}>
                <View style={styles.listingBlock}> 
                    <View style={styles.sepBlock}>
                      <Image
                        style={styles.sepBlockImg}
                        source={require('../../images/logo5.png')}
                      />
                      <Text>24</Text>
                      <Text style={styles.listLable}>Listing for Sale</Text>
                    </View>
                    <View style={{flex:0.07, backgroundColor:'#fff'}}/>
                    <View style={styles.sepBlock}>
                      <Image
                        style={styles.sepBlockImg}
                        source={require('../../images/logo5.png')}
                      />
                      <Text>736</Text>
                      <Text style={styles.listLable}>Listing for Rent</Text>
                    </View>
                </View>
                <View style={styles.searchView}>
                  <Text style={styles.searchLabel}> Property Search </Text>
                  <Text style={{padding:10}}>Location</Text>
                  <Dropdown
                    placeholder='--Search District Wise--'
                    data={this.state.data}
                    selectedItemColor = 'red'
                    itemColor ='#000' 
                    baseColor = '#808080'
                    lineWidth={0}
                    inputContainerStyle={{ backgroundColor: '#fff', paddingLeft:1}}
                    containerStyle={{borderBottomColor: 'lightgrey',marginLeft:10,marginRight:10}}
                    dropdownOffset={{top:5}}
                    // onChangeText={(loaction) => this.handleChange(location)}
                  />
                  {/* ----- */}
                  <Text style={{padding:10}}>Property Type</Text>
                  <Dropdown
                    placeholder='--Property Type--'
                    data={this.state.data}
                    selectedItemColor = 'red'
                    itemColor ='#000' 
                    baseColor = '#808080'
                    lineWidth={0}
                    inputContainerStyle={{ backgroundColor: '#fff', paddingLeft:1}}
                    containerStyle={{borderBottomColor: 'lightgrey',marginLeft:10,marginRight:10}}
                    dropdownOffset={{top:5}}
                    // onChangeText={(loaction) => this.handleChange(location)}
                  />
                  {/* --------- */}
                  <Text style={{padding:10,}}>Transaction type</Text>
                  <Dropdown
                    placeholder='--Transaction type--'
                    data={this.state.data}
                    selectedItemColor = 'red'
                    itemColor ='#000' 
                    baseColor = '#808080'
                    lineWidth={0}
                    inputContainerStyle={{ backgroundColor: '#fff', paddingLeft:1}}
                    containerStyle={{borderBottomColor: 'lightgrey',marginLeft:10,marginRight:10}}
                    dropdownOffset={{top:5}}
                    // onChangeText={(loaction) => this.handleChange(location)}
                  />
                  {/* --- */}
                  <Text style={{padding:10,}}>Furnishing type</Text>
                  <Dropdown
                    placeholder='--Furnishing type--'
                    data={this.state.data}
                    selectedItemColor = 'red'
                    itemColor ='#000' 
                    baseColor = '#808080'
                    lineWidth={0}
                    inputContainerStyle={{ backgroundColor: '#fff', paddingLeft:1}}
                    containerStyle={{borderBottomColor: 'lightgrey',marginLeft:10,marginRight:10}}
                    dropdownOffset={{top:5}}
                    // onChangeText={(loaction) => this.handleChange(location)}
                  />
                  {/* ---- */}
                  <Text style={{padding:10,}}>Tenure Option</Text>
                  <Dropdown
                    placeholder='--Tenure Option--'
                    data={this.state.data}
                    selectedItemColor = 'red'
                    itemColor ='#000' 
                    baseColor = '#808080'
                    lineWidth={0}
                    inputContainerStyle={{ backgroundColor: '#fff', paddingLeft:1}}
                    containerStyle={{borderBottomColor: 'lightgrey',marginLeft:10,marginRight:10}}
                    dropdownOffset={{top:5}}
                    // onChangeText={(loaction) => this.handleChange(location)}
                  />
                  {/* ----- PSF--------*/}
                  <Text style={{padding:10,}}>PSF (per sqft.)</Text>
                  {/* ------ */}
                  <Text style={{padding:10,}}>Area</Text>
                  {/* --------- */}
                  <Text style={{padding:10,}}>Budget</Text>
                  {/* --search btn */}
                  <Button
                    title="Search"
                    titleStyle={styles.buttonText}
                    buttonStyle={styles.button}
                    containerStyle={styles.buttonContainer}
                  />
                </View>
                
                <View style={styles.propertyView}>
                {this.state.PropertyData.length > 0 ?
                    <View style={{marginTop: 20, marginBottom:30}}>
                      <Text style={styles.propertyLabel}>FEATURED</Text>
                      <Text style={styles.propertyLabel}>PROPERTIES </Text>
                    </View>
                  :
                  null}
                  {this.state.PropertyData.length > 0 ?
                    this.state.PropertyData.map((item,i)=>{
                      return(
                        <View style={styles.propBlock}> 
                          <Image
                            style={styles.propertyImg}
                            source={require('../../images/property4.jpg')}
                          />
                          <Text style={styles.propertyName}>{item.name}</Text>
                          <Text style={styles.propertyAdd}>{item.address}</Text>
                          <View
                            style={{
                              borderBottomColor: '#D3D3D3',
                              borderBottomWidth: 1,
                              marginBottom: 10,
                            }}
                          />
                          <View style={{marginLeft: 20, marginRight:20,}}>
                            <View style={styles.propAction}>
                              < Text adjustsFontSizeToFit style={{padding:5}}>{item.action}</Text>
                            </View>
                            <Text style={styles.propAboutLabel}>ABOUT THE UNIT-</Text>
                            <Text style={{color:'#666'}}>{item.about}</Text>
                            <Text style={{color:'#000', fontSize: 16, fontWeight:'bold', paddingTop:5, paddingBottom:5}}>Read more</Text>
                            <View style={{flexDirection:'row', marginBottom:20}}>
                              <Text style={{color:'#000', fontFamily: 'Calibri', fontSize: 16, fontWeight:'bold'}}>S$ </Text>
                            <Text style={{color:'#000', fontSize:16}}>{item.price}</Text>
                            </View>
                          </View>
                        </View>
                      );
                    })
                  :
                  null
                  }
                  {/* block end */}
                </View>
                {/* -------------------------------------- */}
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


 export default connect(mapStateToProps,mapDispatchToProps)(withNavigation(HomePage));