<script>
  import { searchInput } from "../../stores/search";

  import Icon from "../Icon/Icon.svelte";

  export let name = "IconLibrary";
  export let icons = {};
  export let viewAll = false;
  export let filteredIcons = [];
  const MIN_RESULTS_TO_RENDER = 2;

  for (const icon in icons) {
    console.log(icon);
    filteredIcons.push(icon);
  }

  searchInput.subscribe((val) => {
    const filtered = [];
    for (const icon in icons) {
      if (icon.toLowerCase().includes(val)) {
        filtered.push(icon);
      }
    }
    filteredIcons = filtered;
  });
</script>

<style>
  div.top {
    border-bottom: 1px solid #808080;
    padding: 2rem 0;
    display: flex;
    flex-direction: column;
  }

  h5 {
    position: sticky;
    top: 1rem;
    text-align: center;
  }

  p {
    padding: 1rem 0;
    color: var(--txt-dim);
    text-align: center;
  }

  section {
    padding: 2rem;

    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    row-gap: 1rem;
    column-gap: 1rem;
  }

  button {
    padding: 10px 20px;
    border-radius: 5px;
    box-shadow: 0 0 0 1px var(--clr-bg-dim);
  }
</style>

<div class="top">
  <h5>{name}</h5>
  <p>{filteredIcons.length} icons found</p>

  {#if (!viewAll && filteredIcons.length > 0 && filteredIcons.length <= MIN_RESULTS_TO_RENDER)}
    <button class="contain" on:click={() => (viewAll = true)}>Explore
      {name}
      icons...</button>
  {/if}
  {#if viewAll || $searchInput.length > MIN_RESULTS_TO_RENDER}
    <section>
      {#each filteredIcons as icon}
        <Icon key={icon} name={icon} Icon={icons[icon]} />
      {:else}
        <p class="contain">No icons to show...</p>
      {/each}
    </section>
    {#if viewAll}
      <button class="contain" on:click={() => (viewAll = false)}>Minify</button>
    {/if}
  {/if}
</div>
