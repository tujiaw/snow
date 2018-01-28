import React from 'react'
import { StyleSheet, View, Text, TextInput, Button } from 'react-native'
import { requestHanzi2pinyin } from '../../showapi'

export default class Hanzi2pinyinPage extends React.Component {
  state = {
    text: '',
    resultText: ''
  }

  componentDidMount() {

  }

  onStart = () => {
    if (this.state.text.length === 0) {
      return
    }
    if (this.requestText && this.requestText === this.state.text) {
      return
    }

    this.requestText = this.state.text
    requestHanzi2pinyin(this.state.text).then((json) => {
      const body = json.showapi_res_body
      if (body && body.info) {
        this.setState({ resultText: body.info })
      }
    }).catch((err) => {
      console.log(err)
      this.requestText = ''
    })
  }

  render() {
    return (
      <View style={styles.root}>
        <Text style={styles.title}>请输入要转换的汉字：</Text>
        <TextInput
          multiline={true}
          numberOfLines={2}
          onChangeText={(text) => this.setState({text})}
          value={this.state.text}
        />
        <View style={styles.buttonLayout}>
          <Button title="开始转换" onPress={this.onStart} />
        </View>
        <Text style={styles.title}>转换后的结果：</Text>
        <TextInput
          multiline={true}
          numberOfLines={2}
          value={this.state.resultText}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  root: {
    margin: 10,
  },
  buttonLayout: {
    maxWidth: 100,
    alignSelf: 'center',
    margin: 10,
  },
  title: {
    color: 'gray',
    fontSize: 13,
  }
})