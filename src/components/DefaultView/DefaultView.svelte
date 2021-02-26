<script>
  import InstallationGuide from "../InstallationGuide/InstallationGuide.svelte";
  import StylingGuide from "../StylingGuide/StylingGuide.svelte";
</script>

<style>
  div.intro {
    display: flex;
    flex-direction: column;
    row-gap: 1rem;
    border-radius: 0 10px 10px 10px;
    box-shadow: 0 0 0 1px var(--clr-txt-dim);
    padding: 1rem 20px 1.5rem;
  }
  p {
    color: var(--clr-txt-dim);
  }

  div.install {
    display: flex;
    flex-direction: column;
    row-gap: 1rem;
    padding: 2rem 0;
  }

  div.use {
    display: flex;
    flex-direction: column;
    row-gap: 1rem;
    padding: 2rem 0;
  }

  h1 {
    color: var(--clr-svelte-red);
    font-weight: 100;
    letter-spacing: 0.2rem;
    font-family: var(--font-p);
  }

  div.style {
    display: flex;
    flex-direction: column;
    row-gap: 1rem;
    padding: 2rem 0;
  }
</style>

<div class="intro contain">
  <h1>Svelte Icon Explorer</h1>
  <p>
    Use popular icons in your projects (from well known icon libraries like Font
    Awesome) with svelte-icons.
    <br />
    <br />
    Use the searchbar in the header to find the right icon.
  </p>
</div>

<div class="install contain">
  <h2>Installation guide</h2>
  <InstallationGuide />
</div>

<div class="use contain">
  <h2>Usage guide</h2>
  <a
    href="https://github.com/AnxiousDarkly/svelte-icons#usage"
    rel="noreferrer"
    target="_blank">View svelte-icons usage guide</a>
</div>

<div class="style contain">
  <h2>Styling guide</h2>
  <StylingGuide />
</div>
