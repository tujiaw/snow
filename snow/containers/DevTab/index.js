import React from 'react'
import { View, Text, Button, Alert } from 'react-native'
import { StackNavigator } from 'react-navigation'
import ApiList from '../../components/ApiList'
import Hanzi2pinyinPage from '../Pages/Hanzi2pinyinPage'

const devList = [{
  key: 1, title: '汉字转拼音', page: 'Hanzi2pinyinPage', 
  img: 'https://www.showapi.com/images/apiLogo/20171023/55b5f66f6e368b8f70567509_5f57e668e2214b55ad07d84ebb13baa8.png',
  desc: '实现汉字转拼音，没有音标。'
}]

const DevPage = (props) => <ApiList list={devList} {...props} />

const DevTab = StackNavigator({
  DevPage: {
    screen: DevPage,
    navigationOptions: {
      headerTitle: '开发工具'
    }
  },
  Hanzi2pinyinPage: {
    screen: Hanzi2pinyinPage,
    navigationOptions: {
      headerTitle: '汉字转拼音'
    }
  }
})

export default DevTab