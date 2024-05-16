<script lang="ts">
	import { totalOrderValue } from '$lib/store/order';
	import CheckIcon from '$lib/icon/CheckIcon.svelte';
	const returnToMenuBook = () => {
		// TODO: Clear cart;
		history.back();
	};
</script>

<!--TODO: Decorate this page-->

<span>
	<CheckIcon />
	Your Money has been taken and no refund for your order
    <br>
    Thanks for wasting your money on this cafe your food will be delivered in 20 decades Rp {($totalOrderValue * 1000).toLocaleString('id')}!
</span>

<button on:click={returnToMenuBook}>Kembali ke buku menu</button>

<style>
	span {
        align-items: center;
		align-items: center;
		display: flex;
		gap: 16px;
		padding: 16px;
	}
	button {
		margin: 16px;
	}
</style>