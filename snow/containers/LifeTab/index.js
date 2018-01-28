import React from 'react'
import { View, Text, Button, Alert } from 'react-native'
import { StackNavigator } from 'react-navigation'
import LifeList from './LifeList'
import HistoryTodayPage from '../Pages/HistoryTodayPage'
import LaifuJokePage from '../Pages/LaifuJokePage'
import NewsSearchRankPage from '../Pages/NewsSearchRankPage'
import WebViewPage from '../Pages/WebViewPage'

const LifeTab = StackNavigator({
  LifeList: {
    screen: LifeList,
    navigationOptions: {
      headerTitle: '生活信息'
    }
  },
  WebViewPage: {
    screen: WebViewPage,
    navigationOptions: {
      headerTitle: '返回'
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
  },
  NewsSearchRankPage: {
    screen: NewsSearchRankPage,
    navigationOptions: {
      headerTitle: '新闻热搜榜'
    }
  }
})

export default LifeTab