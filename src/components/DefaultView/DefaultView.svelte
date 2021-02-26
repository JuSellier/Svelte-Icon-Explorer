<script>
  import InstallationGuide from "../InstallationGuide/InstallationGuide.svelte";
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
    max-width: 50ch;
    color: var(--clr-txt-dim);
  }

  div.install {
    display: flex;
    flex-direction: column;
    row-gap: 1rem;
  }
</style>

<div class="intro contain">
  <h1>Svelte Icons</h1>
  <p>
    Include popular icons (from well known icon libraries like Font Awesome) in
    your project easily.<br />
    Svelte Icon uses ES6 Imports so you can include only the icons that your
    project needs.
  </p>
</div>

<div class="install">
  <h2>Installation guide</h2>
  <InstallationGuide />
</div>
