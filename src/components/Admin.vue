<template>
	<div class="container">
		<section v-if="currentUser">
			<div class="row">
				<div class="col-sm-12 col-md-6">
					<pp-new-pizza></pp-new-pizza>
				</div>
				<div class="col-sm-12 col-md-6">
					<h3>Menu: </h3>
					<table class="table table-hover">
						<thead class="thead-default">
							<tr>
								<th>Item</th>
								<th>Remove From Menu</th>
							</tr>
						</thead>
						<tbody v-for="item in getMenuItems" :key="item['.key']">
							<tr>
								<td>{{ item.name }}</td>
								<td><button class="btn btn-outline-danger btn-sm" @click="removeMenuItem(item['.key'])">X</button></td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
			<div class="row">
				<div class="col-sm-12 col-md-12">
					<h3>Current Orders: {{ getNumberOfOrders }}</h3>
					<table class="table table-hover" v-for="(order, index) in reverse(getOrders)" track-by="order['.key']" :key="order['.key']">
						<thead class="thead-default">
							<tr>
								<th>Item</th>
								<th>Size</th>
								<th>Quantity</th>
								<th>Price</th>
							</tr>
							<div class="order-number">
								<span><strong>Order Number:  </strong> {{ getNumberOfOrders - index }}</span>
								<span><strong>Order Date:  </strong> {{ order.timestamp }} </span>
								<button class="btn btn-outline-danger" @click="removeOrderItem(order['.key'])">Remove Order</button>
							</div>
						</thead>
						<tbody>
							<div class="order-number">
							</div>
							<tr v-for="(orderItems, key) in order['basket']" v-bind:key="key">
								<td>{{ orderItems.name }}</td>
								<td>{{ orderItems.size }}</td>
								<td>{{ orderItems.quantity }}</td>
								<td>{{ orderItems.price | currency }}</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</section>
		<!-- AUTH  -->
		<hr>
		<div class="row">
			<div class="col-sm-12 col-md-6">
				<pp-login></pp-login>
			</div>
		</div>
	</div>
</template>

<script>
	import NewPizza from './NewPizza.vue'
	import Login from './Login.vue'
	import { mapGetters } from 'vuex'
	import { dbMenuRef, dbOrdersRef } from '../firebaseConfig'

	export default {
		components: {
			ppNewPizza: NewPizza,
			ppLogin: Login
		},
		computed: {
			...mapGetters(['getNumberOfOrders', 'getMenuItems', 'getOrders', 'currentUser'])
		},
		methods: {
			removeMenuItem(key) {
				dbMenuRef.child(key).remove()
			},
			removeOrderItem(key){
				dbOrdersRef.child(key).remove()
			},
			reverse(arr){
				return arr.slice().reverse()
			}
		},
		beforeRouteLeave: (to, from, next) => {
			if (confirm("Have you remembered to log out?") == true) {
				next()
			} else {
				next(false)
			}
		}
	};
</script>

<style>
	.order-number {
		margin-left: 5%;
		padding-top: 1%;
		align-items: center;
		align-content: center;
	}
</style>
