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
							<img src="/staff/{member[0]}.webp" alt="Avatar Tailwind CSS Component" />
						</div>
					</div>
					<div class="font-bold">{member[0]}</div>
				</div>
			</td>
			<td>
				{member[1]}
			</td>
		</tr>
	{/each}
</tbody>
