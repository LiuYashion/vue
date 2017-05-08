1.	<div v-on:click="reload"></div>
	<div @click="reload"></div>
	
2.	<div slot="logo"></div>

3.	<router-link :to="'/city/' + guessCityid"></router-link>  

4.	const app = new Vue({
	  el: '#app',
	  store,
	  components: { Counter },
	  template: `
	    <div class="app">
	      <counter></counter>
	    </div>
	  `
	})
	//这样在根组件中注入store,子啊子组件中就能通过this.$store访问到store

































