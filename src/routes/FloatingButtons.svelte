<script>
	import FaBookOpen from 'svelte-icons/fa/FaBookOpen.svelte';
	import IoIosFlask from 'svelte-icons/io/IoIosFlask.svelte';
	import MdPeople from 'svelte-icons/md/MdPeople.svelte';
	import { fly } from 'svelte/transition';

	let animateNow = false;
	setTimeout(() => {
		animateNow = true;
	}, 1);
</script>

{#if animateNow}
	<div
		class="btn-group btn-group-vertical lg:btn-group-horizontal grid grid-cols-1 gap-3 md:grid-cols-1 lg:grid-cols-3 max-w-3xl px-3 my-10 lg:max-w-6xl mx-auto"
	>
		<a class="btn btn-secondary h-max border-none animate-none" in:fly={{ x: -200, y: 400, duration: 1000 }}>
			<div class="card card-side text-black">
				<figure class="basis-1/3 shrink-0 px-2"><FaBookOpen /></figure>
				<div class="card-body">
					<h2 class="card-title">All Courses</h2>
					<div class="card-actions">
						<a class="btn rounded-md btn-accent btn-sm">View more</a>
					</div>
				</div>
			</div>
		</a>
		<a class="btn btn-secondary h-max border-none animate-none" in:fly={{ y: 400, duration: 1500 }}>
			<div class="card card-side text-black">
				<figure class="basis-1/3 shrink-0 px-1"><IoIosFlask /></figure>
				<div class="card-body">
					<h2 class="card-title">Laboratories</h2>
					<div class="card-actions">
						<a class="btn rounded-md btn-accent btn-sm">View more</a>
					</div>
				</div>
			</div>
		</a>
		<a class="btn btn-secondary h-max border-none animate-none" in:fly={{ x: 200, y: 400, duration: 1750 }}>
			<div class="card card-side text-black">
				<figure class="basis-1/3 shrink-0"><MdPeople /></figure>
				<div class="card-body">
					<h2 class="card-title">Our Staff</h2>
					<div class="card-actions">
						<a class="btn rounded-md btn-accent btn-sm">View more</a>
					</div>
				</div>
			</div>
		</a>
	</div>
{/if}
