<script>
	export let rank;
	let title = "Downloads";
	if (rank != "default") title = `Downloads for ${rank}`

	import Background from "../../public-components/Background.svelte";
	import Button from "../../public-components/Button.svelte";
	import Title from "../../public-components/Title.svelte";
	
	let releasesPromise = getReleases();

	async function getReleases() {
		let releasesSnapshot = await firebase.database().ref("releases").once('value');
		let releases = releasesSnapshot.val();
		let recommendedSnapshot = await firebase.database().ref("recommended").once('value');
		let recommended = recommendedSnapshot.val();
		releases[recommended].recommended = true;
		
		console.log(Object.values(releases));
		return Object.values(releases).reverse();
	}
</script>

<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Viga" />
<Background />

<main>
	{#await releasesPromise}
		<Title text="Getting Downloads..."></Title>
	{:then releases}
		<Title text={title}></Title>
		{#each releases as release}
			{#if release[rank] != undefined}
				<Button href={release[rank]} title="v{release.release.replace(/-/g,".")} for {release.mcRelease}" important={release.recommended} subtitle={release.recommended ? "Recommended Download" : release.notes}></Button>
			{/if}
		{/each}
	{/await}
</main>