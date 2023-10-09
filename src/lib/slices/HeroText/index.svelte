<script>
	import { PrismicRichText } from '@prismicio/svelte';

	/** @type {import("@prismicio/client").Content.HeroTextSlice} */
	export let slice;
</script>

<section data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
	<PrismicRichText field={slice.primary.title} />
	<PrismicRichText field={slice.primary.subtitle} />
</section>

<style>
	section {
		/* Add a gradient background */
		background-image: var(--gradient-30), var(--noise-5);
		/* Add some noise to the background */
		filter: var(--noise-filter-1);
		background-size: cover;
		text-transform: uppercase;
		display: flex;
		flex-direction: row;
		align-items: flex-start;
		justify-content: center;
		gap: var(--size-4);
		padding: var(--size-14) 0 var(--size-13);
		font-family: var(--font-serif);
	}

	section :global(h1) {
		color: var(--red-5);
		text-align: right;
		font-size: var(--size-11);
		line-height: var(--size-11);
		width: min-content;
	}

	section :global(p) {
		color: black;
		text-align: left;
		font-size: var(--size-7);
		font-family: var(--font-serif);
		color: var(--purple-11);
		font-size: var(--size-8);
		line-height: 120%;
		width: min-content;
	}
</style>
