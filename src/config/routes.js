import {createAppContainer} from '@react-navigation/native';
import {createSwitchNavigator} from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {createStackNavigator} from 'react-navigation-stack';
// import AuthLoadingScreen          from '../components/AuthLoading/AuthLoading.js';
import SideMenu from '../components/SideMenu/SideMenu.js';
import {HomePage} from '../screens/HomePage/HomePage.js';

const HomeStack = createStackNavigator({
  HomePage: {
    screen: HomePage,
    navigationOptions: {
      headerShown: false,
    },
  },
  // PropertiesScreen: {
  //   screen: PropertiesScreen,
  //   navigationOptions: {
  //     headerShown: false,
  //   },
  // },
  // RequirementScreen: {
  //   screen: RequirementScreen,
  //   navigationOptions: {
  //     headerShown: false,
  //   },
  // },
  // NewsScreen: {
  //   screen: NewsScreen,
  //   navigationOptions: {
  //     headerShown: false,
  //   },
  // },
  // ProjectsScreen: {
  //   screen: ProjectsScreen,
  //   navigationOptions: {
  //     headerShown: false,
  //   },
  // },
  // ContactUsScreen: {
  //   screen: ContactUsScreen,
  //   navigationOptions: {
  //     headerShown: false,
  //   },
  // },
});

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
