import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TabNavigator } from 'react-navigation'
import Ionicons from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/FontAwesome';
import LifeTab from './containers/LifeTab'
import BookTab from './containers/BookTab'
import MovieTab from './containers/MovieTab'

const App = TabNavigator(
  {
    Life: {
      screen: LifeTab,
      navigationOptions: {
        tabBarLabel: '生活',
      }
    },
    Book: {
      screen: BookTab,
      navigationOptions: {
        tabBarLabel: 'Book',
      }
    },
    Movie: {
      screen: MovieTab,
      navigationOptions: {
        tabBarLabel: 'Movie'
      }
    }
  }, {
    tabBarPosition: 'bottom'
  }
)

export default App