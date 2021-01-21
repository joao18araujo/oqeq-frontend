import { createBottomTabNavigator } from 'react-navigation-tabs';

import ObjectivesNavigator from '~navigations/objectives-navigator';

const BottomTabNavigatorConfig = {
  initialRouteName: 'Objectives',
  header: null,
  headerMode: 'none',
};

const RouteConfigs = {
  Objectives: {
    screen: ObjectivesNavigator,
  },
};

const AppNavigator = createBottomTabNavigator(
  RouteConfigs,
  BottomTabNavigatorConfig
);

export default AppNavigator;
