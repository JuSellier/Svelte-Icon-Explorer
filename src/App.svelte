<script>
	import Header from "./components/Header/Header.svelte";
	import Footer from "./components/Footer/Footer.svelte";
	import IconLibrary from "./components/IconLibrary/IconLibrary.svelte";

	import * as di from "svelte-icons/di/index";
	import * as fa from "svelte-icons/fa/index";
	import * as go from "svelte-icons/go/index";
	import * as io from "svelte-icons/io/index";
	import * as md from "svelte-icons/md/index";
	import * as ti from "svelte-icons/ti/index";
	// import * as wi from "svelte-icons/wi/index";
	// import * as gi from "svelte-icons/gi/index";
	// GiJetpack is causing error: "(plugin svelte) ParseError: </IconBase> attempted to close an element that was not open"
// 	16:24:22.058  	[!] Error: Could not load /vercel/workpath0/node_modules/svelte-icons/wi/WiSmoke.svelte (imported by node_modules/svelte-icons/wi/index.js): EMFILE: too many open files, open '/vercel/workpath0/node_modules/svelte-icons/wi/WiSmoke.svelte'
// 16:24:22.058  	Error: Could not load /vercel/workpath0/node_modules/svelte-icons/wi/WiSmoke.svelte (imported by node_modules/svelte-icons/wi/index.js): EMFILE: too many open files, open '/vercel/workpath0/node_modules/svelte-icons/wi/WiSmoke.svelte'

	import { searchInput } from "./stores/search";
	import DefaultView from "./components/DefaultView/DefaultView.svelte";

	export let input;

	searchInput.subscribe((val) => {
		input = val;
	})
</script>

<style>
	main {
		padding: 7rem var(--size-sides) 2rem;

		display: flex;
		flex-direction: column;
		row-gap: 2rem;
		column-gap: 10px;
	}
</style>

<Header />
<main>
	{#if input.length === 0}
		<DefaultView />
	{/if}
	{#if input.length > 0}
		<h1 class="contain">Showing results for: {input}</h1>
	{/if}

	<div>
		<IconLibrary name="Dev Icons" icons={{ ...di }} />
		<IconLibrary name="Font Awesome" icons={{ ...fa }} />
		<!-- <IconLibrary name="Game Icons" icons={{ ...gi }} /> -->
		<IconLibrary name="GitHub Octicons" icons={{ ...go }} />
		<IconLibrary name="Ionicons" icons={{ ...io }} />
		<IconLibrary name="Material Design" icons={{ ...md }} />
		<IconLibrary name="Typicons" icons={{ ...ti }} />
		<!-- <IconLibrary name="Weather Icons" icons={{ ...wi }} /> -->
	</div>
</main>

<Footer />