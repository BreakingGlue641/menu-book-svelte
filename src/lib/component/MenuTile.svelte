<script lang="ts">
    export let image1: string;
    export let name2: string;
    export let description3: string;
    export let label: string;
    export let price: string;



</script>

<div class="menu-tile">
    <div class="menu-photo">
      <img
        src={image1} alt={name2}>
    </div>
    <div class="menu-tile-name">{name2}</div>
    <div class="menu-tile-description">
      {description3}
    </div>
    <div class="menu-price-row">
      <span class="price-description">{label}</span>
      <span>{price}</span>
    </div>
    <div class="menu-price-row">
      <span class="price-description">{label}</span>
      <span>{price}</span>
    </div>
</div>

<style>
      div.menu-tile {
    flex: 1;
    display: flex;
    flex-direction: column;
    padding-bottom: 16px;
  }

  div.menu-photo img {
    aspect-ratio: 1;
    object-fit: cover;
    max-width: 100%;
  }

  div.menu-tile-name {
    font-weight: 500;
    font-size: 16px;
    padding: 8px 16px;
    align-self: stretch;
    text-align: center;
  }

  div.menu-tile-description {
    font-size: 12px;
    align-self: stretch;
    text-align: center;
    padding: 0px 16px;
    height: 60px;
    padding-bottom: 16px;
  }
  div.menu-price-row {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0 16px;
  }

  span.price-description {
    font-size: 12px;
  }

</style>