<script>
	import { PrismicImage, PrismicRichText } from '@prismicio/svelte';

	/** @type {import("@prismicio/client").Content.CardListSlice} */
	export let slice;

	$: wide = slice.primary.wide;
</script>

<section data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
	<PrismicRichText field={slice.primary.heading} />
	<div class="cards" class:wide>
		{#each slice.items as card, index}
			<article class="card">
				<header>
					{#if slice.variation === 'headerImage'}
						<PrismicImage
							field={card.image}
							style="border-radius: var(--radius-blob-{(index % 5) + 1})"
						/>
					{/if}
					<PrismicRichText field={card.title} />
				</header>
				<PrismicRichText field={card.description} />
				{#if slice.variation === 'default'}
					<footer>
						<PrismicImage field={card.image} />
						<h4>{card.name}</h4>
					</footer>
				{/if}
			</article>
		{:else}
			<p>Nothing to see here...</p>
		{/each}
	</div>
</section>

<style>
	.cards {
		/* Create a responsive grid layout */
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
		gap: var(--size-8);
		max-width: 900px;
	}

	article {
		/* Some card styling */
		border: 1px solid rgba(0, 0, 0, 0.6);
		border-radius: var(--radius-3);
		padding: var(--size-4);
		box-shadow: var(--shadow-3);
		background: var(--surface-2);

		/* Layout for the card's content */
		display: flex;
		flex-direction: column;
		align-items: left;
		gap: var(--size-3);
	}

	.cards.wide {
		grid-template-columns: repeat(auto-fit, minmax(600px, 1fr));
	}

	.wide article {
		padding: var(--size-7);
	}

	.wide header {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: start;
		gap: var(--size-5);
		margin-block: var(--size-2);
	}

	.wide header :global(img) {
		margin: 0;
	}

	header :global(img) {
		width: 100px;
		height: 100px;
		object-fit: cover;
		margin: var(--size-5) auto var(--size-7);
	}

	footer {
		margin-top: auto;
		display: flex;
		flex-direction: row;
		align-items: center;
		gap: var(--size-3);
	}

	footer :global(img) {
		width: 50px;
		height: 50px;
		object-fit: cover;
		border-radius: var(--radius-round);
	}
</style>
