import { showapi } from './showapi'

module.exports.requestHistoryToday = () => {
  return showapi('https://route.showapi.com/119-42', 17262)
}
