import { createStackNavigator } from 'react-navigation-stack';

import ObjectivesScreen from '~screens/objectives-screen';
import HomeScreen from '~screens/home-screen';

const StackNavigatorConfig = {
  initialRouteName: 'Objectives',
  header: null,
  headerMode: 'none',
  tabBarOptions: {
    showIcon: false,
  },
};

const RouteConfigs = {
  Objectives: {
    screen: ObjectivesScreen,
  },
  Home: {
    screen: HomeScreen,
  },
};

const ObjectivesNavigator = createStackNavigator(
  RouteConfigs,
  StackNavigatorConfig
);

export default ObjectivesNavigator;
