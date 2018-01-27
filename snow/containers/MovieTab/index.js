import React from 'react'
import { StyleSheet, View, Text, Button, Alert } from 'react-native'

class MovieTab extends React.Component {
  render() {
    const { navigation } = this.props
    return (
      <View style={styles.root}>
        <Text>movie tab</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})

export default MovieTab