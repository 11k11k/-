import { getInfo, setInfo } from '@/utils/storage.js'
export default {
  namespaced: true,
  state () {
    return {
      // 从本地读取，没有但是设置了默认值
      userInfo: getInfo()
    }
  },
  mutations: {
    setUserInfo (state, obj) {
      // 将数据存进VueX
      state.userInfo = obj
      // 存进本地，setInfo封装了localStorage.setInfo(JSON.Stringify(key,obj))方法
      setInfo(obj)
    }
  }

}
