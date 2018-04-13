// 时间格式化
export function parseTime (time, cFormat) {
  if (arguments.length === 0) {
    return null
  }
  const format = cFormat || '{y}-{m}-{d} {h}:{i}:{s}'
  let date
  if (typeof time === 'object') {
    date = time
  } else {
    if (('' + time).length === 10) {
      time = parseInt(time) * 1000
      date = new Date(time)
    }else if (('' + time).length === 13) {
      date = new Date(time)
    }
  }
  const formatObj = {
    y: date.getFullYear(),
    m: date.getMonth() + 1,
    d: date.getDate(),
    h: date.getHours(),
    i: date.getMinutes(),
    s: date.getSeconds(),
    a: date.getDay()
  }
  const timeStr = format.replace(/{(y|m|d|h|i|s|a)+}/g, (result, key) => {
    let value = formatObj[key]
    if (key === 'a') {
      return ['一', '二', '三', '四', '五', '六', '日'][value]
    }
    if (result.length > 0 && value < 10) {
      value = '0' + value
    }
    return value || 0
  })
  return timeStr
}
export function formatTime (time, option) {
  time = time * 1000
  const d = new Date(time)
  const now = new Date().now()
  const diff = (now - d) / 1000
  if (diff < 30) {
    return '刚刚'
  }else if (diff < 3600) {
    return Math.ceil(diff / 60) + '分钟前'
  }else if (diff < 3600 * 24) {
    return Math.ceil(diff / 3600) + '小时前'
  }else if (diff < 3600 * 24 * 2) {
    return '1天前'
  }else {
    if (option) {
      return parseTime(time, option)
    } else {
      return d.getMonth() + 1 + 'yue' + d.getDay() + '日' + d.getHours() + '时' + d.getMinutes() + '分' + d.getSeconds() + '秒'
    }
  }
}
