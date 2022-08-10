<script lang="ts">
	import type { BoardRow } from '$lib/interfaces/ConfigSchema';
	export let row: BoardRow;
</script>
<!-- <pre>{JSON.stringify(row)}</pre> -->
<p>
	<span>
		CA1 <label>x: <input bind:value={row.x} type="number" /> </label><label>y: <input type="number" /> </label>
	</span>
</p>
