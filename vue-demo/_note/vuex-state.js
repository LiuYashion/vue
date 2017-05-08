

/** {store} 
 * 在根组件中注入store,子啊子组件中就能通过this.$store访问到store 
 */
const app = new Vue({
  el: '#app',
  store,
  components: { Counter },
  template: `
    <div class="app">
      <counter></counter>
    </div>
  `
})
const Counter = {
  template: `<div>{{ count }}</div>`,
  computed: {
    count () {
      return this.$store.state.count
    }
  }
}

/** {mapState} 
 * 当一个组件需要获取多个状态时候，将这些状态都声明为计算属性会有些重复和冗余。
 * 为了解决这个问题，我们可以使用 mapState 辅助函数帮助我们生成计算属性 
 */
import { mapState } from 'vuex'
export default {
  	computed: mapState({
    	count: state => state.count,   
    	countAlias: 'count',// 传字符串参数 'count' 等同于 `state => state.count`
    	countPlusLocalState (state) {
      		return state.count + this.localCount// 为了能够使用 this获取局部状态，必须使用常规函数
    	}
  	})
}
//当映射的计算属性的名称与 state 的子节点名称相同时，我们也可以给 mapState 传一个字符串数组。
import { mapState } from 'vuex'
export default {
  	computed: mapState([
  		'count' //映射 this.count 为 store.state.count
	])
}

/** {对象展开符} 
 * 把mapState和局部计算属性混用
 */
import { mapState } from 'vuex'
export default {
  	computed: {
  		localComputed () { 
  		
  		},
  		...mapState({
    		
  		})
	}
}

/**
 * 使用 Vuex 并不意味着你需要将所有的状态放入 Vuex。
 * 虽然将所有的状态放到 Vuex 会使状态变化更显式和易调试，但也会使代码变得冗长和不直观。
 * 如果有些状态严格属于单个组件，最好还是作为组件的局部状态。
 * 你应该根据你的应用开发需要进行权衡和确定。
 */