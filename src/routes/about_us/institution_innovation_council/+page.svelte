<script>
	import Staff from './Staff.svelte';
	let staff = [
		['Mrs. Saly Antony', 'Principal'],
		['Mrs. Raji M.P.', 'President'],
		['Mrs Sonali Sherigar', 'Vice President'],
		['Mr. Umesh. Mhapankar', 'Convener'],
		['Mr. Satish Endole', 'Member']
	];
</script>

<div class="flex flex-col gap-4 mb-8">
	<h2 class="divider-heading lg:col-span-2">Institution’s Innovation Council (IIC)</h2>
	<img src="/icc_image.jpg" alt="IIC logo" />
	<p class="max-w-7xl">
		Established Institution’s Innovation Council under ‘MHRD’s Innovation Cell (MIC) to systematically foster the culture of Innovation amongst
		students.
		<br />
		<br />
		The IIC promotes innovation in the Institution through multitudinous modes leading to an innovation promotion eco-system in the campus. Last year for
		the National Innovation Contest a total of 947 PoCs were submitted by IICs all over India including IITs, NITs, Engg Colleges, etc. We are glad to announce
		that the PoC submitted by our students “Early detection of cancer with non-invasive technique” from the Electronics Department under the guidance of
		Mr. Umesh Mhapankar got selected for the National Boot Camp and ours was the only Polytechnic in the selected list.
	</p>
	<h2 class="lg:col-span-2 divider-heading">IIC committee</h2>
</div>
<div class="overflow-x-auto w-full">
	<table class="table w-full">
		<thead>
			<tr>
				<th>Name of the staff</th>
				<th>Designation</th>
			</tr>
		</thead>

		<Staff data={staff} />
	</table>
</div>
