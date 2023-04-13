<script lang="ts">
	export let data: string[][];
</script>

<tbody>
	{#each data as member}
		<tr>
			<td>
				<div class="flex items-center space-x-3">
					<div class="avatar">
						<div class="mask mask-squircle w-12 h-12">
							<img
								src="/tailwind-css-component-profile-2@56w.png"
								alt="Avatar Tailwind CSS Component"
							/>
						</div>
					</div>
					<div class="font-bold">{member[2]}</div>
				</div>
			</td>
			<td>
				{member[1]}
				<br />
				<span class="badge badge-ghost badge-sm">{member[0]}</span>
			</td>
			<td>{member[3]}</td>
		</tr>
	{/each}
</tbody>
