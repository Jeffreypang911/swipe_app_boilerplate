import React from 'react';
import { createStackNavigator } from 'react-navigation';
import TabNavigator from './TabNavigator.js';
import { createAppContainer } from 'react-navigation';

const RootStackNavigator = createStackNavigator(
  {
    Main: {
      screen: TabNavigator,
    },
  }
);

const AppContainer = createAppContainer(RootStackNavigator);

export default class RootNavigator extends React.Component {
  render() {
    return <AppContainer/>;
  }
}