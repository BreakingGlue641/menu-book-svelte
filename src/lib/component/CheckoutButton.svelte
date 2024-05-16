<script lang="ts">
	import { goto } from '$app/navigation';
	import CheckoutIcon from '$lib/icon/CheckoutIcon.svelte';
	import ChevronRightIcon from '$lib/icon/ChevronRightIcon.svelte';
	import TrashIcon from '$lib/icon/TrashIcon.svelte';
	import { totalOrderCount, totalOrderValue, order } from '$lib/store/order';

	const clearCart = () => {
		$order = {};
		$totalOrderValue = 0;
	};

	const checkout = () => {
		goto('/order-confirmation');
	};
</script>

<button on:click={clearCart}>
	<TrashIcon />
</button>
<button on:click={checkout}>
	<div class="vertical-text">
		<span class="count">{$totalOrderCount} item(s)</span>
		<span class="price">Rp {($totalOrderValue * 1000).toLocaleString('id')}</span>
	</div>
	<CheckoutIcon />
	<ChevronRightIcon />
</button>

<style>
	button {
		padding-left: 16px;
		padding-right: 8px;
		background: #b71c1c;
		border: none;
		display: flex;
		flex-direction: row;
		justify-content: end;
		align-items: center;
		color: white;
	}

	.vertical-text {
		display: flex;
		flex-direction: column;
		align-items: end;
		margin-right: 8px;
	}

	span.count {
		font-size: 12px;
	}

	span.price {
		font-size: 14px;
		font-weight: 600;
	}
</style>
