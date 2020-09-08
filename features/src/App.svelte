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
  p {
    font-family: "Viga";
    text-align: center;
    color: #eb2a00;
  }

  img {
    width: 100%;
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
  <img src="features1.png" alt="Demo of chat sides"/>
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
  <p>
    Fine-tine the sizing of this second chat with an ingame screen.
  </p>
  <img src="features5.png" alt="Demo of chat settings"/>
  <br />

  <RuledTitle text="Staff Chat Shortcuts" />
  <p>
    Send messages to staff chats instantly with a keybind!
  </p>
  <img src="features2.png" alt="Demo of chat rooms"/>
  <p>
    Acts like normal chat, but will be sent to support chat. Bind it to any key you want.
  </p>
  <p>
    Available for all staff chat rooms.
  </p>
  <br />

  <RuledTitle text="Complete Compatibility" />
  <p>
    All updates available for both Fabric and Forge loaders. No need to pick and choose!
  </p>
  <br />

  <RuledTitle text="Command Keybinds" />
  <p>
    Perform other common commands with just a keybind!
  </p>
  <img src="features3.png" alt="Demo of command keybinds"/>
  <p>
    More coming soon...
  </p>
  <br />
  <br />
  <br />
  <br />
  <br />
</main>
