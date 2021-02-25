<script>
  import { onMount } from "svelte";

  import Icon from "../Icon/Icon.svelte";

  export let name = "IconLibrary";
  export let icons = {};

  export let filteredIcons = [];

  for (const icon in icons) {
    console.log(icon);
    filteredIcons.push(icon);
  }
</script>

<style>
  div.top {
    border-top: 1px solid #808080;
    padding: 10px 0;
  }

  h5 {
    text-align: center;
    position: sticky;
    top: 1rem;
  }

  section {
    padding: 2rem;

    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    row-gap: 80px;
    column-gap: 1rem;
  }
</style>

<div class="top">
  <h5>{name}</h5>
  <section>
    {#each filteredIcons as icon}
      <Icon name={icon} Icon={icons[icon]} />
    {:else}
      <div>No icons to show...</div>
    {/each}
  </section>
</div>
