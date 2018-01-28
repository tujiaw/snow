import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TabNavigator } from 'react-navigation'
import Ionicons from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/FontAwesome';
import LifeTab from './containers/LifeTab'
import DevTab from './containers/DevTab'
import EntTab from './containers/EntTab'

const App = TabNavigator(
  {
    Life: {
      screen: LifeTab,
      navigationOptions: {
        tabBarLabel: '生活',
      }
    },
    Dev: {
      screen: DevTab,
      navigationOptions: {
        tabBarLabel: '开发',
      }
    },
    Ent: {
      screen: EntTab,
      navigationOptions: {
        tabBarLabel: '娱乐'
      }
    }
  }, {
    tabBarPosition: 'bottom'
  }
)

export default App