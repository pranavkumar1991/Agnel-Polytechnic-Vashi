<script>
	import NavButtonGroup from './NavButtonGroup.svelte';
</script>

<div class="mt-2 flex items-center justify-center flex-col gap-5">
	<div class="flex justify-center items-center gap-10">
		<img src="/apv_logo.png" alt="APV logo" class="h-40" />
		<div class="flex flex-col gap-1.5">
			<h1 class="text-5xl font-bold uppercase">Agnel polytechnic, Vashi</h1>
			<h3 class="text-lg">
				( Approved by AICTE / Govt. of Maharashtra / DTE & affiliated to MSBTE )
			</h3>
			<h3><span class="font-bold">Accredited by NBA</span> (CE & ME)</h3>
			<h3>
				DTE Code: <span class="font-bold">3258 </span>| District:
				<span class="font-bold">Thane</span>
			</h3>
		</div>
	</div>

	<div class="drawer h-fit xl:hidden">
		<input id="my-drawer" type="checkbox" class="drawer-toggle" />
		<div class="drawer-content">
			<label class="btn btn-sm w-full flex" for="my-drawer">
				<input type="checkbox" id="my-drawer" class="hidden" />
				<span class="text-xl">☰</span>
			</label>
			<slot />
		</div>
		<div class="drawer-side">
			<label for="my-drawer" class="drawer-overlay" />
			<nav class="menu p-4 w-80 bg-base-100 text-base-content">
				<NavButtonGroup />
			</nav>
		</div>
	</div>

	<nav class="menu menu-horizontal bg-base-100 rounded-box hidden xl:flex mx-auto">
		<NavButtonGroup />
	</nav>
</div>
<div class="hidden xl:flex">
	<slot />
</div>
