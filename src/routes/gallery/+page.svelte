<script lang="ts">
	export let data;

	let selectedDirectory = 'Facilities';
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

<div class="grid items-center grid-cols-2 gap-5 m-10">
	{#each data.items[selectedDirectory] as imgName}
		<img src="/gallery/{selectedDirectory}/{imgName}" alt={imgName} />
	{/each}
</div>
