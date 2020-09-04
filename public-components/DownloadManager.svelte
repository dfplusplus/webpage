<script>
    import RuledTitle from './RuledTitle.svelte';
    import Button from './Button.svelte';

    import { fade } from 'svelte/transition';

    export let release = {};
    export let rank;

    let isVisible = "none";
    $: isVisible = release ? "initial" : "none"

    let bool = false;
</script>

<style>
    .background {
        position: fixed;
        width: 100%;
        height: 100%;
        top: 0; left: 0;
        display: grid;
        z-index: 1;
        grid-template-columns: auto 400px auto;
        grid-template-rows: 1fr auto 1fr;
        transition: background-color 0.5s;
        background-color: rgba(0, 0, 0, 0.5);
    }

    .download {
        width: 100%;
        background-color: #FFF5EA;
        grid-column: 2 / 3;
        grid-row: 2 / 3;
        padding: 0px 30px 20px;
        border: solid #EB2A00 3px;
        border-radius: 6px;
        z-index: 1;
    }

    p {
        font-size: 130%;
        font-family: "Viga";
        text-align: center;
        color: #eb2a00;
    }
</style>

<main>
    {#if release}
    <div transition:fade="{{ duration: 100 }}" class="background">
        <div class="download">
            <!-- only display this if release isn't null -->
            {#if release} 
                <RuledTitle text="v{release.release.replace(/-/g,".")} for {release.mcRelease}"/>
                <p>{release.notes}</p>
                <!-- Newer releases are an object with forge & fabric fields. Old releases just contain a string URL to forge -->
                {#if typeof(release[rank]) == "object"} 
                    <Button important title="Forge Download" href="{release[rank].forge};"/>
                    <Button important title="Fabric Download" href="{release[rank].fabric};"/>
                {:else}
                    <Button important title="Forge Download" href="{release[rank]};"/>
                {/if}
                <Button title="Close" on:click="{e => {release = null}}"/>
            {/if}
        </div>
    </div>
    {/if}
</main>