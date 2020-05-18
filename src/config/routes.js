import {createAppContainer} from '@react-navigation/native';
import {createSwitchNavigator} from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {createStackNavigator} from 'react-navigation-stack';
// import AuthLoadingScreen          from '../components/AuthLoading/AuthLoading.js';
import {SideMenu} from '../components/SideMenu/SideMenu.js';
import {HomePage} from '../screens/HomePage/HomePage.js';
import {HeaderBar} from '../components/Header/Header.js';
import React from 'react';
import {News} from '../screens/News/News.js';
import {NewsDetails} from '../screens/News/NewsDetails.js';
import {Requirement} from '../screens/Requirement/Requirement.js';
import {ContactUs} from '../screens/ContactUs/ContactUs.js';
const HomeStack = createStackNavigator(
  {
    HomePage: {
      screen: HomePage,
      navigationOptions: {
        title: 'Dashboard',
        // headerShown: false,
      },
    },
    // PropertiesScreen: {
    //   screen: PropertiesScreen,
    //   navigationOptions: {
    //     headerShown: false,
    //   },
    // },
    RequirementScreen: {
      screen: Requirement,
      navigationOptions: {
        title: 'Dashboard',
        // headerShown: false,
      },
    },
    NewsScreen: {
      screen: News,
      navigationOptions: {
        title: 'News',
        // headerShown: false,
      },
    },

    NewsDetailsScreen: {
      screen: NewsDetails,
      navigationOptions: {
        title: 'Dashboard',
        // headerShown: false,
      },
    },
    // ProjectsScreen: {
    //   screen: ProjectsScreen,
    //   navigationOptions: {
    //     headerShown: false,
    //   },
    // },
    ContactUsScreen: {
      screen: ContactUs,
      navigationOptions: {
        title: 'Dashboard',
        // headerShown: false,
      },
    },
  },
  {
    defaultNavigationOptions: {
      header: navigation => <HeaderBar {...navigation} />,
    },
  },
);

const MainStack = createDrawerNavigator(
  {
    Home: {
      screen: HomeStack,
    },
  },
  {
    drawerLockMode: 'locked-closed',
    contentComponent: SideMenu,
    drawerPosition: 'left',
  },
);

// export default HomeStack;
export default createAppContainer(
  createSwitchNavigator(
    {
      // AuthLoading: AuthLoadingScreen,
      App: MainStack,
    },
    {
      unmountInactiveRoutes: true,
      initialRouteName: 'App',
    },
  ),
);
