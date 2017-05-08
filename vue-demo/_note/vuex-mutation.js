

/** {mutation:同步事物} 
 * 更改 Vuex 的 store 中的状态的唯一方法是提交 mutation
 */
const store = new Vuex.Store({
  state: {
    count: 1
  },
  mutations: {
    increment (state) {
      state.count++	// 变更状态
    }
  }
})

/** {} 
 * 外部调用mutation */
store.commit('increment', {
  amount: 10
})
store.commit({
  type: 'increment',
  amount: 10
})
// 任何由 "increment" 导致的状态变更都应该在此刻完成。

/** {在组件中提交 Mutations}
 * 你可以在组件中使用 this.$store.commit('xxx') 提交 mutation
 * 或者使用 mapMutations 辅助函数将组件中的 methods 映射为 store.commit 调用（需要在根节点注入 store）。
 */
import { mapMutations } from 'vuex'

export default {
  methods: {
    ...mapMutations([
      'increment' // 映射 this.increment() 为 this.$store.commit('increment')
    ]),
    ...mapMutations({
      add: 'increment' // 映射 this.add() 为 this.$store.commit('increment')
    })
  }
}