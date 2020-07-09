<script>
	import Background from "../../public-components/Background.svelte";
	import Button from "../../public-components/Button.svelte";
	
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
		<p>Getting downloads</p>
	{:then releases}
		{#each releases as release}
			<Button href={release.default} title="v{release.release}" important={release.recommended}></Button>
		{/each}
	{/await}
</main>