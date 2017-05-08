

/** {getter} 
 * 有时候我们需要从 store 中的 state 中派生出一些状态，例如对列表进行过滤并计数：
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
  	doneTodosCount () {
    	return this.$store.state.todos.filter(todo => todo.done).length
  	}
  }
}

