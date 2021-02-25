<script>
	import Header from "./components/Header/Header.svelte";
	import IconLibrary from "./components/IconLibrary/IconLibrary.svelte";
	import * as di from "svelte-icons/di/index";
	import * as fa from 'svelte-icons/fa/index';
</script>

<style>
	main {
		padding: 10rem var(--size-sides);
	}
</style>

<Header />
<main>
	<IconLibrary name="Dev Icons (di)" icons={{ ...di }} />
	<IconLibrary name="Font Awesome (fa)" icons={{ ...fa }} />
	<IconLibrary name="Font Awesome (fa)" icons={{ ...fa }} />
</main>
