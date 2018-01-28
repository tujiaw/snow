import React from 'react'
import { StyleSheet, View, Text, TextInput, Button, FlatList } from 'react-native'
import { requestAlexaRank } from '../../showapi'

export default class AlexaSearchPage extends React.Component {
  state = {
    text: '',
    resultList: []
  }

  _onPress = () => {
    if (this.state.text.length === 0) {
      return
    }
    if (this.requestText && this.requestText === this.state.text) {
      return
    }
    this.requestText = this.state.text
    requestAlexaRank(this.state.text).then((json) => {
      const body = json.showapi_res_body
      if (body) {
        const newResultList = this.state.resultList
        newResultList.push({
          id: newResultList.length,
          name: this.state.text,
          localRank: body.local_rank || '无',
          globalRank: body.global_rank || '无',
        })
        console.log(newResultList)
        this.setState({
          resultList: newResultList
        })
      }
    })
  }

  _renderItem = ({item}) => (
    <View style={styles.item}>
      <Text>{item.name + '  (国内:' + item.localRank + ', 世界:' + item.globalRank + ')'}</Text>
    </View>
  )

  render() {
    return (
      <View style={styles.root}>
        <Text>请输入网站域名：</Text>
        <TextInput 
          keyboardType='url'
          maxLength={100}
          multiline={true}
          numberOfLines={2}
          placeholder='如：baidu.com'
          onChangeText={(text) => this.setState({text})}
        />
        <View style={styles.buttonLayout}>
          <Button onPress={this._onPress} title='查询' />
        </View>
        <FlatList 
          data={this.state.resultList}
          renderItem={this._renderItem}
          keyExtractor={(item) => item.id}
          ListHeaderComponent={() => <Text style={styles.header}>Alexa排名:</Text>}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    margin: 15
  },
  header: {
    color: 'gray'
  },
  item: {
    flex: 1,
    flexDirection:'row',
  },
  buttonLayout: {
    width: 100,
    margin: 6,
    alignSelf: 'center'
  }
})