// 校验数字
export function isNumber(rule, value, callback) {
  //console.log(value)
  if (isNaN(value)) {
    callback(new Error('只能输入数值'));
  }
  callback()
}

export function trimStr(str) {
  return str.replace(/(^\s*)|(\s*$)/g, "");
}

// 对象深拷贝
export function deepCopy(src, dest) {
  dest = dest || {}

  for (let item in src) {
    if ((typeof src[item] === 'object') && src[item] !== null) {
      dest[item] = src[item].constructor === Array ? [] : {}
      deepCopy(src[item], dest[item])
    } else {
      dest[item] = src[item]
    }
  }

  return dest
}

export function countTime(time) {
  //获取当前时间
  var date = new Date();
  var now = date.getTime();
  //设置截止时间
  var endDate = new Date(time);
  var end = endDate.getTime();
  //时间差
  var leftTime = end - now;
  //定义变量 d,h,m,s保存倒计时的时间
  var d, h, m, s;
  if (leftTime >= 0) {
    d = Math.floor(leftTime / 1000 / 60 / 60 / 24);
    h = Math.floor(leftTime / 1000 / 60 / 60 % 24);
    m = Math.floor(leftTime / 1000 / 60 % 60);
    s = Math.floor(leftTime / 1000 % 60);
    //递归每秒调用countTime方法，显示动态时间效果
    setTimeout(countTime, 1000);
    return d + "天" + h + "时" + m + "分"
  } else {
    return ''
  }

}

export function formatDate(timeStamp, type = 'Y-M-D H:I:S', auto = false) {
  let time = (timeStamp + '').length === 10 ? new Date(parseInt(timeStamp) * 1000) : new Date(parseInt(timeStamp));
  let _year = time.getFullYear();
  let _month = (time.getMonth() + 1) < 10 ? '0' + (time.getMonth() + 1) : (time.getMonth() + 1);
  let _date = time.getDate() < 10 ? '0' + time.getDate() : time.getDate();
  let _hours = time.getHours() < 10 ? '0' + time.getHours() : time.getHours();
  let _minutes = time.getMinutes() < 10 ? '0' + time.getMinutes() : time.getMinutes();
  let _secconds = time.getSeconds() < 10 ? '0' + time.getSeconds() : time.getSeconds();
  let formatTime = '';
  let distinctTime = new Date().getTime() - time.getTime();

  if (auto) {
    if (distinctTime <= (1 * 60 * 1000)) {
      // console.log('一分钟以内，以秒数计算');
      let _s = Math.floor((distinctTime / 1000) % 60);
      formatTime = _s + '秒前';
    } else if (distinctTime <= (1 * 3600 * 1000)) {
      // console.log('一小时以内,以分钟计算');
      let _m = Math.floor((distinctTime / (60 * 1000)) % 60);
      formatTime = _m + '分钟前';
    } else if (distinctTime <= (24 * 3600 * 1000)) {
      // console.log('一天以内，以小时计算');
      let _h = Math.floor((distinctTime / (60 * 60 * 1000)) % 24);
      formatTime = _h + '小时前';
    } else if (distinctTime <= (30 * 24 * 3600 * 1000)) {
      let _d = Math.floor((distinctTime / (24 * 60 * 60 * 1000)) % 30);
      formatTime = _d + '天前';
      // console.log('30天以内,以天数计算');
    } else {
      // 30天以外只显示年月日
      formatTime = _year + '-' + _month + '-' + _date;
    }
  } else {

    switch (type) {
      case 'Y-M-D H:I:S':
        formatTime = _year + '-' + _month + '-' + _date + ' ' + _hours + ':' + _minutes + ':' + _secconds;
        break;
      case 'Y-M-D H:I:S zh':
        formatTime = _year + '年' + _month + '月' + _date + '日  ' + _hours + ':' + _minutes + ':' + _secconds;
        break;
      case 'Y-M-D H:I':
        formatTime = _year + '-' + _month + '-' + _date + ' ' + _hours + ':' + _minutes;
        break;
      case 'Y-M-D H':
        formatTime = _year + '-' + _month + '-' + _date + ' ' + _hours;
        break;
      case 'Y-M-D':
        formatTime = _year + '-' + _month + '-' + _date;
        break;
      case 'Y-M-D zh':
        formatTime = _year + '年' + _month + '月' + _date + '日';
        break;
      case 'Y-M':
        formatTime = _year + '-' + _month;
        break;
      case 'Y':
        formatTime = _year;
        break;
      case 'M':
        formatTime = _month;
        break;
      case 'D':
        formatTime = _date;
        break;
      case 'H':
        formatTime = _hours;
        break;
      case 'I':
        formatTime = _minutes;
        break;
      case 'S':
        formatTime = _secconds;
        break;
      default:
        formatTime = _year + '-' + _month + '-' + _date + ' ' + _hours + ':' + _minutes + ':' + _secconds;
        break;
    }
  }
  // 返回格式化的日期字符串
  return formatTime;
}

function toType(obj) {
  return ({}).toString.call(obj).match(/\s([a-zA-Z]+)/)[1].toLowerCase()
}

export function filterNull(o) {
  for (var key in o) {
    if (o[key] === null || o[key] === '' || o[key] === undefined) {
      delete o[key]
    }
    if (toType(o[key]) === 'string') {
      o[key] = o[key].trim()
    } else if (toType(o[key]) === 'object') {
      o[key] = filterNull(o[key])
    } else if (toType(o[key]) === 'array') {
      o[key] = filterNull(o[key])
    }
  }
  return o
}

export function hexToRgba(hex, opacity) {
  let rgbaColor = ''
  const reg = /^#[\da-f]{6}$/i
  if (reg.test(hex)) {
    rgbaColor = `rgba(${parseInt('0x' + hex.slice(1, 3))},${parseInt('0x' + hex.slice(3, 5))},${parseInt('0x' + hex.slice(5, 7))},${opacity})`
  }
  return rgbaColor
}

export function hexToRgba2(hex) {
  let rgbaColor = ''
  const reg = /^#[\da-f]{6}$/i
  if (reg.test(hex)) {
    rgbaColor = `rgba(${parseInt('0x' + hex.slice(1, 3))},${parseInt('0x' + hex.slice(3, 5))},${parseInt('0x' + hex.slice(5, 7))},1)`
  }
  return rgbaColor
}

// Echarts根据也可宽度动态调整
export function FontChart(fontSize) {
  var whei = document.body.clientWidth
  return (whei / 22) * fontSize / 100
}

export function randomString(e) {
  e = e || 32;
  var t = "ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678",
    a = t.length,
    n = "";
  for (i = 0; i < e; i++) n += t.charAt(Math.floor(Math.random() * a));
  return n
}

export function GetRandomNum(Min, Max) {
  var Range = Max - Min;
  var Rand = Math.random();
  return (Min + Math.round(Rand * Range));
}

export function ArrayMax(array) {
  return Math.max.apply(Math, array)
}

export function ArrayMix(array) {
  return Math.min.apply(Math, array)
}

// 打开连接
export function openLink(url, target) {
  var a = document.createElement('a')
  a.setAttribute('href', url)
  a.setAttribute('target', target || '_blank')
  document.body.appendChild(a)
  a.click()
}
export function formatNum (value) {
  if (!value && value !== 0) return 0
  let str = value.toString()
  let reg = str.indexOf('.') > -1 ? /(\d)(?=(\d{3})+\.)/g : /(\d)(?=(?:\d{3})+$)/g
  return str.replace(reg, '$1,')
}
