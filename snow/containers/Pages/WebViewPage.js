import React from 'react'
import { WebView } from 'react-native'

export default class WebViewPage extends React.Component {
    render() {
        const { navigation } = this.props
        console.log(navigation.state.params)
        return (
            <WebView 
                source={{uri: navigation.state.params.url}}
            />
        )
    }
}
