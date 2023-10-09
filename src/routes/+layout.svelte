<script>
	import { page } from '$app/stores';
	import Nav from '$lib/components/Nav.svelte';

	export let data;
</script>

<svelte:head>
	<title>{$page.data.title}</title>
	{#if $page.data.meta_description}
		<meta name="description" content={$page.data.meta_description} />
	{/if}
	{#if $page.data.meta_title}
		<meta name="og:title" content={$page.data.meta_title} />
	{/if}
	{#if $page.data.meta_image}
		<meta name="og:image" content={$page.data.meta_image.url} />
		<meta name="twitter:card" content="summary_large_image" />
	{/if}
</svelte:head>

<Nav links={data.nav.data.links} />

<main>
	<slot />
</main>

<section>
	<footer>
		<p>© {new Date().getFullYear()}</p>
	</footer>
</section>

<style>
	/* Import Open Props styles */
	@import 'open-props/style';
	@import 'open-props/normalize';
	@import 'open-props/gray-hsl';

	/* Declare a font */
	@font-face {
		font-family: 'Anton';
		font-style: normal;
		font-weight: 100 900;
		font-display: swap;
		src: local(''), url('/Anton.woff2') format('woff2');
		unicode-range: U+20-7E, U+E4, U+E5, U+F6;
	}

	/* Define colors scheme for light and dark mode */
	:root {
		--brand: var(--red-6);
		--text-1: var(--gray-9);
		--text-2: var(--gray-11);
		--surface-1: var(--gray-3);
		--surface-2: var(--indigo-2);
		--surface-3: var(--gray-2);
		--surface-4: var(--orange-4);
		--surface-shadow: var(--gray-8-hsl);
		--shadow-strength: 2%;
	}

	@media (prefers-color-scheme: dark) {
		:root {
			color-scheme: dark;

			--brand: var(--orange-10);
			--text-1: var(--gray-3);
			--text-2: var(--gray-2);
			--surface-1: var(--gray-9);
			--surface-2: var(--gray-10);
			--surface-3: var(--purple-12);
			--surface-4: var(--violet-11);
			--surface-shadow: var(--gray-11-hsl);
			--shadow-strength: 50%;
		}
	}

	/* Set fonts */
	:global(html) {
		--font-serif: 'Anton';
		font-family: var(--font-sans);
	}

	/* Add some global styling for website sections */
	:global(section) {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: var(--size-10);
		padding: var(--size-11) 0;
	}

	:global(section:nth-child(even)) {
		background: var(--surface-1);
	}

	:global(section:nth-child(odd)) {
		background: var(--surface-4);
	}
</style>
