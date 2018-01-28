import React from 'react';
import { StyleSheet, Text, View, Image, BackHandler, ToastAndroid } from 'react-native';
import { TabNavigator } from 'react-navigation'
import Icon from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import LifeTab from './containers/LifeTab'
import DevTab from './containers/DevTab'
import EntTab from './containers/EntTab'

const MainTab = TabNavigator(
  {
    Life: {
      screen: LifeTab,
      navigationOptions: {
        tabBarLabel: '生活',
        tabBarIcon: ({ tintColor, focused }) => (
          <Ionicons
            name={focused ? 'ios-home' : 'ios-home-outline'}
            size={26}
            style={{ color: tintColor }}
          />
        )
      }
    },
    Dev: {
      screen: DevTab,
      navigationOptions: {
        tabBarLabel: '开发',
        tabBarIcon: ({ tintColor, focused }) => (
          <Ionicons
            name={focused ? 'ios-bug' : 'ios-bug-outline'}
            size={26}
            style={{ color: tintColor }}
          />
        )
      }
    },
    Ent: {
      screen: EntTab,
      navigationOptions: {
        tabBarLabel: '娱乐',
        tabBarIcon: ({ tintColor, focused }) => (
          <Ionicons
            name={focused ? 'ios-film' : 'ios-film-outline'}
            size={26}
            style={{ color: tintColor }}
          />
        )
      }
    }
  }, {
    tabBarPosition: 'bottom',
    tabBarOptions: {
      showIcon: true,
    }
  }
)

class App extends React.Component {
  constructor(props) {
    super(props)
    this.backPressTime = []
  }

  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.handleBack);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.handleBack);
  }

  
  handleBack = () => {
    // 两秒钟之内按两次Back键退出程序
    this.backPressTime.push(new Date());
    const count = this.backPressTime.length;
    if (count >= 2) {
      const ms = this.backPressTime[count - 1] - this.backPressTime[count - 2];
      this.backPressTime = [];
      if (ms <= 2000) {
        return false;
      }
    }
    ToastAndroid.show('再按一次退出程序', ToastAndroid.SHORT);
    return true;
  }

  render() {
    return (
      <MainTab />
    )
  }
}

const styles = StyleSheet.create({
  icon: { 
    width: 26, 
    height: 26 
  }
})

export default App