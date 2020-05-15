import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {Header, Icon} from 'react-native-elements';
import {NavigationActions} from 'react-navigation';
import styles from './styles.js';
// import {useNavigation} from '../../hooks/'

export const HeaderBar = props => {
  const {openDrawer} = props.navigation;
  return (
    <Header
      placement="left"
      leftComponent={
        <View style={{flexDirection: 'row', cursor: 'pointer'}}>
          <TouchableOpacity style={{width: 40}} onPress={() => openDrawer()}>
            <Icon
              size={30}
              name="menu"
              type="material-community"
              color="#fff"
            />
          </TouchableOpacity>
        </View>
      }
      centerComponent={
        <TouchableOpacity
          onPress={
            () => {}
            //  this.navigateScreen('BookingTabView')
          }>
          <Text style={{alignSelf: 'center', fontSize: 24, color: '#fff'}}>
            {/* {this.props.headerName} */}
          </Text>
        </TouchableOpacity>
      }
      // rightComponent={
      //   // this.props.showBackBtn ? (
      //   <TouchableOpacity
      //     onPress={
      //       () => {}
      //       // this.props.navigation.dispatch(NavigationActions.back())
      //     }>
      //     <Icon size={28} name="arrow-left" type="feather" color="#fff" />
      //   </TouchableOpacity>
      //   // ) : null
      // }
      containerStyle={styles.container}
    />
  );
};
