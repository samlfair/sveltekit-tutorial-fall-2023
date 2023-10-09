<script>
	import { PrismicLink } from '@prismicio/svelte';

	/** @type {import('../../prismicio-types').NavDocumentData['links']} */
	export let links;
</script>

<nav>
	<ul>
		{#each links as link}
			<li>
				<PrismicLink field={link.link}>{link.label}</PrismicLink>
			</li>
		{/each}
	</ul>
</nav>

<style>
	nav {
		position: fixed;
		background: var(--surface-3);
		z-index: 1;
		width: 100%;
		padding: var(--size-4);
		box-shadow: var(--shadow-1);
	}

	ul {
		list-style: none;
		padding: 0;
		margin: 0;
		display: flex;
		justify-content: space-around;
		font-size: var(--font-size-1);
		text-transform: uppercase;
		font-weight: var(--font-weight-5);
		color: var(--text-1);
	}

	li :global(a) {
		color: var(--text-2);
		padding: 0 0 5px;
	}

	li :global(a:hover) {
		text-decoration: none;
		color: var(--text-1);
		box-shadow: inset 0 -2px var(--brand), 0 2px var(--brand);
	}
</style>
