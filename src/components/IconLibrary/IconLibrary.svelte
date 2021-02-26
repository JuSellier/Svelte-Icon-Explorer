<script>
  import { searchInput } from "../../stores/search";

  import Icon from "../Icon/Icon.svelte";

  export let name = "IconLibrary";
  export let icons = {};
  export let expanded = false;
  export let filteredIcons = [];

  for (const icon in icons) {
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
    console.log(filtered.length);
    if (val.length > 0) {
      expanded = true;
    } else {
      expanded = false;
    }
  });
</script>

<style>
  div.top {
    border-top: 1px solid #808080;
    padding: 2rem 0;
    display: flex;
    flex-direction: column;
  }

  h5 {
    position: sticky;
    top: 1rem;
    text-align: center;
    z-index: 200;
    pointer-events: none;
  }

  p {
    padding: 1rem 0;
    color: var(--clr-txt-dim);
    text-align: center;
  }

  section {
    padding: 2rem;

    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    row-gap: 1rem;
    column-gap: 1rem;
  }

  button {
    padding: 10px 20px;
    margin-bottom: 1rem;
    border-radius: 5px;
    box-shadow: 0 0 0 1px var(--clr-bg-dim), 0 0 10px #00000020;

    background: var(--clr-bg);
    position: sticky;
    top: 5rem;
    left: 0;
  }

  .wrapper {
    overflow-y: scroll;
    max-height: 100vh;
    border-radius: 4px;
    box-shadow: inset 0 0 0 1px var(--clr-txt-dim);
  }
</style>

<div class="top">
  <h5>{name}</h5>
  <p>{filteredIcons.length > 0 ? filteredIcons.length : 'No'} icons found</p>

  {#if !expanded}
    <button class="contain" on:click={() => (expanded = true)}>Explore
      {name}
      icons...</button>
  {/if}
  {#if expanded}
    <button class="contain" on:click={() => (expanded = false)}>Minify</button>
    <section class="wrapper">
      {#each filteredIcons as icon}
        <Icon name={icon} Icon={icons[icon]} />
      {:else}
        <p>No icons to show...</p>
      {/each}
    </section>
  {/if}
</div>
