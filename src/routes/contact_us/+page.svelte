<script>
	import TiLocation from 'svelte-icons/ti/TiLocation.svelte';
	import TiMail from 'svelte-icons/ti/TiMail.svelte';
	import TiPhone from 'svelte-icons/ti/TiPhone.svelte';
</script>

<div class="flex mx-auto items-center justify-center flex-wrap gap-10">
	<div class="flex flex-col gap-5 align-center">
		<div class="card w-96 bg-base-100 shadow-xl border-2 border-accent">
			<div class="card-body">
				<div class="flex items-center justify-between">
					<h2 class="card-title">Address</h2>
					<span class="w-6"><TiLocation /></span>
				</div>
				<a
					class="link link-hover"
					href="https://www.google.com/maps/place/Fr.+Agnel+Polytechnic/@19.0755441,72.9890864,17z/data=!3m1!4b1!4m6!3m5!1s0x3be7c135baaaaaab:0x931cf32f3e166f1f!8m2!3d19.075539!4d72.9912751!16s%2Fm%2F0bmhdtb"
					>Agnel Technical Education Complex, Sector 9A, Vashi, Navi Mumbai - 400703</a
				>
			</div>
		</div>
		<div class="card w-96 bg-base-100 shadow-xl border-2 border-accent">
			<div class="card-body">
				<div class="flex items-center justify-between">
					<h2 class="card-title">E-mail</h2>
					<span class="w-6"><TiMail /></span>
				</div>
				<a class="link link-hover" href="mailto:423agnel@gmail.com">423agnel@gmail.com</a>
			</div>
		</div>
		<div class="card w-96 bg-base-100 shadow-xl border-2 border-accent">
			<div class="card-body">
				<div class="flex items-center justify-between">
					<h2 class="card-title">Phone</h2>
					<span class="w-6"><TiPhone /></span>
				</div>
				<a class="link link-hover" href="tel:02241611000">+91 22 41611000</a>
			</div>
		</div>
	</div>
	<div class="flex flex-col items-center gap-10 w-full max-w-2xl">
		<h1 class="text-5xl font-bold">Contact Us</h1>
		<form class="grid lg:grid-cols-2 grid-cols-1 gap-5 w-full">
			<input type="text" id="name" placeholder="Enter your name" class="input w-full max-w-sm input-bordered" />
			<input type="email" id="email" placeholder="Enter your email" class="input w-full max-w-sm input-bordered" />
			<input type="text" id="course" placeholder="Enter your desired course" class="input w-full max-w-sm input-bordered" />
			<input type="tel" id="phone" placeholder="Enter your phone number" class="input w-full max-w-sm input-bordered" />
			<textarea class="textarea lg:col-span-2 input-bordered" placeholder="Enter message" />
			<button class="btn btn-secondary lg:col-span-2 text-white">Send Message</button>
		</form>
	</div>
</div>
