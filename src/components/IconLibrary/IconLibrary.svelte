<script>
  import { searchInput, searchResultsNumber } from "../../stores/search";

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
    searchResultsNumber.update((curr) => curr + filtered.length);
    if (val.length > 0 && filtered.length < 100) {
      expanded = true;
    } else {
      expanded = false;
    }
  });

  function onClickExpand() {
    expanded = true;
  }
</script>

<style>
  div.top {
    border-top: 1px solid #80808080;
    padding: 2rem 0;
    display: flex;
    flex-direction: column;
  }

  h5 {
    pointer-events: none;
    color: var(--clr-svelte-red);
  }
  @media (min-width: 1200px) {
    h5 {
      position: sticky;
      top: 1rem;
      /* text-align: center; */
      z-index: 200;
    }
  }

  p {
    padding: 1rem 0;
    color: var(--clr-txt-dim);
    /* text-align: center; */
  }

  section {
    padding: 2rem 1rem;

    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    row-gap: 1rem;
    column-gap: 1rem;
  }

  button {
    padding: 10px 20px 10px 10px;
    border-radius: 5px;
    background: var(--clr-bg);
    box-shadow: 0 0 0 1px #80808020;
    transition: background 0.3s linear, padding 0.2s linear,
      box-shadow 0.4s linear;
    text-align: left;
    text-transform: uppercase;
  }
  button:hover {
    background: #80808020;
    box-shadow: 0 0 10px #00000020;
    padding-left: 20px;
  }

  .wrapper {
    overflow-y: scroll;
    max-height: 60vh;
    border-radius: 4px;
    box-shadow: inset 0 0 0 1px #80808020;
  }
</style>

{#if filteredIcons.length > 0}
  <div class="top">
    <h5 class="contain">{name}</h5>
    <p class="contain">
      {filteredIcons.length > 0 ? filteredIcons.length : 'No'}
      icons found
    </p>

    {#if !expanded}
      <button class="contain" on:click={onClickExpand}>Explore</button>
    {/if}
    {#if expanded}
      <!-- <button class="contain" on:click={() => (expanded = false)}>Hide</button> -->
      <section class="wrapper">
        {#each filteredIcons as icon}
          <Icon name={icon} Icon={icons[icon]} />
        {:else}
          <p>No icons to show...</p>
        {/each}
      </section>
    {/if}
  </div>
{/if}
