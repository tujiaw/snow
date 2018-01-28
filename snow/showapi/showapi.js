const md5 = require('md5');
const moment = require('moment')

const APPID = '17262'
const SECRET = '21b693f98bd64e71a9bdbb5f7c76659c'

export function showapi(mainUrl, appParams) {
    var url = new String(mainUrl + '?');
    var params = {
        showapi_appid: APPID,
        //showapi_timestamp: moment().format('YYYYMMDDHHmmss'),
    };

    appParams = appParams || {};
    for (var appParam in appParams) {
        params[appParam] = appParams[appParam];
    }

    var keys = [];
    for (var param in params) {
        keys.push(param);
    }

    keys.sort();
    var sortResult = '';
    keys.map(function(value) {
        sortResult = sortResult + value + params[value];
    });
    console.log(sortResult)
    var sign = md5(sortResult + SECRET);
    keys.map(function(value) {
        url = url + value + '=' + params[value] + '&';
    });
    url = url + 'showapi_sign=' + sign;
    console.log('url:' + url)

    return new Promise((resolve, reject) => {
      fetch(url)
      .then((response) => response.json())
      .then((json) => {
        resolve(json);
      })
      .catch((err) => {
        console.log(err);
        reject(err)
      })
    })
}

