<script>
  import { searchInput } from "../../stores/search";
  let inputValue;

  function onFormSubmit(e) {
    e.preventDefault();
    searchInput.set(inputValue);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
</script>

<style>
  form {
    display: flex;
    align-items: stretch;
    min-width: 100px;
    border-radius: 5px;
    box-shadow: 0 0 0 1px var(--clr-bg-dim);
  }
  input {
    background: none;
    border: none;
    padding: 10px;
    min-width: 100%;
  }

  button {
    padding: 10px;
    text-transform: uppercase;
  }
</style>

<form on:submit={onFormSubmit}>
  <input
    type="text"
    placeholder="Explore svelte-icons..."
    bind:value={inputValue} />
  <button type="submit" on:click={onFormSubmit}>search</button>
</form>
