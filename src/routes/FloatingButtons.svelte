<script>
	import FaBookOpen from 'svelte-icons/fa/FaBookOpen.svelte';
	import GoBeaker from 'svelte-icons/go/GoBeaker.svelte';
	import MdPeople from 'svelte-icons/md/MdPeople.svelte';
	import { fly, slide } from 'svelte/transition';

	let animateNow = false;
	setTimeout(() => {animateNow = true}, 1)
</script>

{#if animateNow}
	<div
		class="btn-group btn-group-vertical btn-group-horizontal grid grid-cols-1 gap-3 md:grid-cols-1 relative lg:grid-cols-3 lg:-top-64 max-w-3xl px-3 my-10 lg:my-0 lg:max-w-6xl mx-auto "
	>
		<button class="btn btn-secondary h-max border-none animate-none" in:fly={{ x: -200, y: 400, duration: 1000 }}>
			<div class="card card-side text-white">
				<figure class="w-24"><FaBookOpen /></figure>
				<div class="card-body">
					<h2 class="card-title">All Courses</h2>
					<div class="card-actions">
						<button class="btn rounded-md btn-accent btn-sm">View more</button>
					</div>
				</div>
			</div>
		</button>
		<button class="btn btn-secondary h-max border-none animate-none" in:fly={{y: 400, duration: 1500 }}>
			<div class="card card-side text-white">
				<figure class="w-24"><GoBeaker /></figure>
				<div class="card-body">
					<h2 class="card-title">Laboratories</h2>
					<div class="card-actions">
						<button class="btn rounded-md btn-accent btn-sm">View more</button>
					</div>
				</div>
			</div>
		</button>
		<button class="btn btn-secondary h-max border-none animate-none" in:fly={{ x: 200, y: 400, duration: 1750 }}>
			<div class="card card-side text-white">
				<figure class="w-24"><MdPeople /></figure>
				<div class="card-body">
					<h2 class="card-title">Our Staff</h2>
					<div class="card-actions">
						<button class="btn rounded-md btn-accent btn-sm">View more</button>
					</div>
				</div>
			</div>
		</button>
	</div>
{/if}
