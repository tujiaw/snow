import React from 'react'
import { StyleSheet, 
  View, 
  Text, 
  FlatList, 
  TouchableNativeFeedback, 
  Alert,
  Image
} from 'react-native'

export default class ApiList extends React.Component {
  onItemPress = (page) => {
    const { navigation } = this.props
    navigation.navigate(page)
  }

  renderApiItem = ({item}) => {
    return (
      <TouchableNativeFeedback 
        key={item.key}
        onPress={this.onItemPress.bind(this, item.page)}
        background={TouchableNativeFeedback.SelectableBackground()}
      >
        <View style={styles.apiItem}>
          <Image source={{uri: item.img}} style={styles.apiItemImage} />
          <View style={styles.apiItemRight}>
            <Text style={styles.apiItemTitle}>{item.title}</Text>
            <Text style={styles.apiItemDesc}>{item.desc}</Text>
          </View>
        </View>
      </TouchableNativeFeedback>
    )
  }

  render() {
      const {navigation } = this.props
      console.log(this.props)
    return (
      <View style={styles.root}>
        <FlatList 
          data={this.props.list}
          renderItem={ this.renderApiItem }
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  root: {
    marginTop: 10,
  },
  apiItem: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 5,
    marginRight: 5,
  },
  apiItemImage: {
    width: 80, 
    height: 80,
    borderRadius: 5,
  },
  apiItemRight: {
    flex: 1,
    flexDirection: 'column',
    marginLeft: 10,
    marginRight: 10,
  },
  apiItemTitle: {
    fontSize: 15,
    fontWeight: 'bold'
  },
  apiItemDesc: {
    fontSize: 12,
    color: 'gray'
  }
})