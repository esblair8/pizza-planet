<template>
	<div>
		<h1>About Us</h1>
		<h6>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur perspiciatis, veniam nulla ipsa quam suscipit possimus nemo aliquid architecto totam tenetur illum sed corrupti assumenda harum sunt tempore mollitia distinctio.</h6>
		<p>Click on the links below for more info</p>
		<nav class="navbar navbar-expand-lg navbar-light bg-light">
			<ul class="navbar-nav">
				<router-link to="/history" tag="li"><a class="nav-link">History</a></router-link>
				<router-link to="/delivery" tag="li"><a class="nav-link">Delivery</a></router-link>
				<router-link to="/contact" tag="li"><a class="nav-link">Contact us</a></router-link>
				<router-link to="/ordering-guide" tag="li"><a class="nav-link">Ordering Guide</a></router-link>
			</ul>
		</nav>
		<router-view></router-view>
	</div>
</template>

<script>
	export default {};
</script>

<style>
	
</style>
