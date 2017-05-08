


//	vuex 提供了独立的构建工具函数 Vuex.mapState
//	mapState 工具函数会将 store 中的 state 映射到局部计算属性中
import { mapState } from 'vuex'

export default {
  computed: mapState({
    count: state => state.count,
    countAlias: 'count',
    // 想访问局部状态，就必须借助于一个普通函数，函数中使用 `this` 获取局部状态
    countPlusLocalState (state) {
      return state.count + this.localCount
    }
  })
}