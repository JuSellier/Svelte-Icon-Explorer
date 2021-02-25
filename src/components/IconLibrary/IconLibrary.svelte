<script>
  import { searchInput } from "../../stores/search";

  import Icon from "../Icon/Icon.svelte";

  export let name = "IconLibrary";
  export let icons = {};

  export let filteredIcons = [];

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
    border-top: 1px solid #808080;
    padding: 10px 0;
  }

  h5 {
    text-align: center;
    position: sticky;
    top: 1rem;
  }

  p {
    margin-top: 1rem;
    text-align: center;
    color: var(--txt-dim);
  }

  section {
    padding: 2rem;

    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    row-gap: 1rem;
    column-gap: 1rem;
  }
</style>

<div class="top">
  <h5>{name}</h5>
  <p>{filteredIcons.length} icons found</p>
  <section>
    {#each filteredIcons as icon}
      <Icon key={icon} name={icon} Icon={icons[icon]} />
    {:else}
      <div>No icons to show...</div>
    {/each}
  </section>
</div>
