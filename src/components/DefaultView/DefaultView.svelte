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
  <h1>Svelte Icons</h1>
  <p>
    Include popular icons (from well known icon libraries like Font Awesome) in
    your project easily.
    <br />
    <br />
    Svelte Icon uses ES6 Imports so you can include only the icons that your
    project needs.
  </p>
</div>

<div class="install contain">
  <h2>Installation guide</h2>
  <InstallationGuide />
</div>

<div class="style contain">
  <h2>Styling guide</h2>
  <StylingGuide />
</div>
