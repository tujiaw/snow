import React from 'react'
import { View, Text, Button, Alert } from 'react-native'
import { StackNavigator } from 'react-navigation'
import LifeList from './LifeList'
import HistoryTodayPage from '../Pages/HistoryTodayPage'
import LaifuJokePage from '../Pages/LaifuJokePage'

const LifeTab = StackNavigator({
  LifeList: {
    screen: LifeList,
    navigationOptions: {
      headerTitle: '生活信息'
    }
  },
  HistoryTodayPage: {
    screen: HistoryTodayPage,
    navigationOptions: {
      headerTitle: '历史上的今天'
    }
  },
  LaifuJokePage: {
    screen: LaifuJokePage,
    navigationOptions: {
      headerTitle: '来福岛笑话'
    }
  }
})

export default LifeTab