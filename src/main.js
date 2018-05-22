import Vue from 'vue'
import VueRouter from 'vue-router'
import { routes } from './routes'
import App from './App.vue'
import { store } from './store/store'
import Accounting from 'accounting-js'

Accounting.settings = {
	currency: {
		symbol : "£",   
		format: "%s%v", // controls output: %s = symbol, %v = value/number (can be object: see below)
		decimal : ".",  // decimal point separator
		thousand: ",",  // thousands separator
		precision : 2   // decimal places
	},
	number: {
		precision : 0,  // default precision on numbers is 0
		thousand: ",",
		decimal : "."
	}
}

Vue.use(VueRouter)

Vue.filter('currency', val => {
	return Accounting.formatMoney(val)
})

const router = new VueRouter({
	mode: 'history',
	//===where to scroll to when moving back and forward===
	// scrollBehavior(to, from, savedPosition) {
	// 	if(savedPosition) {
	// 		return savedPosition
	// 	} else {
	// 		return { x: 0, y: 0}
	// 	}
	// },
	scrollBehavior(to, from, savedPosition) {
		if(to.hash) {
			return { selector: to.hash }
		} else {
			return { x: 0, y: 0}
		}
	},
	routes
})

//===GLOBAL GUARDS===
// router.beforeEach((to, from, next) => {
// 	alert('before each')
// 	next()
// })
// router.afterEach((to, from) => {
// 	alert('after each')
// })

new Vue({
	el: '#app',
	router,
	store,
	render: h => h(App)
})
