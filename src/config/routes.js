import { createSwitchNavigator }  from 'react-navigation';
import { createDrawerNavigator }  from 'react-navigation-drawer';
import { createStackNavigator }   from 'react-navigation-stack';
import { createAppContainer }     from '@react-navigation/native';
import HomePage                   from "../screens/HomePage/HomePage.js";
import PropertiesScreen           from "../screens/Properties/Properties.js";
import RequirementScreen          from "../screens/Requirement/Requirement.js";
import NewsScreen                 from "../screens/News/News.js";
import ProjectsScreen             from "../screens/Projects/Projects.js";
import ContactUsScreen            from "../screens/ContactUs/ContactUs.js";
// import AuthLoadingScreen          from '../components/AuthLoading/AuthLoading.js'; 
import SideMenu                   from "../components/SideMenu/SideMenu.js";

const HomeStack = createStackNavigator({
  HomePage: {
    screen: HomePage,
    navigationOptions: {
      headerShown: false
    }
  },
  PropertiesScreen: {
    screen: PropertiesScreen,
    navigationOptions: {
      headerShown: false
    }
  },
  RequirementScreen: {
    screen: RequirementScreen,
    navigationOptions: {
      headerShown: false
    }
  },
  NewsScreen: {
    screen: NewsScreen,
    navigationOptions: {
      headerShown: false
    }
  },
  ProjectsScreen: {
    screen: ProjectsScreen,
    navigationOptions: {
      headerShown: false
    }
  },
  ContactUsScreen: {
    screen: ContactUsScreen,
    navigationOptions: {
      headerShown: false
    }
  },
});


const AuthStack = createStackNavigator({
  HomePage: {
    screen: HomePage,
    navigationOptions: {
      headerShown: false
    }
  }
});

const drawer = createDrawerNavigator({
	Home : {
		screen: HomeStack
	}
},{
  drawerLockMode: 'locked-closed',
  contentComponent: SideMenu,
  drawerPosition: 'left'
});




// export default HomeStack;
export default createAppContainer(createSwitchNavigator(
  {
    // AuthLoading: AuthLoadingScreen,
    App: drawer,
    Auth: AuthStack,
  },
  {
    unmountInactiveRoutes: true,
    initialRouteName: 'App',
  }
));