<script>
  import Background from "../../public-components/Background.svelte";
  import Button from "../../public-components/Button.svelte";
</script>

<style>
  main {
    max-width: 700px;
    margin: auto;
  }

  .centred {
    margin-left: auto;
    margin-right: auto;
    display: block;
  }

  main img {
    width: 30%;
    margin-top: 50px;
    display: block;
  }

  .subtitle {
    color: #eb2a00;
    width: 100%;
    text-align: center;
    font-size: 22px;
    font-family: "Viga";
  }
</style>

<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Viga" />
<Background />

<main>
  <img src="logo.png" alt="logo" class="centred"/>
  <p class="subtitle">1-up your DiamondFire experience</p>
  <Button label="Download" href="https://dfplusplus.github.io/webpage/downloads/" important/>
  <Button label="All downloads" href="https://dfplusplus.github.io/webpage/downloads/"/>
  <Button label="Features" href="https://dfplusplus.github.io/webpage/features/"/>
  <Button label="Credits" href="https://dfplusplus.github.io/webpage/credits/"/>
  <Button label="Source" href="https://github.com/dfplusplus/mod" newWindow/>
</main>
