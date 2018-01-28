import React from 'react'
import { StyleSheet, 
  View, 
  Text, 
  FlatList, 
  TouchableNativeFeedback, 
  Alert,
  Image
} from 'react-native'

export default class LifeList extends React.Component {
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
    return (
      <View>
        <FlatList 
          data={[{
              key: 1, title: '历史上的今天', page: 'HistoryTodayPage', 
              img: 'https://www.showapi.com/images/apiLogo/20170502/5423acc973f41c03173a186a_16c2b4e29da94f3d9735e543282e1c04.png',
              desc: '回顾历史的长河,历史是生活的一面镜子;历史上的每一天,都是喜忧参半,历史是不能忘记的。历史上的今天，看看都发生了什么重大事件。'
            }, {
              key: 2, title: '来福岛笑话', page: 'LaifuJokePage', 
              img: 'https://www.showapi.com/images/apiLogo/20170502/5423acc973f41c03173a186a_0c511889c0c3493f89fe4bd6fe17c535.png',
              desc: '来福岛爆笑娱乐网创建于2000年，是国内较早兴起的中文幽默类网站，经过数年的努力，目前网站平均每天浏览量已达到上百万人。接口每天更新20条，不会出现重复的情况。'
            }, {
              key: 3, title: '新闻热搜榜', page: 'NewsSearchRankPage',
              img: 'https://www.showapi.com/images/apiLogo/20150828/55c20f696e363a0000b115a6_0a47f47621d345fcafc48d2811263e26.jpg',
              desc: '新闻热词，热搜排行榜，周新闻排行与实时新闻。'
            }]}
          renderItem={ this.renderLifeItem }
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
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