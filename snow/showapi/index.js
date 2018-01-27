import { showapi } from './showapi'

const APPID = '17262'
module.exports.requestHistoryToday = () => {
  return showapi('https://route.showapi.com/119-42', APPID)
}

module.exports.requestLaifuJoke = () => {
  return showapi('http://route.showapi.com/107-32', APPID)
}