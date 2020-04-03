import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Home from '../screens/home';
import ReviewDetails from '../screens/reviewDetails';
import LoginScreen from './../screens/auth/LoginSceen';
import SignupScreen from './../screens/auth/SignupScreen';
import Loading from './../screens/auth/loading';
import Main from './../screens/auth/main';

import ForgetPasswordScreen from './../screens/auth/ForgetPasswordScreen';

const screens = {
  Loading: {
    screen: Loading,
    navigationOptions: {
      headerLeft: null,
      title: 'loading',
      headerStyle: {
        backgroundColor: 'coral'
      }
    }
  },

  Login: {
    screen: LoginScreen,
    navigationOptions: {
      headerLeft: null,
      title: 'Login',
      headerStyle: {
        backgroundColor: 'coral'
      }
    }
  },
  Signup: {
    screen: SignupScreen,
    navigationOptions: {
      headerLeft: null,
      title: 'Login',
      headerStyle: {
        backgroundColor: 'coral'
      }
    }
  },
  ForgetPassword: {
    screen: ForgetPasswordScreen,
    navigationOptions: {
      headerLeft: null,
      headerStyle: {
        backgroundColor: 'coral'
      }
    }
  },
  Home: {
    screen: Home,
    navigationOptions: {
      headerLeft: null,

      headerStyle: {
        backgroundColor: 'coral'
      }
    }
  },
  ReviewDetails: {
    screen: ReviewDetails,
    navigationOptions: {
      headerLeft: null,
      headerStyle: {
        backgroundColor: 'coral'
      }
    }
  },
  Main: {
    screen: Main,
    navigationOptions: {
      headerLeft: null,
      title: 'Todo',
      headerStyle: {
        backgroundColor: 'coral'
      }
    }
  }
};
const HomeStack = createStackNavigator(screens);
export default createAppContainer(HomeStack);
