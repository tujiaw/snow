import React from 'react'
import { StyleSheet, View, Text, FlatList } from 'react-native'
import { requestLaifuJoke } from '../../showapi'

export default class LaifuJokePage extends React.Component {
  state = {
    list: []
  }

  componentDidMount() {
    requestLaifuJoke().then((json) => {
      const body = json.showapi_res_body
      if (body && body.list) {
        body.list.map((item, index) => {
          item.key = index
          item.content = item.content.replace(/<br\/><br\/>/g, '\r\n')
          return item
        })
        this.setState({list: body.list})
      }
    })
  }

  onRenderItem = ({item}) => (
    <View style={styles.item} key={item.key}>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.content}>{item.content}</Text>
    </View>
  )

  render() {
    return (
      <View>
        <FlatList 
          data={this.state.list}
          renderItem={this.onRenderItem}
          ListHeaderComponent={() => <Text style={styles.header}>每天更新20条笑话</Text>}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  item: {
    flex: 1,
    flexDirection: 'column',
    margin: 5,
  },
  title: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  content: {
    fontSize: 12,
    color: '#333',
  },
  header: {
    textAlign: 'center',
    color: 'red',
    marginTop: 5,
  }
})