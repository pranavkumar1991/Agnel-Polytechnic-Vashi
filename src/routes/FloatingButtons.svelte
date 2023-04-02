<script>
	import FaBookOpen from 'svelte-icons/fa/FaBookOpen.svelte';
	import GoBeaker from 'svelte-icons/go/GoBeaker.svelte';
	import MdPeople from 'svelte-icons/md/MdPeople.svelte';
</script>

<div
	class="btn-group btn-group-vertical btn-group-horizontal grid grid-cols-1 gap-3 md:grid-cols-1 relative lg:grid-cols-3 lg:-top-64 max-w-3xl px-3 my-10 lg:my-0 lg:max-w-6xl mx-auto "
>
	<button class="btn h-max hover:bg-primary border-none">
		<div class="card card-side shadow-xl">
			<figure class="w-24"><FaBookOpen /></figure>
			<div class="card-body">
				<h2 class="card-title">All Courses</h2>
				<div class="card-actions">
					<button class="btn btn-accent btn-sm">View more</button>
				</div>
			</div>
		</div>
	</button>
	<button class="btn h-max hover:bg-primary border-none">
		<div class="card card-side shadow-xl">
			<figure class="w-24"><GoBeaker /></figure>
			<div class="card-body">
				<h2 class="card-title">Laboratories</h2>
				<div class="card-actions">
					<button class="btn btn-accent btn-sm">View more</button>
				</div>
			</div>
		</div>
	</button>
	<button class="btn h-max hover:bg-primary border-none">
		<div class="card card-side shadow-xl">
			<figure class="w-24"><MdPeople /></figure>
			<div class="card-body">
				<h2 class="card-title">Our Staff</h2>
				<div class="card-actions">
					<button class="btn btn-accent btn-sm">View more</button>
				</div>
			</div>
		</div>
	</button>
</div>
