import React from 'react'
import { StyleSheet, View, Text, Button, Alert, FlatList, Image, TouchableOpacity } from 'react-native'
import SearchBar from '../../components/SearchBar'
import { requestWechatArticle } from '../../showapi'

class EntTab extends React.Component {
  state = {
    text: '',
    page: 1,
    list: []
  }

  componentDidMount() {
    
  }

  _onSearchButtonPress = () => {

  }

  _onCancelButtonPress = () => {

  }

  _onBlur = () => {
    if (this.state.text.length === 0 || this.isLoading) {
      return
    }

    this.isLoading = true
    requestWechatArticle(this.state.text, this.state.page).then((json) => {
      const body = json.showapi_res_body
      if (body && body.newslist) {
        let oldlist = this.state.list
        body.newslist.map((item, index) => {
          item.id = oldlist.length + index
          return item
        })
        this.setState({ list: oldlist.concat(body.newslist) })
        this.isLoading = false
      }
    })
  }

  _onItemPress = () => {
  }

  _renderItem = ({item}) => (
    <TouchableOpacity
      onPress={this._onItemPress.bind(this, item.url)} >
      <View style={styles.item}>
        <Image source={{uri: item.picUrl}} style={styles.img} />
        <View style={styles.itemLeft}>
          <Text style={styles.itemTitle}>{item.title}</Text>
          <View style={styles.itemDesc}>
            <Text style={styles.smallText}>{item.description}</Text>
            <Text style={styles.smallText}>{item.ctime}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  )

  render() {
    const { navigation } = this.props
    return (
      <View style={styles.root}>
      <SearchBar
          onSearchChange={(text) => this.setState({ text: text })}
          height={50}
          onFocus={() => console.log('On Focus')}
          onBlur={ this._onBlur }
          placeholder={'Search...'}
          autoCorrect={false}
          padding={5}
          returnKeyType={'search'}
          inputStyle={styles.searchBar}
        />
        <FlatList 
          data={this.state.list}
          renderItem={this._renderItem}
          keyExtractor={(item) => item.id}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    marginTop: 22,
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchBar: {
    height: 50,
    width: '100%'
  },
  item: {
    flex: 1,
    flexDirection: 'row',
    marginHorizontal: 6,
    marginVertical: 3
  },
  itemLeft: {
    flexDirection: 'column',
    margin: 10
  },
  itemTitle: {
    fontSize: 14,
  },
  itemDesc: {
    flexDirection: 'row',
    marginTop: 6,
  },
  img: {
    width: 50,
    height: 50,
    borderRadius: 5,
  },
  smallText: {
    color: 'gray',
    fontSize: 11,
    marginRight: 10
  }
})

export default EntTab