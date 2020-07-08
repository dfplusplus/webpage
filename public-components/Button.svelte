<script>
  export let title;
  export let href;
  export let subtitle = "";
  export let newWindow = false;
  export let important = false;

  let backgroundColor =       important ? "#eb2a00" : "#fff5ea";
  let backgroundColorHover =  important ? "#eb2a00" : "#ffc581";
  let textColor =             important ? "#fff5ea" : "#eb2a00";
  let textColorHover =        important ? "#ffc581" : "#eb2a00";
  let borderColor =           "#eb2a00";
</script>

<style>
  .button-container {
    display: flex;
    justify-content: center;
  }

  .button {
    display: flex;
    flex-direction: column;
    justify-content: center;

    margin-bottom: 10px;

    background-color: var(--background-color);
    width: 289px;
    height: 68px;
    cursor: pointer;

    border-radius: 6px;
    border: var(--border-color) solid 3px;

    transition: 
      color 100ms, 
      background-color 100ms;
  }

  a {
    text-emphasis-color: var(--text-color);
  }

  .button:hover {
    background-color: var(--background-hover-color);
    color: var(--text-hover-color);
  }

  p {
    margin: 0px;
    font-family: 'Viga';
    color: var(--text-color);
    text-align: center;
  }

  .title {
    font-size: 30px;
  }
</style>

<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Viga" />
<div class="button-container">
  <a {href} target={newWindow ? "_blank" : "_self"}>
    <div class="button" style="
      --background-color:{backgroundColor};
      --background-hover-color:{backgroundColorHover};
      --text-color:{textColor};
      --text-hover-color:{textColorHover};
      --border-color:{borderColor};
    ">
      <p class="title">{title}</p><p class="subtitle">{subtitle}</p>
    </div>
  </a>
</div>
