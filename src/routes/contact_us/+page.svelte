<script>
	import TiLocation from 'svelte-icons/ti/TiLocation.svelte';
    import TiMail from 'svelte-icons/ti/TiMail.svelte'
    import TiPhone from 'svelte-icons/ti/TiPhone.svelte'
</script>

<div class="flex mx-auto items-center justify-center flex-wrap gap-10">
	<div class="flex flex-col gap-10 align-center">
		<div class="card w-96 bg-base-100 shadow-xl">
			<div class="card-body">
				<div class="flex items-center justify-between">
					<h2 class="card-title">Address</h2>
					<span class="w-6"><TiLocation /></span>
				</div>
				<p>AGNEL TECHNICAL EDUCATION COMPLEX SECTOR -9A,VASHI, NAVI MUMBAI - 400703</p>
			</div>
		</div>
		<div class="card w-96 bg-base-100 shadow-xl">
			<div class="card-body">
				<div class="flex items-center justify-between">
					<h2 class="card-title">E-mail</h2>
					<span class="w-6"><TiMail /></span>
				</div>
				<p>AGNEL TECHNICAL EDUCATION COMPLEX SECTOR -9A,VASHI, NAVI MUMBAI - 400703</p>
			</div>
		</div>
		<div class="card w-96 bg-base-100 shadow-xl">
			<div class="card-body">
				<div class="flex items-center justify-between">
					<h2 class="card-title">Phone</h2>
					<span class="w-6"><TiPhone /></span>
				</div>
				<p>+91 22 41611000</p>
			</div>
		</div>
	</div>
	<div class="flex flex-col items-center gap-10">
		<h1 class="text-5xl font-bold">Contact Us</h1>
		<form action="" class="grid lg:grid-cols-2 grid-cols-1 gap-x-10 gap-y-5">
			<input type="text" id="name" placeholder="Enter your name" class="input w-full max-w-xs input-bordered" />
			<input type="email" id="email" placeholder="Enter your email" class="input w-full max-w-xs input-bordered" />
			<input type="text" id="course" placeholder="Enter your desired course" class="input w-full max-w-xs input-bordered" />
			<input type="tel" id="phone" placeholder="Enter your phone number" class="input w-full max-w-xs input-bordered" />
			<textarea class="textarea lg:col-span-2 input-bordered" placeholder="Enter message" />
			<button class="btn btn-secondary lg:col-span-2">Send Message</button>
		</form>
	</div>
</div>
