<script>
	export let rank;
	let title = "Downloads";
	if (rank != "default") title = `Downloads for ${rank}`

	import Background from "../../public-components/Background.svelte";
	import Button from "../../public-components/Button.svelte";
	import Title from "../../public-components/Title.svelte";
	import Navbar from "../../public-components/Navbar.svelte";
	
	let releasesPromise = getReleases();

	async function getReleases() {
		let releasesSnapshot = await firebase.database().ref("releases").once('value');
		let releases = releasesSnapshot.val();
		let recommendedSnapshot = await firebase.database().ref("recommended").once('value');
		let recommended = recommendedSnapshot.val();
		releases[recommended].recommended = true;
		
		let releasesArray = Object.values(releases);
		releasesArray.sort((a,b) => {
			if (a.mcRelease == b.mcRelease) {
				return a.release < b.release
			} else {
				return a.mcRelease < b.mcRelease;
			}
		})
		return releasesArray;
	}
</script>

<style>
	p {
        color: #EB2A00;
        font-size: 20px;
        font-family: 'Viga';
        text-align: center;
	}
</style>

<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Viga" />
<Background />
<Navbar/>

<main>
	<Title text="Downloads"></Title>
	{#await releasesPromise}
		<p>Fetching...</p>
	{:then releases}
		{#each releases as release}
			{#if release[rank] != undefined}
				<Button href={release[rank]} title="v{release.release.replace(/-/g,".")} for {release.mcRelease}" important={release.recommended} subtitle={release.recommended ? "Recommended Download" : release.notes}></Button>
			{/if}
		{/each}
	{:catch error}
		<p>Could not fetch downloads</p>
		<p>{error}</p>
	{/await}
</main>