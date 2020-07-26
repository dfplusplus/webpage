<script>
  import Background from "../../public-components/Background.svelte";
  import Title from "../../public-components/Title.svelte";
  import RuledTitle from "../../public-components/RuledTitle.svelte";
  import Navbar from "../../public-components/Navbar.svelte";
</script>

<style>
  main {
    margin: auto;
    width: 650px;
  }
  h1,
  p {
    font-family: "Viga";
    text-align: center;
    color: #eb2a00;
  }
</style>

<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Viga" />
<Background />
<Navbar />
<main>
  <Title text="Features" />
  <RuledTitle text="Chat Splitting" />
  <p>
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem quo natus
    nesciunt tempora placeat quaerat, laudantium quia nostrum non nulla,
    necessitatibus optio adipisci magni animi dolor esse ipsa! Dolor,
    reprehenderit.
  </p>
</main>
