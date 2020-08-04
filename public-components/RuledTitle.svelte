<script>
  export let text;
  let space = " ";
</script>

<style>
  h1 {
    text-align: center;
    position: relative;
    height: 50px;
    line-height: 50px;
    padding: auto;
  }

  h1::before {
    content: "";
    position: absolute;
    height: 5px;
    bottom: 20px;
    left: 0px;
    width: 100%;
    background-color: #eb2a00;
    z-index: -1;
  }

  mark {
    color: #eb2a00;
    background-color: #fff5ea;
  }
</style>

<h1>
  <mark>{space}{text}{space}</mark>
</h1>
