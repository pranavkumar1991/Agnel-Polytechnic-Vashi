<script>
	import { fade } from "svelte/transition";
</script>

<div class="flex justify-center items-center mt-10" transition:fade>
	<div class="stats stats-vertical lg:stats-horizontal shadow border-4 border-secondary ring-8 ring-secondary">
		<div class="stat">
			<div class="stat-title">Visitors</div>
			<div class="stat-value">5,000</div>
		</div>

		<div class="stat">
			<div class="stat-title">Students</div>
			<div class="stat-value">360</div>
		</div>

		<div class="stat">
			<div class="stat-title">Faculty</div>
			<div class="stat-value">123</div>
		</div>
	</div>
</div>
