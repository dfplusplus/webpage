<script>
  import Background from "../../public-components/Background.svelte";
  import Button from "../../public-components/Background.svelte";
</script>

<style>
  main {
    max-width: 700px;
    margin: auto;
  }

  main img {
    width: 30%;
    margin-left: auto;
    margin-right: auto;
    margin-top: 100px;
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
  <img src="../logo.png" alt="logo" />
  <p class="subtitle">Level up your DiamondFire experience</p>
  <Button text="Downloads" />
</main>
