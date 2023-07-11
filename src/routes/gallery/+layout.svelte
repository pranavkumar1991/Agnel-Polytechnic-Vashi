<script lang="ts">
	import { page } from '$app/stores';
	export let data;
</script>

<div class="join flex justify-center p-2 mx-auto w-full overflow-x-auto">
	{#each Object.keys(data.items) as directory}
		<a
			href="/gallery/{directory}"
			class="join-item btn w-fit {$page.url.pathname.endsWith(directory) ? 'bg-secondary' : 'bg-accent'} text-white normal-case hover:text-black"
			>{directory}</a
		>
	{/each}
</div>
<slot />
