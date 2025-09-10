<script lang="ts">
	import '@fontsource-variable/cascadia-code';

	import Header from '$lib/layout/Header.svelte';
	import Footer from '$lib/layout/Footer.svelte';

	let { children } = $props();
</script>

<Header />
<div class="content">
	{@render children()}
</div>
<Footer />

<style lang="scss">
	@use '../scss/reset.scss' as *;
	@use '../scss/defaults.scss' as *;
	@use '../scss/mixins.scss' as *;

	:global(body) {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;

		gap: 1rem;

		font-family: $font-default;
		font-weight: 400;

		background-color: $base;
		color: $text;
	}

	:global(a) {
		color: $mauve;

		// ❣️ hey future mimi 🐰, in case youre looking for the :hover thing for the a-tag its in the hoverTransition-mixin here, yw :3 you look great btw uwu
		@include hoverTransition();
	}

	.content {
		display: flex;
		flex-direction: column;
		align-items: center;

		flex-grow: 1;
		margin: 0 1rem;
		width: 1200px;

		@media only screen and (max-width: 1200px) {
			width: 100%;
		}
	}
</style>
