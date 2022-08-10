<script lang="ts">
	import Row from '$lib/components/Row.svelte';
	import { config } from '$lib/samples/sample-config';

	let currentConfig = config;
</script>

<h1>CA JSON Layout Editor</h1>
{#each currentConfig.boards as this_board }
    <Row bind:row={this_board} />
{/each}

<pre>{JSON.stringify(currentConfig, undefined, "  ")}</pre>
<a href="./sidepage">Go to side page</a>
