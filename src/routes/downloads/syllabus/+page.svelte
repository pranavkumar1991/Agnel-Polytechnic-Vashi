<script>
	import FaFilePdf from 'svelte-icons/fa/FaFilePdf.svelte';
</script>

<div class="overflow-x-auto">
	<table class="table mx-auto border-b border-x">
		<thead>
			<tr>
				<th class="normal-case text-base">Branch</th>
				<th class="normal-case text-base">1st Semester</th>
				<th class="normal-case text-base">2nd Semester</th>
				<th class="normal-case text-base">3rd Semester</th>
				<th class="normal-case text-base">4th Semester</th>
				<th class="normal-case text-base">5th Semester</th>
				<th class="normal-case text-base">6th Semester</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>Automobile Engineering (AE)</td>
                <td rowspan="5" class="border">
                    <a href="/downloads/syllabus/IScheme-1stSemester.pdf" class="btn btn-ghost flex-nowrap gap-2 normal-case">
                        <span class="w-6">
                            <FaFilePdf />
                        </span>
                        Common for all I-scheme
                    </a>
                </td>
				{#each ['AE-2I', 'AE-3I', 'AE-4I', 'AE-5I', 'AE-6I'] as item}
					<td class="border">
						<a href="/downloads/syllabus/{item}.pdf" class="btn btn-ghost flex-nowrap gap-2">
							<span class="w-6">
								<FaFilePdf />
							</span>
							{item}
						</a>
					</td>
				{/each}
			</tr>
			<tr>
				<td>Civil Engineering (CE)</td>
				{#each ['CE-2I', 'CE-3I', 'CE-4I', 'CE-5I', 'CE-6I'] as item}
					<td class="border">
						<a href="/downloads/syllabus/{item}.pdf" class="btn btn-ghost flex-nowrap gap-2">
							<span class="w-6">
								<FaFilePdf />
							</span>
							{item}
						</a>
					</td>
				{/each}
			</tr>
			<tr>
				<td>Artificial Intelligence & Machine Learning (AN)</td>
				{#each ['AN-2I', 'AN-3I', 'AN-4I'] as item}
					<td class="border">
						<a href="/downloads/syllabus/{item}.pdf" class="btn btn-ghost flex-nowrap gap-2">
							<span class="w-6">
								<FaFilePdf />
							</span>
							{item}
						</a>
					</td>
				{/each}
			</tr>
			<tr>
				<td>Electronics & Computer Engineering (TE)</td>
				{#each ['TE-2I', 'TE-3I', 'TE-4I'] as item}
					<td class="border">
						<a href="/downloads/syllabus/{item}.pdf" class="btn btn-ghost flex-nowrap gap-2">
							<span class="w-6">
								<FaFilePdf />
							</span>
							{item}
						</a>
					</td>
				{/each}
			</tr>
			<tr>
				<td>Mechanical Engineering (ME)</td>
				{#each ['ME-2I', 'ME-3I', 'ME-4I', 'ME-5I', 'ME-6I'] as item}
					<td class="border">
						<a href="/downloads/syllabus/{item}.pdf" class="btn btn-ghost flex-nowrap gap-2">
							<span class="w-6">
								<FaFilePdf />
							</span>
							{item}
						</a>
					</td>
				{/each}
			</tr>
		</tbody>
	</table>
</div>
