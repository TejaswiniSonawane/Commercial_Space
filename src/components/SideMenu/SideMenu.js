import React from 'react';
import {
  Dimensions,
  ImageBackground,
  ScrollView,
  Text,
  // AsyncStorage,
  TouchableHighlight,
  View,
} from 'react-native';
import styles from './styles.js';

const window = Dimensions.get('window');

export const SideMenu = props => {
  // this._retrieveData();
  const {navigation} = props;

  return (
    <ScrollView contentContainerStyle={[styles.container]} scrollsToTop={false}>
      <View style={styles.upperContainer}>
        <ImageBackground
          style={[styles.logoImage]}
          source={require('../../images/logo1.jpg')}
          imageStyle={{borderRadius: 100}}
        />
        <Text style={styles.ProjectName}> Singapore Commercial Sapce </Text>
      </View>
      <View style={styles.menuWrapper}>
        <TouchableHighlight
          underlayColor="#ddd"
          onPress={() => props.navigation.navigate('HomePage')}>
          <View style={styles.menu}>
            <Text style={styles.menuText}>Home</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight
          underlayColor="#ddd"
          onPress={() => props.navigation.navigate('PropertiesScreen')}>
          <View style={styles.menu}>
            <Text style={styles.menuText}>Properties</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight
          underlayColor="#ddd"
          onPress={() => props.navigation.navigate('RequirementScreen')}>
          <View style={styles.menu}>
            <Text style={styles.menuText}>Customer Requirement</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight
          underlayColor="#ddd"
          onPress={() => navigation.navigate('NewsScreen')}>
          <View style={styles.menu}>
            <Text style={styles.menuText}>News</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight
          underlayColor="#ddd"
          onPress={() => props.navigation.navigate('ProjectsScreen')}>
          <View style={styles.menu}>
            <Text style={styles.menuText}>Projects</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight
          underlayColor="#ddd"
          onPress={() => props.navigation.navigate('ContactUsScreen')}>
          <View style={styles.menu}>
            <Text style={styles.menuText}>Contact Us</Text>
          </View>
        </TouchableHighlight>
      </View>
    </ScrollView>
  );
};
