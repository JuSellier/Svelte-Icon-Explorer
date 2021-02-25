<script>
  import SearchBar from "../SearchBar/SearchBar.svelte";
</script>

<style>
  header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;

    background: var(--clr-bg);
    padding: 10px var(--size-sides);
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid var(--clr-txt);
  }
</style>

<header>
  <a href=".">ClearSearchOnClick</a>
  <SearchBar />
</header>
