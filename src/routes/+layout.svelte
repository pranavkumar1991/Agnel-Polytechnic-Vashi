<script>
	import '../app.postcss';
</script>

<div class="navbar bg-base-100">
	<div class="navbar-start">
		<div class="dropdown">
			<button class="btn btn-ghost lg:hidden" tabindex="0">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-5 w-5"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					><path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M4 6h16M4 12h8m-8 6h16"
					/></svg
				>
			</button>
			<ul class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 font-semibold">
				<li><a href="/">HOME</a></li>
				<li><a href="/">ABOUT US</a></li>
				<li><a href="/">COURSES</a></li>
				<li><a href="/">GALLERY</a></li>
				<li><a href="/">NEWS</a></li>
				<li><a href="/">CONTACT US</a></li>
			</ul>
		</div>
		<a class="btn btn-ghost normal-case text-xl gap-2" href="/">
			<img src="/Agnel_logo.png" alt="Logo" class="w-12" />
			<h1 class="text-left">APV</h1>
		</a>
	</div>
	<div class="navbar-center hidden lg:flex">
		<ul class="menu menu-horizontal px-1 font-semibold">
			<li><a href="/">HOME</a></li>
			<li><a href="/">ABOUT US</a></li>
			<li><a href="/">COURSES</a></li>
			<li><a href="/">GALLERY</a></li>
			<li><a href="/">NEWS</a></li>
			<li><a href="/">CONTACT US</a></li>
		</ul>
	</div>
	<div class="navbar-end">
		<a class="btn" href="tel:+912241611000">+91 22416 11000</a>
	</div>
</div>
<slot />
