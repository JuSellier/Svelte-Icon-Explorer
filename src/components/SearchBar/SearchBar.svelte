<script>
  import { searchInput } from "../../stores/search";

  function onInputChange(e) {
    const inputValue = e.target.value;
    searchInput.set(inputValue);
  }

  function onKeyDown(e) {}

  function onFormSubmit(e) {
    e.preventDefault();
  }
</script>

<style>
  input {
    background: none;
    border: none;
    padding: 10px;
    width: 100%;
    max-width: 15ch;
  }
</style>

<form on:submit={onFormSubmit}>
  <input
    type="text"
    placeholder="Explore svelte-icons..."
    on:change={onInputChange} />
  <button type="submit">search</button>
</form>
