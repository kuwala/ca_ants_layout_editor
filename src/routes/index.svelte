<script lang="ts">
	import Row from '$lib/components/Row.svelte';
    import SimSettings from '$lib/components/SimSettings.svelte';
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
        currentConfig = currentConfig;
        //console.log("removeCA"+id);

    }
    function downloadJSON() {
        var dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(currentConfig));
        var dlAnchorElem = document.getElementById('downloadAnchorElem');
        dlAnchorElem?.setAttribute("href", dataStr);
        dlAnchorElem?.setAttribute("download", "layout.json");
        dlAnchorElem?.click();
    }
</script>

<h1>CA JSON Layout Editor</h1>
<SimSettings bind:layoutName={currentConfig.sim_layout_name} bind:cellSize={currentConfig.cell_size} bind:runDuration={currentConfig.cycles_ran} />
{#each currentConfig.boards as this_board, i}
	<Row bind:row={this_board} id={i} removeFunc={removeCA}/>
{/each}
<br>
<button on:click={addCA}>Add CA</button>
<button on:click={downloadJSON}>Download JSON</button>
<a id="downloadAnchorElem" style="display:none"> </a>
<!-- <pre>{JSON.stringify(currentConfig, undefined, '  ')}</pre> -->
<br>
<a href="./sidepage">Go to side page</a>
