<script lang="ts">
	import type { BoardRow } from '$lib/interfaces/ConfigSchema';
	export let row: BoardRow;
	export let id: number;
	row.id = id;
	export let removeFunc: void;
</script>
<!-- <pre>{JSON.stringify(row)}</pre> -->
<p>
	<span>
		CA{id}
		<label>x: <input bind:value={row.x} type="number" /> </label>
		<label>y: <input bind:value={row.y} type="number" /> </label>
		<label>width: <input bind:value={row.width} type="number" /> </label>
		<label>height: <input bind:value={row.height} type="number" /> </label>
		<button on:click={() => removeFunc(id)}>remove</button>
	</span>
</p>
