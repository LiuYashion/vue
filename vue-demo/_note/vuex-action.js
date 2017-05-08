

/** {actions} 
 * Action 类似于 mutation，不同在于：
 * 	Action 提交的是 mutation，而不是直接变更状态。
 * 	Action 可以包含任意异步操作。
 */
const store = new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    increment (state) {
      state.count++
    }
  },
  actions: {
    increment (context) {
      context.commit('increment')
    }
  }
})


/** {把commit先从参数中解构出来,再传入,方便快捷} 
 * */
const store = new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    increment (state) {
      state.count++
    }
  },
  actions: {
  	increment ({ commit }) {
      commit('increment')
  	}
  }
})

/** {我们可以在 action 内部执行异步操作}
 */
const store = new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    increment (state) {
      state.count++
    }
  },
  actions: {
    incrementAsync ({ commit }) {
      setTimeout(() => {
        commit('increment')
      }, 1000)
    }
  }
})

/** {action的触发} */
store.dispatch('incrementAsync', {
  amount: 10
})

// 以对象形式分发
store.dispatch({
  type: 'incrementAsync',
  amount: 10
})

this.$store.dispatch('xxx')

/**
 * { actions:下面的方法传入的参数为context }
 * { mutations: 下面的方法传入的参数为 state }
 */

/** {example-购物车} */

const store = new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    increment (state) {
      state.count++
    }
  },
  actions: {
    checkout ({ commit, state }, products) {
      // 把当前购物车的物品备份起来
      const savedCartItems = [...state.cart.added]
      // 发出结账请求，然后乐观地清空购物车
      commit(types.CHECKOUT_REQUEST)
      // 购物 API 接受一个成功回调和一个失败回调
      shop.buyProducts(
        products,
        // 成功操作
        () => commit(types.CHECKOUT_SUCCESS),
        // 失败操作
        () => commit(types.CHECKOUT_FAILURE, savedCartItems)
      )
    } 
  }
})


/** {在组件中分发action} */
import { mapActions } from 'vuex'

const Counter = {
	
  template: `<div>{{ count }}</div>`,
  computed: {
    count () {
      return this.$store.state.count
    }
  },
  methods: {
    ...mapActions([
      'increment' // 映射 this.increment() 为 this.$store.dispatch('increment')
    ]),
    ...mapActions({
      add: 'increment' // 映射 this.add() 为 this.$store.dispatch('increment')
    })
  }
}


// 假设 getData() 和 getOtherData() 返回的是 Promise
actions: {
  async actionA ({ commit }) {
    commit('gotData', await getData())
  },
  async actionB ({ dispatch, commit }) {
    await dispatch('actionA') // 等待 actionA 完成
    commit('gotOtherData', await getOtherData())
  }
}









