<script lang="ts">
    export let layoutName: string;
    export let cellSize: number;
    export let runDuration: number;

</script>
<h3>Sim Settings</h3>
<span>
    <label>Layout Name:<input type="text" bind:value={layoutName}></label>
    <label>Cell Size:<input type="number" bind:value={cellSize}></label>
    <label>Run duration:<input type="number" bind:value={runDuration}></label>
</span>