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
    padding: 10px;
    border-radius: 15px;
  }
  section.top:hover {
    background: var(--clr-1);
  }

  .icon-wrapper {
    width: 50px;
    height: 50px;
    box-shadow: 0 0 0 1px #808080;
    border-radius: 2px;
    margin-bottom: 10px;
  }
</style>

<section class="top">
  <div class="icon-wrapper">
    <Icon />
  </div>
  <small>{name}</small>
</section>
