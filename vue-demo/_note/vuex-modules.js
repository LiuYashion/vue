

/** {store} 
 * module帮助我们分割模块
 */
const moduleA = {
  state: { ... },
  mutations: { ... },
  actions: { ... },
  getters: { ... }
}

const moduleB = {
  state: { ... },
  mutations: { ... },
  actions: { ... }
}

const store = new Vuex.Store({
  modules: {
    a: moduleA,
    b: moduleB
  }
})

store.state.a // -> moduleA 的状态
store.state.b // -> moduleB 的状态


/** {模块的局部状态} 
 * 	{mutation:	state }
 * 	{action:	context:{ state, commit, rootState }
 * 	{getter:	state, getters, rootState }
 */


const moduleA = {
  state: { count: 0 },
  mutations: {
    increment (state) {
      // state 模块的局部状态
      state.count++
    }
  },

  getters: {
    doubleCount (state) {
      return state.count * 2
    }
  }
}