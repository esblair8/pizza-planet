<template>
	<div id="app">
		<div class="container">
			<pp-header></pp-header>
		</div>
		<div class="container">
			<router-view></router-view>
		</div>
		<div class="container">
			<div class="row">
				<div class="col-sm-12 col-md-4">
					<router-view name="ordering-guide"></router-view>
				</div>
				<div class="col-sm-12 col-md-4">
					<router-view name="delivery"></router-view>
				</div>
				<div class="col-sm-12 col-md-4">
					<router-view name="history"></router-view>
				</div>
			</div>
		</div>
		<div class="container">
			<pp-footer></pp-footer>
		</div>
	</div>
</template>

<script>
	import Header from './components/Header.vue'
	import Footer from './components/Footer.vue'
	import { dbMenuRef, dbOrdersRef } from './firebaseConfig'
	
	export default {
		components: {
			ppHeader: Header,
			ppFooter: Footer
		},
		created() {
			this.$store.dispatch('setMenuRef', dbMenuRef)
			this.$store.dispatch('setOrdersRef', dbOrdersRef)
		}
	}
</script>

<style>	
	#app {
		font-family: "Avenir", Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		color: #2c3350;
	}

	.container {
		max-width: 100%;
		padding-right: 0px;
		padding-left: 0px;
		margin-left: 0px;
		margin-right: 0px;
	}

	.card {
		background-color: #69ab64;
		margin: 20px 0;
		border-radius: 0;
	}

</style>
