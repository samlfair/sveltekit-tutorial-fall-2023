<script>
	import { PrismicRichText } from '@prismicio/svelte';
	import Label from './Label.svelte';

	/** @type {import("@prismicio/client").Content.RichTextSlice} */
	export let slice;
</script>

<section class="container">
	<div class="text">
		<PrismicRichText field={slice.primary.content} components={{ label: Label }} />
	</div>
</section>

<style>
	.text {
		width: 100%;
		max-width: var(--size-content-3);
	}
</style>
