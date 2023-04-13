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
		class="navbar bg-primary md:w-auto md:left-20 md:right-20 xl:left-40 xl:right-40 top-3 md:top-7 lg:top-10 absolute z-50 rounded-lg border-2 border-black shadow-lg"
		in:fade
	>
		<div class="navbar-start">
			<div class="dropdown">
				<button class="btn btn-ghost btn-sm xl:hidden" tabindex="0" aria-label="Menu">
					<IoMdMenu />
				</button>
				<ul class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 font-semibold">
					<li><a href="/">HOME</a></li>
					<li><a href="/about_us">ABOUT US</a></li>
					<li><a href="">COURSES</a></li>
					<li><a href="">GALLERY</a></li>
					<li><a href="">NEWS</a></li>
					<li><a href="">CONTACT US</a></li>
				</ul>
			</div>
			<a class="btn btn-ghost normal-case text-xl gap-2" href="/">
				<img src="/apv_logo.png" alt="Logo" class="w-12" />
				<h1 class="text-left 2xl:hidden">APV</h1>
				<h1 class="text-left hidden 2xl:block">Agnel Polytechnic</h1>
			</a>
		</div>
		<div class="navbar-center hidden xl:flex">
			<ul class="menu menu-horizontal px-1 font-semibold">
				<li><a href="/">HOME</a></li>
				<li class="dropdown dropdown-hover">
					<button tabindex="0">ABOUT US</button>
					<ul class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-auto border-accent border-2">
						<li>
							<a href="/about_us/vision_and_messages">Vision and messages</a>
							<a href="/about_us/staff_details">Staff details</a>
							<a href="/about_us/anti_ragging">Anti ragging</a>
						</li>
					</ul>
				</li>
				<li><a href="">COURSES</a></li>
				<li><a href="">GALLERY</a></li>
				<li><a href="">NEWS</a></li>
				<li><a href="">CONTACT US</a></li>
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
