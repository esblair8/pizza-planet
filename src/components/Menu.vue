<template>
	<div class="row">
		<div class="col-sm-12 col-md-6">
			<table class="table table-hover">
				<thead class="thead-default">
					<tr>
						<th>Size</th>
						<th>Price</th>
						<th>Add to basket</th>
					</tr>
				</thead>
				<tbody v-for="(item, key) in getMenuItems" v-bind:key="key">
					<tr>
						<td><strong>{{ item.name }}</strong></td>
					</tr>
					<tr v-for="(option, key) in item.options" v-bind:key="key">
						<td>{{ option.size }}</td>
						<td>{{ option.price  | currency }}</td>
						<td><button class="btn btn-sm btn-outline-success" @click="addToBasket(item, option)" type="button">+</button></td>
					</tr>
				</tbody>
			</table>
		</div>
		<!-- SHOPPING BASKET -->
		<div class="col-sm-12 col-md-6">
			<div v-if="basket.length > 0">
				<table v-if="basket.length > 0" class="table">
					<thead class="thead-default">
						<tr>
							<th>Quantity</th>
							<th>Item</th>
							<th>Total</th>
						</tr>
					</thead>
					<tbody v-for="item in basket" :key="item['.key']">
						<tr>
							<td>
								<button class="btn btn-sm" type="button" @click="decreaseQuantity(item)">-</button>
								<span>{{ item.quantity }}</span>
								<button class="btn btn-sm" type="button" @click="increaseQuantity(item)">+</button>
							</td>
							<td>{{ item.name }} {{ item.size }}"</td>
							<td>{{ item.price * item.quantity | currency }}</td>
						</tr>
					</tbody>
				</table>
				<p>Order Total: {{ total | currency }}</p>
				<button class="btn btn-success btn-block" type="button" @click="addNewOrder">Place Order</button>
			</div>
			<div v-else>
				<p>{{ basketText }}</p>
			</div>
		</div>
	</div>
</template>

<script>
import { mapGetters } from 'vuex';
import { dbOrdersRef } from '../firebaseConfig';

	export default {
		data() {
			return {
				basket: [],
				basketText: "Your basket is empty"
	
			}
		},
		computed: {
			...mapGetters (['getMenuItems']),
			total() {
				let totalCost = 0;	
				for(let item in this.basket) {
					var individualItem = this.basket[item]
					totalCost += individualItem.quantity * individualItem.price
				}
				return totalCost
			}
		},
		methods: {
			addToBasket(item, option) {
				this.basket.push({
						name: item.name,
						price: option.price,
						size: option.size,
						quantity: 1,
					});
			},
			removeFromBasket(item) {
				this.basket.splice(this.basket.indexOf(item, 1));
			},
			decreaseQuantity(item) {
				item.quantity--;
	
				if (item.quantity === 0) {
					this.removeFromBasket(item);
				}
			},
			increaseQuantity(item) {
				item.quantity++;
			},
			addNewOrder() {
				let timestamp =  new Date(Date.now()).toLocaleString()
				dbOrdersRef.push({basket: this.basket, timestamp: timestamp})
				this.basket = []
				this.basketText = 'Thank you, your order has been placed :)'
			}
		}
	}
</script>