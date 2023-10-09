<script>
	import { PrismicRichText } from '@prismicio/svelte';

	/** @type {import("@prismicio/client").Content.HeroTextSlice} */
	export let slice;
</script>

<section data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
	<PrismicRichText field={slice.primary.title} />
	<PrismicRichText field={slice.primary.subtitle} />
</section>
