<script lang="ts">
	import '../app.postcss';
	import FaPhoneAlt from 'svelte-icons/fa/FaPhoneAlt.svelte';
	import IoMdMenu from 'svelte-icons/io/IoMdMenu.svelte';
	import Footer from './Footer.svelte';
	import { onMount } from 'svelte';

	let details1: HTMLDetailsElement;
	let details2: HTMLDetailsElement;
	function closeDetailsTag(num: number) {
		if (num === 1) {
			details1.open = false;
		} else if (num === 2) {
			details2.open = false;
		}
	}

	let menuElement: HTMLDetailsElement;
	onMount(() => {
		document.addEventListener('click', (event) => {
			const withinBoundaries = event.composedPath().includes(menuElement);

			if (!withinBoundaries) {
				menuElement.open = false;
			}
		});
	});
</script>

<nav class="navbar fixed bg-primary border-b-2 border-black shadow-lg z-50 left-0 right-0">
	<div class="navbar-start">
		<details class="dropdown" bind:this={menuElement}>
			<summary class="btn btn-sm 2xl:hidden btn-ghost"> <IoMdMenu /> </summary>
			<ul class="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52 border border-accent font-semibold">
				<li><a href="/">HOME</a></li>
				<li>
					<!-- svelte-ignore a11y-click-events-have-key-events -->
					<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
					<details
						class="dropdown"
						on:click={() => {
							closeDetailsTag(2);
						}}
						bind:this={details1}
					>
						<summary>ABOUT US</summary>
						<ul class="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-fit border border-accent">
							<li><a href="/about_us/vision_and_messages">Vision and messages</a></li>
							<li><a href="/about_us/staff_details">Staff details</a></li>
							<li><a href="/about_us/anti_ragging">Anti ragging</a></li>
							<li><a href="/about_us/ladies_grievance">Ladies grievance</a></li>
							<li><a href="/about_us/prevention_of_sexual_harassment">Prevention of sexual harassment</a></li>
							<li><a href="/about_us/students_mentoring">Students mentoring</a></li>
							<li><a href="/about_us/institution_innovation_council">Institution innovation council</a></li>
						</ul>
					</details>
				</li>
				<li>
					<!-- svelte-ignore a11y-click-events-have-key-events -->
					<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
					<details
						class="dropdown"
						on:click={() => {
							closeDetailsTag(1);
						}}
						bind:this={details2}
					>
						<summary>COURSES</summary>
						<ul class="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-fit border border-accent">
							<li><a href="/courses/artificial_intelligence">Artificial Intelligence</a></li>
							<li><a href="/courses/electronics_and_computer_engineering">Electronics & Computer Engineering</a></li>
							<li><a href="/courses/civil_engineering">Civil Engineering</a></li>
							<li><a href="/courses/automobile_engineering">Automobile Engineering</a></li>
							<li><a href="/courses/mechanical_engineering">Mechanical Engineering</a></li>
						</ul>
					</details>
				</li>
				<li><a href="/gallery/Facilities">GALLERY</a></li>
				<li><a href="/admissions">ADMISSIONS</a></li>
				<li><a href="/syllabus">SYLLABUS</a></li>
				<li><a href="/contact_us">CONTACT US</a></li>
			</ul>
		</details>
		<a class="btn btn-ghost normal-case text-xl gap-2" href="/">
			<img src="/apv_logo.png" alt="Logo" class="w-12" />
			<h1 class="text-left 2xl:hidden">APV</h1>
			<h1 class="text-left hidden 2xl:block">Agnel Polytechnic, Vashi</h1>
		</a>
	</div>
	<div class="navbar-center hidden 2xl:flex">
		<ul class="menu menu-horizontal px-1 font-semibold">
			<li><a href="/">HOME</a></li>
			<li class="dropdown dropdown-hover">
				<button tabindex="0">ABOUT US</button>
				<ul class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-auto border-accent border-2">
					<li>
						<a href="/about_us/vision_and_messages">Vision and messages</a>
						<a href="/about_us/staff_details">Staff details</a>
						<a href="/about_us/anti_ragging">Anti ragging</a>
						<a href="/about_us/ladies_grievance">Ladies grievance</a>
						<a href="/about_us/prevention_of_sexual_harassment">Prevention of sexual harassment</a>
						<a href="/about_us/students_mentoring">Students mentoring</a>
						<a href="/about_us/institution_innovation_council">Institution innovation council</a>
					</li>
				</ul>
			</li>
			<li class="dropdown dropdown-hover">
				<button tabindex="0">COURSES</button>
				<ul class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-auto border-accent border-2">
					<li>
						<a href="/courses/artificial_intelligence">Artificial Intelligence</a>
						<a href="/courses/electronics_and_computer_engineering">Electronics & Computer Engineering</a>
						<a href="/courses/civil_engineering">Civil Engineering</a>
						<a href="/courses/automobile_engineering">Automobile Engineering</a>
						<a href="/courses/mechanical_engineering">Mechanical Engineering</a>
					</li>
				</ul>
			</li>
			<li><a href="/gallery/Facilities">GALLERY</a></li>
			<li><a href="/admissions">ADMISSIONS</a></li>
			<li><a href="/syllabus">SYLLABUS</a></li>
			<li><a href="/contact_us">CONTACT US</a></li>
		</ul>
	</div>
	<div class="navbar-end">
		<a class="btn gap-3 rounded-sm btn-accent" href="tel:02241611000">
			<div class="w-5">
				<FaPhoneAlt />
			</div>
			022 4161 1000
		</a>
	</div>
</nav>
<div class="absolute w-full overflow-x-hidden">
	<main class="w-full mt-24">
		<slot />
	</main>
	<Footer />
</div>
