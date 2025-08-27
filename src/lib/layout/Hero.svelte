<script lang="ts">
	let { gradient, children } = $props();
</script>

<div id="hero" class={gradient}>
	<article>
		{@render children()}
	</article>
</div>

<style lang="scss">
	@use '../../scss/defaults.scss' as *;
	@use '../../scss/mixins.scss' as *;

	div#hero {
		display: flex;
		justify-content: center;

		width: 100vw;

		color: $text;

		article {
			display: flex;
			flex-direction: column;
			justify-content: center;

			flex-grow: 1;
			max-width: 1200px;

			padding: 90px 1rem 1.5rem;
		}
	}

	.default {
		@include heroGradientDefault();
	}

	.blog {
		@include heroGradientBlog();
	}
</style>
