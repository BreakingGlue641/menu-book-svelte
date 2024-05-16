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
	Terimakasih atas pesanan anda sejumlah Rp {($totalOrderValue * 1000).toLocaleString('id')}!
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