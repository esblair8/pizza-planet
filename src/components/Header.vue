<template>
	<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
		<a class="navbar-brand" href="/">PIZZA PLANET</a>
		<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
			<span class="navbar-toggler-icon"></span>
		</button>
		<div class="collapse navbar-collapse" id="navbarNav">
			<ul class="navbar-nav">
				<router-link :to="homeLink" tag="li"><a class="nav-link">Home</a></router-link>
				<router-link :to="menuLink" tag="li"><a class="nav-link">Menu</a></router-link>
				<router-link to="/about" tag="li"><a class="nav-link">About Us</a></router-link>
			</ul>
		</div>
	</nav>
</template>

<script>
	export default {
		data() {
			return {
				homeLink: '/',
				menuLink: '/menu'
			}
		}
	}
</script>

<style>
	.navbar-brand {
		font-size: 1.5em;
	}
</style>

