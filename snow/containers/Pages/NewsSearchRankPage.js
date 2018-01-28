import React from 'react'
import { StyleSheet, View, Text, FlatList, TouchableOpacity } from 'react-native'
import ScrollableTabView from 'react-native-scrollable-tab-view'
import { requestRealTimeNewsSearchBank, requestCurrentWeekNewsSearchBank } from '../../showapi'

class NewsList extends React.Component {
  onItemPress = (title) => {
    const url = 'http://m.baidu.com/s?word=' + title
    this.props.onLinkPress && this.props.onLinkPress(url)
  }

  keyExtractor = (item) => item.id

  onRenderItem = ({item}) => (
    <View>
      <TouchableOpacity onPress={() => this.onItemPress(item.title)}>
        <Text style={styles.itemTitle}>{item.id + '. ' + item.title}</Text>
      </TouchableOpacity>
    </View>
  )

  render() {
    return (
      <FlatList 
        data={this.props.list}
        renderItem={this.onRenderItem}
        keyExtractor={this.keyExtractor}
      />
    )
  }
}

export default class NewsSearchRankPage extends React.Component {
  state = {
    realtimeNewsList: [],
    currentWeekNewsList: []
  }

  _onScroll = (pos) => {
    if (pos === 0 && this.state.realtimeNewsList.length === 0) {
      requestRealTimeNewsSearchBank().then((json) => {
        const body = json.showapi_res_body
        if (body && body.list) {
          this.setState({realtimeNewsList: body.list})
        }
      })
    } else if (pos === 1 && this.state.currentWeekNewsList.length === 0) {
      requestCurrentWeekNewsSearchBank().then((json) => {
        const body = json.showapi_res_body
        if (body && body.list) {
          this.setState({currentWeekNewsList: body.list})
        }
      })
    }
  }

  _onItemPress = (url) => {
    console.log(url)
    const { navigation } = this.props
    navigation.navigate('WebViewPage', { url: url })
  }

  render() {
    return (
      <ScrollableTabView 
        onChangeTab={this._onChangeTab}
        onScroll={this._onScroll}
      >
        <NewsList 
          tabLabel="实时新闻热搜榜" 
          list={this.state.realtimeNewsList}
          onLinkPress={this._onItemPress}
        />
        <NewsList 
          tabLabel="本周新闻热搜榜"
          list={this.state.currentWeekNewsList} 
          onLinkPress={this._onItemPress}
        />
      </ScrollableTabView>
    )
  }
}

const styles = StyleSheet.create({
  itemTitle: {
    marginHorizontal: 10,
    marginVertical: 3,
    color: 'cornflowerblue',
  }
})