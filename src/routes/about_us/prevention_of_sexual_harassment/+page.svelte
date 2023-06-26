<script lang="ts">
	import Staff from './Staff.svelte';
	let staff = [
		['Mrs. Beenu Johnkutty', 'Chairman', '9869441160'],
		['Mrs. Nirmala M.', 'Member', '9819879923'],
		['Mr. Upendra Rai', 'Member', '9869358567'],
		['Mrs. Swapnali Thottam', 'Member', '9969895227'],
		['Mr. Avinash Jage', 'Member', '704596720'],
		['Dr. Dipti Joshi', 'Member from NGO Sreemukti Sanghatana', '8369765171'],
		['Ms. Swarali Kharche', 'Student (EJ-5I)', '9623134810'],
		['Mr. Varun P.', '	Student (ME-3I)', '9326858981'],
		['Ms. Anjali Survade', 'Student (CE-5I)', '	8108158885']
	];
</script>

<h2 class="divider-heading lg:col-span-2 mb-8">ICC – Prevention of sexual harassment</h2>
<div class="overflow-x-auto w-full">
	<table class="table w-full">
		<thead>
			<tr>
				<th>Name of the staff</th>
				<th>Designation</th>
				<th>Contact Number</th>
			</tr>
		</thead>

		<Staff data={staff} />
	</table>
</div>
