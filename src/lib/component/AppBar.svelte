<script lang="ts">
	import { totalOrderCount } from '$lib/store/order';
	import CheckoutButton from './CheckoutButton.svelte';
</script>

<div class="appbar">
	<div class="spacer" />
	<span class="title">Kongkow Cafe</span>
	<div class="spacer">
		{#if $totalOrderCount > 0}
			<CheckoutButton />
		{/if}
	</div>
</div>

<style>
	div.spacer {
		display: flex;
		flex-direction: row;
		flex: 1;
		justify-content: end;
	}

	span.title {
		padding: 16px;
	}

	div.appbar {
		gap: 16px;
		display: flex;
		flex-direction: row;
		justify-content: center;
		background-color: #f44336;
		color: white;
		font-size: 16px;
		font-weight: 500;
		position: sticky;
		top: 0;
		left: 0;
		right: 0;
	}
</style>
