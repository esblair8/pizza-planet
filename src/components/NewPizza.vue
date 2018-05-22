<template>
	<div>
		<form>
			<h3>Add New Pizza:</h3>
			<div class="form-group row">
				<label for="name" class="col-sm-3">Name</label>
				<div class="col-sm-9">
					<input type="text" name="name" class="form-control" v-model="newPizza.name">
				</div>
			</div>
			<div class="form-group row">
				<label for="description" class="col-sm-3">Description</label>
				<div class="col-sm-9">
					<textarea type="text" name="description" class="form-control" v-model="newPizza.description"></textarea>
				</div>
			</div>
			<p><strong>Option 1: </strong></p>
			<div class="form-group row">
				<label for="size" class="col-sm-3">Size (")</label>
				<div class="col-sm-9">
					<input type="text" name="size" class="form-control" v-model="newPizza.options[0].size">
				</div>
			</div>
			<div class="form-group row">
				<label for="price" class="col-sm-3">Price</label>
				<div class="col-sm-9">
					<input type="text" name="price" class="form-control" v-model="newPizza.options[0].price">
				</div>
			</div>
			<p><strong>Option 2: </strong></p>
			<div class="form-group row">
				<label for="size" class="col-sm-3">Size (")</label>
				<div class="col-sm-9">
					<input type="text" name="size" class="form-control" v-model="newPizza.options[1].size">
				</div>
			</div>
			<div class="form-group row">
				<label for="price" class="col-sm-3">Price</label>
				<div class="col-sm-9">
					<input type="text" name="price" class="form-control" v-model="newPizza.options[1].price">
				</div>
			</div>
			<div class="form-group row">
				<button type="button" class="btn btn-success btn-block" @click="addMenuItem">Add To Menu</button>
			</div>
		</form>
	</div>
</template>

<script>
	import {
		dbMenuRef
	} from '../firebaseConfig'
	
	export default {
		data() {
			return {
				newPizza: {
					name: "Margherita",
					description: "A delicious tomato based pizza topped with mozzarella",
					options: [{
							size: 9,
							price: 6.95
						},
						{
							size: 12,
							price: 10.95
						}
					]
				}
			}
		},
		methods: {
			addMenuItem() {
				dbMenuRef.push(this.newPizza)
			}
		}
	}
</script>

<style>
	
</style>
