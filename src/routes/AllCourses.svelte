<script>
	import { newsArray } from '../components/news';
</script>

<h3 class="text-center text-4xl font-bold my-12 divider max-w-7xl mx-auto">All Courses</h3>
<div class="grid gap-5 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 max-w-4xl xl:max-w-7xl mx-auto justify-items-center bg-primary">
	<a class="card w-96 bg-accent text-white shadow-xl" href="/courses/artificial_intelligence">
		<figure><img src="/dept_thumbnails/AN_logo.webp" alt="artificial intelligence" /></figure>
		<div class="card-body">
			<h2 class="card-title">Artificial Intelligence & Machine Learning (AN)</h2>
			<p>Intake - 60</p>
		</div>
	</a>
	<a class="card w-96 bg-accent text-white shadow-xl" href="/courses/automobile_engineering">
		<figure><img src="/dept_thumbnails/AE_logo.webp" alt="automobile engineering" /></figure>
		<div class="card-body">
			<h2 class="card-title">Automobile Engineering (AE)</h2>
			<p>Intake - 60</p>
		</div>
	</a>
	<a class="card w-96 bg-accent text-white shadow-xl" href="/courses/civil_engineering">
		<figure><img src="/dept_thumbnails/CE_logo.webp" alt="civil engineering" /></figure>
		<div class="card-body">
			<h2 class="card-title">Civil Engineering (CE)</h2>
			<p>Intake - 60</p>
		</div>
	</a>
	<a class="card w-96 bg-accent text-white shadow-xl" href="/courses/electronics_and_computer_engineering">
		<figure><img src="/dept_thumbnails/TE_logo.webp" alt="computer engineering" /></figure>
		<div class="card-body">
			<h2 class="card-title">Electronics & Computer Engineering (TE)</h2>
			<p>Intake - 60</p>
		</div>
	</a>
	<a class="card w-96 bg-accent text-white shadow-xl" href="/courses/mechanical_engineering">
		<figure><img src="/dept_thumbnails/ME_logo.webp" alt="mechanical engineering" /></figure>
		<div class="card-body">
			<h2 class="card-title">Mechanical Engineering (ME)</h2>
			<p>Intake - 120</p>
		</div>
	</a>
	<div class="card w-96 bg-accent text-white shadow-xl">
		<div class="card-body">
			<b class="divider text-4xl">News</b>
			<ul class="flex flex-wrap items-center justify-center gap-2 font-semibold rounded-md h-25 overflow-y-auto px-2">
				{#each newsArray as news}
					{#if news.link}
						<li class="badge badge-lg badge-primary truncate">
							<a target="_blank" class="text-blue-800 truncate" href={news.link}>{news.title}</a>
						</li>
					{:else}
						<li class="badge badge-lg badge-primary truncate">
							<p class="truncate">{news.title}</p>
						</li>
					{/if}
				{/each}
			</ul>
		</div>
	</div>
</div>
