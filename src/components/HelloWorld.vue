<script setup lang="ts">
	import { ref } from 'vue'
	
	const count = ref(0)

	function increment() {
		count.value = count.value + 1
	}

	function decrement() {	
		count.value = count.value - 1
	}

</script>

<template>
	<div class="card">
		<button 
			type="button" 
			class="btn btn-primary"
			data-test="incrementButton" 
			data-testid="incrementButton"
			@click="increment"
		>
			count is {{ count }}
		</button>
		<button 
			type="button" 
			class="btn btn-primary"
			data-test="decrementButton" 
			@click="decrement"
		>
			Decrement  
		</button>
	</div>
</template>

<style scoped>
	.read-the-docs {
		color: #888;
	}
</style>
