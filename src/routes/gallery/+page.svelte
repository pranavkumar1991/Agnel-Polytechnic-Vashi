<script lang="ts">
	import { page } from '$app/stores';
	export let data;

	let selectedDirectory = $page.params['section'] ? $page.params['section'] : 'Facilities';
</script>

<div class="join flex justify-center border border-black p-2 bg-accent mx-auto w-full max-w-7xl overflow-x-auto">
	{#each Object.keys(data.items) as directory}
		<input
			class="join-item btn w-fit bg-secondary text-white border-none"
			type="radio"
			name="options"
			value={directory}
			aria-label={directory}
			bind:group={selectedDirectory}
		/>
	{/each}
</div>

<ul class="flex flex-wrap mt-10 gap-0.5">
	{#each data.items[selectedDirectory] as imgName}
		<li style="height: 40vh;" class="grow">
			<img src="/gallery/{selectedDirectory}/{imgName}" alt={imgName} class="max-h-full min-w-full object-cover align-bottom" />
		</li>
	{/each}
	<li />
</ul>

<style>
	li:last-child {
		flex-grow: 10;
	}
</style>
