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
    border-bottom: 1px solid #80808030;
  }

  a {
    width: 100%;
  }
</style>

<header>
  <a href="." on:click={() => searchInput.set('')}>Svelte Icon Explorer</a>
  <SearchBar />
</header>
