import React from 'react'
import { View, Text, Button, Alert } from 'react-native'
import { StackNavigator } from 'react-navigation'
import WechatArticlePage from '../Pages/WechatArticlePage'
import WebViewPage from '../Pages/WebViewPage'

const EntTab = StackNavigator({
  WechatArticlePage: {
    screen: WechatArticlePage,
    navigationOptions: {
      headerTitle: '微信文章精选',
    }
  },
  WebViewPage: {
    screen: WebViewPage,
    navigationOptions: {
      headerTitle: '返回'
    }
  },
}, {
  headerMode: 'float',
})

export default EntTab