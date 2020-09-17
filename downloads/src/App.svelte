<script>
	export let rank;
	let title = "Downloads";
	if (rank != "default") title = `${toTitleCase(rank)} Downloads`

	import Background from "../../public-components/Background.svelte";
	import Button from "../../public-components/Button.svelte";
	import Title from "../../public-components/Title.svelte";
	import Navbar from "../../public-components/Navbar.svelte";
	import DownloadManager from "../../public-components/DownloadManager.svelte";
	
	import { slide } from 'svelte/transition';
	
	let releasesPromise = getReleases();

	async function getReleases() {
		let releasesSnapshot = await firebase.database().ref("releases").once('value');
		let releases = releasesSnapshot.val();
		let recommendedSnapshot = await firebase.database().ref("recommended").once('value');
		let recommended = recommendedSnapshot.val();
		releases[recommended].recommended = true;
		
		let releasesArray = Object.values(releases);
		releasesArray.sort((a,b) => {
			return b.timestamp - a.timestamp;
		})
		releasesArray.reduce((foundRecommended, cur) => {
			if (cur.recommended) { // flips accumulator from false to true
				cur.old = false;
				return true;
			}
			cur.old = foundRecommended;
			return foundRecommended;
		}, false)
		console.log(releasesArray);
		return releasesArray;
	}

	function toTitleCase(string) {
		return string.charAt(0).toUpperCase() + string.slice(1);
	}

	function toggleOlder() {
		displayOlder = !displayOlder;
	}

	let displayOlder = false;
	let displayRelease = null;
	let displayRank = null;
</script>

<style>
	p, a {
        color: #EB2A00;
        font-size: 20px;
        font-family: 'Viga';
        text-align: center;
	}

	#older {
		display: flex;
		justify-content: center;
	}
</style>

<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Viga" />
<Background />
<Navbar/>
<DownloadManager release = {displayRelease} rank = {displayRank}/>

<main>
	<Title text={title}></Title>
	{#await releasesPromise}
		<p>Fetching...</p>
	{:then releases}
		{#each releases as release}
			{#if release[rank] && (!release.old || displayOlder)}
			<!-- dummy div just here for the transition -->
			<div transition:slide>
				<Button on:click="{e => {displayRelease = release; displayRank = rank}}" title="v{release.release.replace(/-/g,".")} for {release.mcRelease}" important={release.recommended} subtitle={release.recommended ? "Recommended Download" : release.notes}></Button>
			</div>
			{/if}
		{/each}
		<div id="older">
			<a href="{"javascript:void(0)"}" on:click="{toggleOlder}">{displayOlder ? "Hide" : "Show"} Older...</a>
		</div>
	{:catch error}
		<p>Could not fetch downloads</p>
		<p>{error}</p>
	{/await}
</main>