<script lang="ts">
	import Row from '$lib/components/Row.svelte';
	import type { BoardRow } from '$lib/interfaces/ConfigSchema';
	import { config } from '$lib/samples/sample-config';

	let currentConfig = config;
	let defaultBoardRow: BoardRow = {
		id: 0,
		x: 10,
		y: 20,
		width: 6,
		height: 6,
		rule: 0
	};
	function addCA() {
		// add a board to json
        let newRow = {...defaultBoardRow};
		currentConfig.boards.push(newRow);
        // console.log("addCA clicked");
        // trigger reactivity
        currentConfig = currentConfig;
	}
    function removeCA(id: number) {
        // Remove element in with the id
        currentConfig.boards.splice(id,1);
        //console.log(currentConfig.boards.splice(id,1));
        currentConfig = currentConfig;
        console.log("removeCA"+id);

    }
</script>

<h1>CA JSON Layout Editor</h1>
{#each currentConfig.boards as this_board, i}
	<Row bind:row={this_board} id={i} removeFunc={removeCA}/>
{/each}
<button on:click={addCA}>Add CA</button>

<pre>{JSON.stringify(currentConfig, undefined, '  ')}</pre>
<a href="./sidepage">Go to side page</a>
