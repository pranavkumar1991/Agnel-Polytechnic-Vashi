<script lang="ts">
	export let data;
	$: deptData = data.deptData;

	import { page } from '$app/stores';

	function removeExtension(filename: string) {
		var lastDotPosition = filename.lastIndexOf('.');
		if (lastDotPosition === -1) return filename;
		else return filename.substring(0, lastDotPosition);
	}
</script>

<div class="flex flex-col gap-12">
	<section>
		<h3 class="text-center text-4xl font-bold max-w-7xl mx-auto mb-4">{deptData.name}</h3>
		<div class="card lg:card-side shadow-xl bg-accent max-w-7xl mx-auto p-5">
			<div class="card card-compact w-96 bg-base-100 shadow-xl rounded-none">
				<figure><img src={deptData.HOD.profilePicture} alt="HOD" /></figure>
				<div class="card-body">
					<h2 class="card-title">{deptData.HOD.name}</h2>
				</div>
			</div>
			<div class="card-body text-justify text-white">
				<p>{deptData.about}</p>
			</div>
		</div>
	</section>
	<section class="flex justify-around items-center flex-wrap gap-6">
		<div class="grid lg:grid-cols-2 gap-x-8 gap-y-2 max-w-7xl">
			<h2 class="text-center text-4xl font-bold max-w-7xl mx-auto lg:col-span-2 mb-4">Vision and Mission</h2>
			<div class="card shadow-xl text-black border-2 border-secondary">
				<div class="card-body">
					<h2 class="card-title mx-auto text-4xl font-bold">Vision</h2>
					<p class="text-lg text-justify">
						{deptData.vision}
					</p>
				</div>
			</div>
			<div class="card shadow-xl text-black border-2 border-secondary">
				<div class="card-body">
					<h2 class="card-title mx-auto text-4xl font-bold">Mission</h2>
					<ul class="text-lg list-disc mx-auto pl-2">
						{#each deptData.mission as point}
							<li>{point}</li>
						{/each}
					</ul>
				</div>
			</div>
		</div>
		<div class="stats shadow h-fit border-2 border-accent">
			<div class="stat">
				<div class="stat-title text-black font-semibold underline">Intake</div>
				<div class="stat-value font-bold">{deptData.intake} students</div>
			</div>
			<div class="stat">
				<div class="stat-title text-black font-semibold underline">Duration</div>
				<div class="stat-value font-bold">{deptData.duration} years</div>
			</div>
		</div>
	</section>
	<section class="flex flex-col gap-6">
		<h4 class="text-center text-4xl font-bold max-w-7xl mx-auto">Teaching Faculty</h4>
		<div class="flex flex-wrap gap-5 mx-auto justify-center mb-16">
			{#each deptData.teachingFaculty as name}
				<div class="card card-compact w-64 bg-secondary text-black shadow-xl">
					<figure><img src="/staff/{name}.jpg" alt={`${name} picture`} /></figure>
					<div class="card-body justify-end">
						<h2 class="card-title">{name}</h2>
					</div>
				</div>
			{/each}
		</div>
	</section>
	<section class="flex flex-col gap-6">
		<h4 class="text-center text-4xl font-bold max-w-7xl mx-auto">Non-Teaching Faculty</h4>
		<div class="flex flex-wrap gap-5 mx-auto justify-center">
			{#each deptData.nonTeachingFaculty as name}
				<div class="card card-compact w-64 bg-accent text-white shadow-xl">
					<figure><img src="/staff/{name}.jpg" alt={`${name} picture`} /></figure>
					<div class="card-body justify-end">
						<h2 class="card-title">{name}</h2>
					</div>
				</div>
			{/each}
		</div>
	</section>
	<!-- TODO <section class="flex flex-col gap-6">
		<h4 class="text-center text-4xl font-bold max-w-7xl mx-auto">TODO: Academic Toppers</h4>
		<div class="flex flex-wrap gap-5 mx-auto justify-center">
			{#each deptData.academicToppers as topper}
				<div class="card card-compact w-96 bg-base-100 shadow-xl">
					<figure><img src={topper.profilePicture} alt={`${topper.name} picture`} /></figure>
					<div class="card-body">
						<h2 class="card-title">{topper.name}</h2>
						<p>{topper.percentage}%</p>
					</div>
				</div>
			{/each}
		</div>
	</section> -->
	{#each Object.keys(data.items) as directory}
		<section class="flex flex-col gap-6">
			<h4 class="text-center text-4xl font-bold max-w-7xl mx-auto">{directory}</h4>
			<div class="flex flex-wrap gap-5 mx-auto justify-center">
				{#each data.items[directory] as item}
					<div class="card card-compact w-96 border-secondary border shadow-xl">
						<figure>
							<img src="/courses/{$page.params.course}/{directory}/{item}" alt={`${item} picture`} />
						</figure>
						<div class="card-body justify-end">
							<h2 class="card-title">{removeExtension(item)}</h2>
						</div>
					</div>
				{/each}
			</div>
		</section>
	{/each}
</div>
