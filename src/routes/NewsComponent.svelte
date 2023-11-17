<script lang="ts">
	import { newsArray } from '../components/news';
</script>

<div class="w-full max-w-7xl mx-auto mt-10 flex flex-col gap-2">
	<b class="divider text-4xl">News</b>
	<ul class="flex flex-wrap items-center justify-center gap-2 font-semibold rounded-md h-20 overflow-y-auto px-2">
		{#each newsArray as news}
			{#if news.link}
				<li class="badge badge-lg badge-outline truncate">
					<a target="_blank" class="text-blue-500 truncate" href={news.link}>{news.title}</a>
				</li>
			{:else}
				<li class="badge badge-lg badge-outline truncate">
					<p class="truncate">{news.title}</p>
				</li>
			{/if}
		{/each}
	</ul>
</div>
