<script>
	import '../app.postcss';
	import FaPhoneAlt from 'svelte-icons/fa/FaPhoneAlt.svelte';
	import IoMdMenu from 'svelte-icons/io/IoMdMenu.svelte';
	import { fade } from 'svelte/transition';
	import Footer from './Footer.svelte';

	let animateNow = false;
	setTimeout(() => {
		animateNow = true;
	}, 1);
</script>

{#if animateNow}
	<div
		class="navbar bg-primary md:w-auto md:left-20 md:right-20 2xl:left-40 2xl:right-40 top-3 md:top-7 lg:top-10 absolute z-50 rounded-lg border-2 border-black shadow-lg"
		in:fade
	>
		<div class="navbar-start">
			<div class="dropdown">
				<button class="btn btn-ghost btn-sm 2xl:hidden" aria-label="Menu">
					<IoMdMenu />
				</button>
				<ul class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 font-semibold border border-black">
					<li><a href="/">HOME</a></li>
					<li>
						<details class="dropdown">
							<summary class="">ABOUT US</summary>
							<ul class="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-auto border border-black">
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
						</details>
					</li>
					<li>
						<details class="dropdown">
							<summary class="">COURSES</summary>
							<ul class="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-auto border border-black">
								<li>
									<a href="/courses/artificial_intelligence">Artificial Intelligence</a>
									<a href="/courses/electronics_and_computer_engineering">Electronics & Computer Engineering</a>
									<a href="/courses/civil_engineering">Civil Engineering</a>
									<a href="/courses/automobile_engineering">Automobile Engineering</a>
									<a href="/courses/mechanical_engineering">Mechanical Engineering</a>
								</li>
							</ul>
						</details>
					</li>
					<li><a href="/gallery">GALLERY</a></li>
					<li><a href="/admissions">ADMISSIONS</a></li>
					<li>
						<details class="dropdown">
							<summary class="">DOWNLOADS</summary>
							<ul class="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52 border border-black">
								<li>
									<a href="/downloads/syllabus">Syllabus</a>
								</li>
							</ul>
						</details>
					</li>
					<li><a href="/contact_us">CONTACT US</a></li>
				</ul>
			</div>
			<a class="btn btn-ghost normal-case text-xl gap-2" href="/">
				<img src="/apv_logo.png" alt="Logo" class="w-12" />
				<h1 class="text-left 22xl:hidden">APV</h1>
				<h1 class="text-left hidden 22xl:block">Agnel Polytechnic</h1>
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
				<li><a href="/gallery">GALLERY</a></li>
				<li><a href="/admissions">ADMISSIONS</a></li>
				<li class="dropdown dropdown-hover">
					<button>DOWNLOADS</button>
					<ul class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-auto border-accent border-2">
						<li>
							<a href="/downloads/syllabus">Syllabus</a>
						</li>
					</ul>
				</li>
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
	</div>
{/if}
<div class="mt-36">
	<slot />
</div>
<Footer />
