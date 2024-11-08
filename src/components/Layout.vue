<template>
	<div>
		<NavBar></NavBar>
		<router-view
			class="content-container"
		/>
	</div>
</template>

<script setup>
	import NavBar from './NavBar.vue';
</script>

<style scoped>

.content-container {
	padding-top: 12vh;
	height: 100%;
	width: 100%;
}

</style>
