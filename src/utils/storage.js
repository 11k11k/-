// 定义通用key名
const INFO_KEY = 'hm_shopping_info'
// 通过通用key名获取数据，解析成对象，没有获取到数据设置默认值defaultObj
export const getInfo = () => {
  const defaultObj = {
    token: '',
    userId: ''
  }
  const result = localStorage.getItem(INFO_KEY)
  return result ? JSON.parse(result) : defaultObj
}
export const setInfo = (obj) => {
  return localStorage.setItem(INFO_KEY, JSON.stringify(obj))
}
export const removeInfo = () => {
  localStorage.removeItem(INFO_KEY)
}
