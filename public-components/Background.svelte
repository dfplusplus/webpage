<script>

</script>

<style>
  .main {
    --centre-width: 700px;
    position: fixed;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    z-index: -1;
    display: grid;
    grid-template-columns: minmax(100px, auto) minmax(auto, var(--centre-width)) minmax(
        100px,
        auto
      );
  }

  .background {
    background-color: #fff5ea;
  }

  .border {
    background-size: contain;
    background-position: center;
  }

  @media (min-width: 700px) {
    .left {
      background-image: url("../dfblock.svg");
    }

    .right {
      background-image: url("../dfblock.svg");
      transform: rotate(180deg);
    }
  }
</style>

<div class="main">
  <div class="background left border" />
  <div class="background middle" />
  <div class="background right border" />
</div>
