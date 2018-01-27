import React from 'react'
import { StyleSheet, View, Text, Button, Alert } from 'react-native'

class BookTab extends React.Component {
  render() {
    const { navigation } = this.props
    return (
      <View style={styles.root}>
        <Button 
          title="go to joke" 
          onPress={() => navigation.navigate('Joke')}
        />
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

export default BookTab