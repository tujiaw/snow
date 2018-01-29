import React from 'react'
import { WebView } from 'react-native'

export default class WebViewPage extends React.Component {
    render() {
        const { navigation } = this.props
        return (
            <WebView 
                source={{uri: navigation.state.params.url}}
            />
        )
    }
}
