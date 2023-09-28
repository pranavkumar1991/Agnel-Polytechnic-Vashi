<script lang="ts">
	import TiLocation from 'svelte-icons/ti/TiLocation.svelte';
	import TiMail from 'svelte-icons/ti/TiMail.svelte';
	import TiPhone from 'svelte-icons/ti/TiPhone.svelte';
	import MyModal from '../../components/MyModal.svelte';

	let userName = '';
	let userEmail = '';
	let userPhone = '';
	let userCourse = '';
	let userMessage = '';

	let modalTitle = '';
	let modalMessage = '';
	let modalElement: HTMLDialogElement;
	let callingEndpoint = false;
	async function submitForm() {
		callingEndpoint = true;
		const reqBody = {
			userName,
			userEmail,
			userPhone,
			userCourse,
			userMessage
		};
		const res = await fetch('https://b78hfkf3qg.execute-api.ap-south-1.amazonaws.com/submitForm', {
			method: 'POST',
			body: JSON.stringify(reqBody),
			headers: {
				'content-type': 'application/json'
			}
		});
		if (res.ok) {
			modalTitle = 'Success';
			modalMessage = "Data submitted successfully, we'll get back to you shortly!";
		} else {
			modalTitle = 'Error';
			modalMessage = 'An error has occurred, please contact us through other modes';
		}
		modalElement.show();
		callingEndpoint = false;
	}
</script>

<MyModal title={modalTitle} bind:dialogElement={modalElement}>
	<p>{modalMessage}</p>
</MyModal>
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
		<form class="grid lg:grid-cols-2 grid-cols-1 gap-5 w-full" on:submit={submitForm}>
			<input type="text" id="name" required placeholder="Enter your name" class="input w-full max-w-sm input-bordered" bind:value={userName} />
			<input type="email" id="email" required placeholder="Enter your email" class="input w-full max-w-sm input-bordered" bind:value={userEmail} />
			<input type="text" id="course" placeholder="Enter your desired course" class="input w-full max-w-sm input-bordered" bind:value={userCourse} />
			<input
				type="tel"
				id="phone"
				required
				placeholder="Enter your phone number"
				class="input w-full max-w-sm input-bordered"
				bind:value={userPhone}
			/>
			<textarea class="textarea lg:col-span-2 input-bordered" placeholder="Enter message" bind:value={userMessage} required />
			<button class="btn btn-secondary lg:col-span-2 text-white" disabled={callingEndpoint}>
				{#if !callingEndpoint}
					Send Message
				{:else}
					<span class="loading loading-spinner" />
				{/if}
			</button>
		</form>
	</div>
</div>
