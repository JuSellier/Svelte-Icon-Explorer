<script>
  import FaRegSquare from "svelte-icons/fa/FaRegSquare.svelte";
  import { updateClipboard } from "../../utils/common";

  export let Icon = FaRegSquare;
  export let name = "IconName";

  function onClick() {
    updateClipboard(name);
  }
</script>

<style>
  section.top {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 40px 10px;
    border-radius: 15px;
    transition: background 0.2s ease;

    cursor: pointer;
  }

  section.top:hover {
    background: #80808020;
  }
  section.top:hover .icon-wrapper {
    box-shadow: 0 0 0 1px #808080;
  }

  .icon-wrapper {
    width: 2rem;
    height: 2rem;
    /* border-radius: 2px; */
    margin-bottom: 10px;
    transition: box-shadow 0.3s linear;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  small {
    color: var(--clr-txt-dim);
  }
</style>

<section class="top" on:click={onClick}>
  <div class="icon-wrapper">
    <svelte:component this={Icon} />
  </div>
  <small>{name}</small>
</section>
