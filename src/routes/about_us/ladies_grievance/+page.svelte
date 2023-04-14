<script lang="ts">
	import Staff from './Staff.svelte';
	let staff = [
		['Mrs. Jewel Samantha', 'CHAIRMAN'],
		['Mrs. Roopa Shetty', 'MEMBER'],
		['Mr. Seema Kshirsagar', 'MEMBER'],
		['Mrs.Malini Pawande', 'MEMBER'],
		['Mr.Amarpreet Kaur', 'MEMBER'],
		['Mr. Nitin Kulkarni', 'MEMBER'],
		['Mr.Upendra Rai', 'MEMBER'],
		['Mr.Rajan Walinjkar', 'MEMBER'],
		['Mrs.Saly Antony', '	MEMBER']
	];
</script>

<div class="overflow-x-auto w-full flex flex-col gap-8 items-center">
	<h2 class="text-5xl font-bold lg:col-span-2 lg:divider">Ladies Grievance Cell</h2>
	<p class="max-w-7xl text-center">
		The Teaching and Non-Teaching Staff members of the polytechnic are hereby informed that as per the directives received from Joint Director,
		Technical Education, Regional Office, Maharashtra State, the following staff members have been nominated to the LADIES STAFF COMPLAINT REDRESSAL
		COMMITTEE with immediate effect.
	</p>
	<table class="table w-full">
		<thead>
			<tr>
				<th>Name of the staff</th>
				<th>Designation</th>
			</tr>
		</thead>

		<Staff data={staff} />
	</table>
	<p>
		The Member Secretary is hereby informed that on receipt of complaint from the staff, the same shall be discussed and necessary decision be taken
		in the committee and report be prepared which should be sent to the management for appropriate action.
	</p>
</div>
