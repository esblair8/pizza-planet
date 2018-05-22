<template>
	<div class="col-sm-12 col-md-12">
		<div class="row">
			<form class="col-md-12">
				<div>
					<p v-if="!currentUser">Please Login to Continue</p>
					<p v-else>Logged in as: <br>{{ currentUser }}</p>
				</div>
				<div class="form-group">
					<label for="email">Email</label>
					<input type="email" name="email" class="form-control" id="email" v-model="email">
				</div>
				<div class="form-group">
					<label for="password">Password</label>
					<input type="password" name="password" class="form-control" id="password" v-model="password">
				</div>
				<button type="button" class="btn btn-primary" @click="signIn">Sign In</button>
				<button type="button" class="btn btn-danger" @click.prevent="signOut">Sign Out</button>
			</form>
		</div>
	</div>
</template>

<script>
	import Firebase from 'firebase'
	import { store } from '../store/store.js'
	
	Firebase.auth().onAuthStateChanged(user => {
		if(user) {
			console.log('logging in')
			store.dispatch('setUser', user)
		} else {
			console.log('logging out')
			store.dispatch('setUser', {})
		}
	})
	
	export default {
		data() {
			return {
				email: '',
				password: ''
			};
		},
		methods: {
			signIn() {

				Firebase.auth()
					.signInWithEmailAndPassword(this.email, this.password)
					.catch(error => {
						if (error.code === "auth/wrong-password") {
							console.log("Wrong Password");
						} else {
							console.log(error.message);
						}
					});
			},
			signOut() {
				Firebase.auth()
					.signOut()
					.then(() => {
						console.log('Logged out');
					})
					.catch(error => {
						console.log(error.message);
					});
			}
		},
		computed: {
			currentUser() {
				return this.$store.getters.currentUser
			}
		}
	};
</script>

<style>
	form {
		margin: 20px 0;
	}
</style>
