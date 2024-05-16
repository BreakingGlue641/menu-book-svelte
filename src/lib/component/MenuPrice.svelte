<script lang="ts">
	import MinusIcon from '$lib/icon/MinusIcon.svelte';
	import PlusIcon from '$lib/icon/PlusIcon.svelte';
	import { order, totalOrderValue } from '$lib/store/order';

	export let menuId: string;
	export let id: string;
	export let label: string;
	export let price: number;

	$: compositeId = menuId + '_' + id;
	$: counter = $order[compositeId] ?? 0;

	const add = () => {
		$order[compositeId] = counter + 1;
		$totalOrderValue += price;
	};

	const substract = () => {
		if (!$order[compositeId]) return;
		$order[compositeId] = counter - 1;
		$totalOrderValue -= price;
	};
</script>

<div class="menu-price-row">
	<span class="price-description">{label}</span>
	<span class="price-value">{price}</span>
	<div class="calculator">
		<button on:click={counter > 0 ? substract : null} class={counter > 0 ? '' : 'hidden'}>
			<MinusIcon />
		</button>

		<span class="counter">{counter}</span>
		<button on:click={add}><PlusIcon /></button>
	</div>
</div>

<style>
	button {
		background: none;
		border: none;
		display: flex;
	}

	.hidden {
		visibility: hidden;
	}

	div.menu-price-row {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		padding: 0 16px;
		gap: 8px;
	}

	span.price-description {
		font-size: 12px;
		flex: 1;
		text-align: start;
	}

	span.counter {
		font-size: 12px;
		width: 12px;
		text-align: center;
	}

	div.calculator {
		display: flex;
		align-items: center;
		justify-content: end;
	}
</style>
