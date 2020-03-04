class Utils {
  setStorage(storage: string, storageKey: string, value: any) {
    window[storage] && window[storage].setItem(storageKey, JSON.stringify(value));
  }

  getStorage(storage: string, key: string) {
    return window[storage].getItem(key) && JSON.parse(window[storage].getItem(key));
  }

  concatSearch(params: object) {
    let str = '?';
    for (let key in params) {
      str += `${key}=${params[key]}&`;
    }
    return str;
  }

  getQueryString(name: string) {
    const reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)');
    const href = window.location.href;
    const index = href.indexOf('?');
    const r = href.substr(index + 1).match(reg);
    if (r != null) return unescape(r[2]);
    return null;
  }

  parseQuery() {
    let str = window.location.search;
    let len = str.length;
    let search = str.substr(1, len - 2);
    let reg = /([^&=\s]+)[=\s]?([^&=\s]*)/g;
    let obj = {};
    while (reg.exec(search)) {
      let key = RegExp.$1;
      let value = RegExp.$2;
      if (obj.hasOwnProperty(key) && value !== '') {
        obj[key] = [obj[key], value];
        continue;
      }
      obj[key] = value;
    }
    return obj;
  }
}

export default new Utils();

export function formatDate(date: Date, fmt = 'yyyy-MM-dd hh:mm:ss') {
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
  }
  let o = {
    'M+': date.getMonth() + 1,
    'd+': date.getDate(),
    'h+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds()
  };
  for (let k in o) {
    if (new RegExp(`(${k})`).test(fmt)) {
      let str = o[k] + '';
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : padLeftZero(str));
    }
  }
  return fmt;
}

function padLeftZero(str: string) {
  return ('00' + str).substr(str.length);
}

export function unescapeHTML(str: string) {
  let html = '' + str;
  return html.replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&apos;/g, '\'');
}

export function isNumber(value: string | number) {
  return /[0-9]+/.test(value.toString());
}