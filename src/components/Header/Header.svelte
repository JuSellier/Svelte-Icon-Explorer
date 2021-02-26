<script>
  import { searchInput } from "../../stores/search";

  import SearchBar from "../SearchBar/SearchBar.svelte";
</script>

<style>
  header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;

    z-index: 100;

    background: var(--clr-bg);
    padding: 10px var(--size-sides);
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #80808030;
  }

  a {
    display: flex;
    align-items: center;
  }

  .app-header-img {
    width: 1em;
    height: 1em;
    margin-right: 10px;
  }
</style>

<header>
  <a href="." on:click={() => searchInput.set('')}>
    <img
      class="app-header-img"
      src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Svelte_Logo.svg/638px-Svelte_Logo.svg.png"
      alt="svelte icon" />
    Svelte Icon Explorer</a>
  <SearchBar />
</header>
