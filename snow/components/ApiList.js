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

  renderLifeItem = ({item}) => {
    return (
      <TouchableNativeFeedback 
        key={item.key}
        onPress={this.onItemPress.bind(this, item.page)}
        background={TouchableNativeFeedback.SelectableBackground()}
      >
        <View style={styles.lifeItem}>
          <Image source={{uri: item.img}} style={styles.lifeItemImage} />
          <View style={styles.lifeItemRight}>
            <Text style={styles.lifeItemTitle}>{item.title}</Text>
            <Text style={styles.lifeItemDesc}>{item.desc}</Text>
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
          renderItem={ this.renderLifeItem }
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  root: {
    marginTop: 10,
  },
  lifeItem: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 5,
    marginRight: 5,
  },
  lifeItemImage: {
    width: 80, 
    height: 80,
    borderRadius: 5,
  },
  lifeItemRight: {
    flex: 1,
    flexDirection: 'column',
    marginLeft: 10,
    marginRight: 10,
  },
  lifeItemTitle: {
    fontSize: 15,
    fontWeight: 'bold'
  },
  lifeItemDesc: {
    fontSize: 12,
    color: 'gray'
  }
})