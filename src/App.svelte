<script>
	import Header from "./components/Header/Header.svelte";
	import IconLibrary from "./components/IconLibrary/IconLibrary.svelte";
	import * as di from "svelte-icons/di/index";
	import * as fa from "svelte-icons/fa/index";
	// GiJetpack is causing error: "(plugin svelte) ParseError: </IconBase> attempted to close an element that was not open"
	// import * as gi from "svelte-icons/gi/index";
	import * as go from "svelte-icons/go/index";
	import * as io from "svelte-icons/io/index";
	import * as md from "svelte-icons/md/index";
	import * as ti from "svelte-icons/ti/index";
	import * as wi from "svelte-icons/wi/index";
</script>

<style>
	main {
		padding: 10rem var(--size-sides) 2rem;
	}
</style>

<Header />
<main>
	<IconLibrary name="Dev Icons" icons={{ ...di }} />
	<IconLibrary name="Font Awesome" icons={{ ...fa }} />
	<!-- <IconLibrary name="Game Icons" icons={{ ...gi }} /> -->
	<IconLibrary name="GitHub Octicons" icons={{ ...go }} />
	<IconLibrary name="Ionicons" icons={{ ...io }} />
	<IconLibrary name="Material Design" icons={{ ...md }} />
	<IconLibrary name="Typicons" icons={{ ...ti }} />
	<IconLibrary name="Weather Icons" icons={{ ...wi }} />
</main>
