import { showapi } from './showapi'

module.exports.requestHistoryToday = () => {
  return showapi('https://route.showapi.com/119-42')
}

module.exports.requestLaifuJoke = () => {
  return showapi('http://route.showapi.com/107-32')
}

module.exports.requestRealTimeNewsSearchBank = () => {
  return showapi('http://route.showapi.com/738-1', {n: 50})
}

module.exports.requestCurrentWeekNewsSearchBank = () => {
  return showapi('http://route.showapi.com/738-2', {n: 50})
}

module.exports.requestHanzi2pinyin = (text) => {
  return showapi('http://route.showapi.com/1486-1', {keywords: text})
}

module.exports.requestAlexaRank = (name) => {
  return showapi('http://route.showapi.com/24-1', {name: name})
}

module.exports.requestWechatArticle = (word, page) => {
  return showapi('http://route.showapi.com/181-1', {word: word, page: page, num: 20})
}