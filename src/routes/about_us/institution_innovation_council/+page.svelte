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

<div class="overflow-x-auto w-full flex flex-col gap-8 items-center">
	<h2 class="text-5xl font-bold lg:col-span-2 lg:divider">Institution’s Innovation Council (IIC)</h2>
	<img src="/icc_image.jpg" alt="" />
	<p class="max-w-7xl text-center">
		Established Institution’s Innovation Council under ‘MHRD’s Innovation Cell (MIC) to systematically foster the culture of Innovation amongst
		students.
		<br />
		<br />
		The IIC promotes innovation in the Institution through multitudinous modes leading to an innovation promotion eco-system in the campus. Last year for
		the National Innovation Contest a total of 947 PoCs were submitted by IICs all over India including IITs, NITs, Engg Colleges, etc. We are glad to
		announce that the PoC submitted by our students “Early detection of cancer with non-invasive technique” from the Electronics Department under the guidance
		of Mr. Umesh Mhapankar got selected for the National Boot Camp and ours was the only Polytechnic in the selected list.
	</p>
	<h2 class="text-5xl font-bold lg:col-span-2 lg:divider">IIC committee</h2>

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
