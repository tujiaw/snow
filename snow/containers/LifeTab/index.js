import React from 'react'
import { View, Text, Button, Alert } from 'react-native'
import { StackNavigator } from 'react-navigation'
import ApiList from '../../components/ApiList'
import HistoryTodayPage from '../Pages/HistoryTodayPage'
import LaifuJokePage from '../Pages/LaifuJokePage'
import NewsSearchRankPage from '../Pages/NewsSearchRankPage'
import WebViewPage from '../Pages/WebViewPage'

const lifeList = [{
  key: 1, title: '历史上的今天', page: 'HistoryTodayPage', 
  img: 'https://www.showapi.com/images/apiLogo/20170502/5423acc973f41c03173a186a_16c2b4e29da94f3d9735e543282e1c04.png',
  desc: '回顾历史的长河,历史是生活的一面镜子;历史上的每一天,都是喜忧参半,历史是不能忘记的。历史上的今天，看看都发生了什么重大事件。'
}, {
  key: 2, title: '来福岛笑话', page: 'LaifuJokePage', 
  img: 'https://www.showapi.com/images/apiLogo/20170502/5423acc973f41c03173a186a_0c511889c0c3493f89fe4bd6fe17c535.png',
  desc: '来福岛爆笑娱乐网创建于2000年，是国内较早兴起的中文幽默类网站，经过数年的努力，目前网站平均每天浏览量已达到上百万人。'
}, {
  key: 3, title: '新闻热搜榜', page: 'NewsSearchRankPage',
  img: 'https://www.showapi.com/images/apiLogo/20150828/55c20f696e363a0000b115a6_0a47f47621d345fcafc48d2811263e26.jpg',
  desc: '新闻热词，热搜排行榜，周新闻排行与实时新闻。'
}]

const LifePage = (props) => <ApiList list={lifeList} {...props} />

const LifeTab = StackNavigator({
  ApiList: {
    screen: LifePage,
    navigationOptions: {
      headerTitle: '生活信息',
    },
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