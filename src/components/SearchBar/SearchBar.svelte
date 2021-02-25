<script>
  import { searchInput } from "../../stores/search";

  function onInputChange(e) {
    const inputValue = e.target.value;
    searchInput.set(inputValue);
  }

  function onKeyDown(e) {}

  function onFormSubmit(e) {
    e.preventDefault();
    searchInput.set(inputValue);
  }
</script>

<style>
  form {
    display: flex;
    align-items: stretch;
    min-width: 100px;
  }
  input {
    background: none;
    border: none;
    padding: 10px;
    width: 100%;
    max-width: 200px;
  }
</style>

<form on:submit={onFormSubmit}>
  <input
    type="text"
    placeholder="Explore svelte-icons..."
    on:change={onInputChange} />
  <button type="submit">search</button>
</form>
