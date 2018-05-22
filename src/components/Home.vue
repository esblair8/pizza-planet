<template>
	<div class="container">
	<div class="row">
		<div class="col-sm-12 text-center" id="home">
			<div class="background">
				<h1>Welcome to Pizza Planet</h1>
				<h2>Feeling Hungry?</h2>
				<button class="btn btn-success" @click="goToMenu">Lets order!</button>
			</div>
		</div>
	</div>
	</div>
</template>

<script>
export default {
  methods: {
	  goToMenu() {
		  this.$router.push('/menu')
	  }
  }
}
</script>

<style>
	#home {
		background: url("../../src/assets/pizza.jpg");
		background-size: cover;
		align-items: center;
		height: 800px;
		width: inherit;
	}
	
	h1, h2 {
		margin: 6%;
	}

	.background {
		background: #eee;
		opacity: 0.8;
		max-width: 60%;
		margin: 0 auto;
		padding: 20px;
	}
</style>

