<script>
  import FaRegSquare from "svelte-icons/fa/FaRegSquare.svelte";

  export let Icon = FaRegSquare;
  export let name = "IconName";
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
  }
  section.top:hover {
    background: #80808020;
  }
  section.top:hover .icon-wrapper {
    box-shadow: none;
  }

  .icon-wrapper {
    width: 2rem;
    height: 2rem;
    box-shadow: 0 0 0 1px #808080;
    /* border-radius: 2px; */
    margin-bottom: 10px;
    transition: box-shadow 0.3s linear;
  }
</style>

<section class="top">
  <div class="icon-wrapper">
    <svelte:component this={Icon} />
  </div>
  <small>{name}</small>
</section>
