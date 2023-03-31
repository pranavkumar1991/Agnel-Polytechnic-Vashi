<script>
	import FaBookOpen from 'svelte-icons/fa/FaBookOpen.svelte';
	import FaFlask from 'svelte-icons/fa/FaFlask.svelte';
	import MdPeople from 'svelte-icons/md/MdPeople.svelte';
</script>

<div
	class="btn-group btn-group-vertical lg:btn-group-horizontal gap-4 lg:gap-20 lg:mx-96 lg:relative lg:-top-48 w-full"
>
	<button class="btn h-max hover:bg-primary border-none">
		<div class="card card-side shadow-xl">
			<figure class="w-24 p-1"><FaBookOpen /></figure>
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
			<figure class="w-28 p-5"><FaFlask /></figure>
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
				<h2 class="card-title">Our Faculty</h2>
				<div class="card-actions">
					<button class="btn btn-accent btn-sm">View more</button>
				</div>
			</div>
		</div>
	</button>
</div>
