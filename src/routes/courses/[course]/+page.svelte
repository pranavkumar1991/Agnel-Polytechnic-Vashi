<script lang="ts">
	export let data;
	$: deptData = data.deptData;
</script>

<div class="flex flex-col gap-12">
	<section>
		<h3 class="text-center text-4xl font-bold max-w-7xl mx-auto">{deptData.name}</h3>
		<div class="card lg:card-side bg-base-100 shadow-xl">
			<div class="card card-compact w-96 bg-base-100 shadow-xl">
				<figure><img src={deptData.HOD.profilePicture} alt="HOD" /></figure>
				<div class="card-body">
					<h2 class="card-title">{deptData.HOD.name}</h2>
				</div>
			</div>
			<div class="card-body text-justify">
				<p>{deptData.about}</p>
			</div>
		</div>
	</section>
	<section class="flex justify-around items-center flex-wrap gap-6">
		<div class="grid lg:grid-cols-2 gap-x-8 gap-y-2 max-w-7xl">
			<h2 class="text-center text-4xl font-bold max-w-7xl mx-auto lg:col-span-2">Vision and Mission</h2>
			<div class="card shadow-xl text-black">
				<div class="card-body">
					<h2 class="card-title mx-auto text-4xl font-bold">Vision</h2>
					<p class="text-lg text-justify">
						{deptData.vision}
					</p>
				</div>
			</div>
			<div class="card shadow-xl text-black">
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
		<div class="stats shadow h-fit">
			<div class="stat">
				<div class="stat-title">Intake</div>
				<div class="stat-value font-bold">{deptData.intake} students</div>
			</div>
			<div class="stat">
				<div class="stat-title">Duration</div>
				<div class="stat-value font-bold">{deptData.duration} years</div>
			</div>
		</div>
	</section>
	<section class="flex flex-col gap-6">
		<h4 class="text-center text-4xl font-bold max-w-7xl mx-auto">Teaching Faculty</h4>
		<div class="flex flex-wrap gap-5 mx-auto justify-center mb-16">
			{#each deptData.teachingFaculty as profile}
				<div class="card card-compact w-96 bg-base-100 shadow-xl">
					<figure><img src={profile.profilePicture} alt={`${profile.name} picture`} /></figure>
					<div class="card-body">
						<h2 class="card-title">{profile.name}</h2>
					</div>
				</div>
			{/each}
		</div>
	</section>
	<section class="flex flex-col gap-6">
		<h4 class="text-center text-4xl font-bold max-w-7xl mx-auto">Non-Teaching Faculty</h4>
		<div class="flex flex-wrap gap-5 mx-auto justify-center">
			{#each deptData.nonTeachingFaculty as profile}
				<div class="card card-compact w-96 bg-base-100 shadow-xl">
					<figure><img src={profile.profilePicture} alt={`${profile.name} picture`} /></figure>
					<div class="card-body">
						<h2 class="card-title">{profile.name}</h2>
					</div>
				</div>
			{/each}
		</div>
	</section>
	<section class="flex flex-col gap-6">
		<h4 class="text-center text-4xl font-bold max-w-7xl mx-auto">Academic Toppers</h4>
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
	</section>
	<section class="flex flex-col gap-6">
		<h4 class="text-center text-4xl font-bold max-w-7xl mx-auto">Student Achievements</h4>
		<div class="flex flex-wrap gap-5 mx-auto justify-center">
			{#each deptData.studentAchievements as achievement}
				<div class="card card-compact w-96 bg-base-100 shadow-xl">
					<figure><img src={achievement.image} alt={`${achievement.name} picture`} /></figure>
					<div class="card-body">
						<h2 class="card-title">{achievement.name}</h2>
					</div>
				</div>
			{/each}
		</div>
	</section>
	<section class="flex flex-col gap-6">
		<h4 class="text-center text-4xl font-bold max-w-7xl mx-auto">Laboratories</h4>
		<div class="flex flex-wrap gap-5 mx-auto justify-center">
			{#each deptData.laboratories as lab}
				<div class="card card-compact w-96 bg-base-100 shadow-xl">
					<figure><img src={lab.image} alt={`${lab.name} picture`} /></figure>
					<div class="card-body">
						<h2 class="card-title">{lab.name}</h2>
					</div>
				</div>
			{/each}
		</div>
	</section>
	<section class="flex flex-col gap-6">
		<h4 class="text-center text-4xl font-bold max-w-7xl mx-auto">Projects</h4>
		<div class="flex flex-wrap gap-5 mx-auto justify-center">
			{#each deptData.projects as project}
				<div class="card card-compact w-96 bg-base-100 shadow-xl">
					<figure><img src={project.image} alt={`${project.name} picture`} /></figure>
					<div class="card-body">
						<h2 class="card-title">{project.name}</h2>
					</div>
				</div>
			{/each}
		</div>
	</section>
	<section class="flex flex-col gap-6">
		<h4 class="text-center text-4xl font-bold max-w-7xl mx-auto">Workshops</h4>
		<div class="flex flex-wrap gap-5 mx-auto justify-center">
			{#each deptData.workshops as item}
				<div class="card card-compact w-96 bg-base-100 shadow-xl">
					<figure><img src={item.image} alt={`${item.name} picture`} /></figure>
					<div class="card-body">
						<h2 class="card-title">{item.name}</h2>
					</div>
				</div>
			{/each}
		</div>
	</section>
	<section class="flex flex-col gap-6">
		<h4 class="text-center text-4xl font-bold max-w-7xl mx-auto">Industrial Visits</h4>
		<div class="flex flex-wrap gap-5 mx-auto justify-center">
			{#each deptData.industrialVisits as item}
				<div class="card card-compact w-96 bg-base-100 shadow-xl">
					<figure><img src={item.image} alt={`${item.name} picture`} /></figure>
					<div class="card-body">
						<h2 class="card-title">{item.name}</h2>
					</div>
				</div>
			{/each}
		</div>
	</section>
	<section class="flex flex-col gap-6">
		<h4 class="text-center text-4xl font-bold max-w-7xl mx-auto">Expert Lectures</h4>
		<div class="flex flex-wrap gap-5 mx-auto justify-center">
			{#each deptData.expertLectures as item}
				<div class="card card-compact w-96 bg-base-100 shadow-xl">
					<figure><img src={item.image} alt={`${item.name} picture`} /></figure>
					<div class="card-body">
						<h2 class="card-title">{item.name}</h2>
					</div>
				</div>
			{/each}
		</div>
	</section>
</div>
