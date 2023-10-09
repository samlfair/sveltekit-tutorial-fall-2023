<script>
	import { PrismicRichText } from '@prismicio/svelte';
	import { enhance } from '$app/forms';
	import { page } from '$app/stores';

	/** @type {import("@prismicio/client").Content.ContactFormSlice} */
	export let slice;

	let submitted = false;

	$: loading = submitted && !$page.form?.success;
</script>

<section data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
	<PrismicRichText field={slice.primary.heading} />
	<PrismicRichText field={slice.primary.description} />
	<form method="POST" action="/" on:submit={() => (submitted = true)} use:enhance>
		<div class="group">
			<label for="email">Email</label>
			<input required type="email" id="email" name="email" />
		</div>
		<div class="group">
			<label for="message">Message</label>
			<textarea name="message" id="message" minlength="1" maxlength="1000" />
		</div>
		<div class="group">
			<button class:submitted class:loading disabled={submitted}>
				{$page.form?.success ? 'Thank you ✨' : loading ? 'Loading' : 'Submit'}
			</button>
		</div>
	</form>
</section>

<style>
	form {
		display: flex;
		flex-direction: column;
		gap: var(--size-7);
		width: var(--size-content-2);
		background: var(--surface-3);
		padding: var(--size-9) var(--size-10) var(--size-8);
		border-radius: var(--radius-3);
		box-shadow: var(--shadow-2);
	}

	label {
		display: block;
		margin-bottom: var(--size-2);
	}

	label,
	button {
		font-weight: var(--font-weight-6);
	}

	input,
	textarea {
		display: block;
		width: 100%;
		resize: none;
	}

	button {
		border-radius: var(--radius-2);
		padding: var(--size-2) var(--size-5);
		margin-left: auto;
		margin-right: auto;
		display: block;
		background: var(--brand);
		box-shadow: var(--shadow-1);
		transition: box-shadow color 1s var(--ease-spring-2), color 1s;
	}

	button:hover {
		box-shadow: var(--shadow-2);
	}

	@keyframes loading {
		from {
			background: var(--gray-6);
		}
		to {
			background: var(--gray-7);
		}
	}

	button.loading {
		animation: loading 2s alternate infinite;
	}

	button.submitted {
		background: var(--surface-4);
		box-shadow: none;
		cursor: default;
	}
</style>
