<script lang="ts">
	export let data: string[][];
	export let tableHeading: string;
</script>

<thead>
	<tr>
		<th colspan="4">{tableHeading}</th>
	</tr>
</thead>
<tbody>
	{#each data as member}
		<tr>
			<td>
				<div class="flex items-center space-x-3">
					<div class="avatar">
						<div class="mask mask-squircle w-12 h-12">
							<img src="/tailwind-css-component-profile-2@56w.png" alt="Avatar Tailwind CSS Component" />
						</div>
					</div>
					<div class="font-bold">{member[0]}</div>
				</div>
			</td>
			<td>
				{member[1]}
				<br />
				<span class="badge badge-ghost badge-sm">{member[2]}</span>
			</td>
			<td class="capitalize">{member[3]}</td>
			<td>{member[4]}</td>
		</tr>
	{/each}
</tbody>
