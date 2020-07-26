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
    Ever found your main chat getting cluttered? Keeps things organised by
    shifting the stuff you want to see to a secondary chats. That's right!
    There's now two chats.
  </p>
  <br />
  <p>
    Contains built in support for /msg messages, and all staff chats. If that's
    not enough you can also define a custom filter for the stuff you want.
  </p>
  <br />
  <p>
    You can also apply a sound effect to each chat, to get a little 'ding' each
    time somebody says your name.
  </p>
  <br />

  <RuledTitle text="Staff Chat Shortcuts" />
  <p>
    For those with access to staff chats, it can be easy to mix up which chat
    you're sending to, and typing /sb still remains a hassle. With DF++, you can
    assign a key to open support chat as easily as any other chat! To avoid
    confusion, the chat is also highlighted so you always know which chat you're
    sending to!
  </p>
  <br />
  <br />
  <br />
  <br />
  <br />
</main>
