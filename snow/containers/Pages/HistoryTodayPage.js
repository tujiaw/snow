import React from 'react'
import { StyleSheet, View, Text, FlatList, Image } from 'react-native'
import { requestHistoryToday } from '../../showapi'

export default class HistoryTodayPage extends React.Component {
  state = {
    list: []
  }

  componentDidMount() {
    requestHistoryToday().then((json) => {
      const body = json.showapi_res_body
      if (body && body.list) {
        body.list.map((item, index) => {
          item.key = index
          return item
        })
        this.setState({ list: body.list })
      }
    }).catch((err) => {
      console.log(err)
    })
  }

  onRenderItem = ({ item }) => {
    const imgUrl = item.img || 'https://www.showapi.com/images/apiLogo/20170502/5423acc973f41c03173a186a_16c2b4e29da94f3d9735e543282e1c04.png'
    return (
      <View style={styles.item} key={item.key}>
        <Image style={styles.itemImage} source={{ uri: imgUrl }} />
        <View style={styles.itemRight}>
          <Text>{ item.title }</Text>
          <Text>{ item.year + '年' + item.month + '月' + item.day + '日'}</Text>
        </View>
      </View>
    )
  }

  render() {
    return (
      <View>
        <FlatList
          data={this.state.list}
          renderItem={this.onRenderItem}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  item: {
    flex: 1,
    flexDirection: 'row',
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 8,
    alignItems: 'center'
  },
  itemImage: {
    width: 50,
    height: 50,
    borderRadius: 5
  },
  itemRight: {
    flex: 1,
    paddingLeft: 10,
    flexDirection: 'column'
  }
})