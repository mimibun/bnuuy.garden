<script lang="ts">
	import { page } from '$app/state';

	import { toTimeSincePublish } from '$lib/utils';
	import { toPrettyDate } from '$lib/utils';

	let { title, description, lastModified, slug } = $props();

	const prettyDate = toPrettyDate(lastModified);
	const relativeTime = toTimeSincePublish(lastModified);
</script>

<a href="{page.url}/{slug}">
	<article class="blogpost">
		<h2 class="title-post">{title}</h2>
		<p class="description">{description}</p>
		<p class="date">{prettyDate} - published {relativeTime}</p>
	</article>
</a>

<style lang="scss">
	@use '../../scss/defaults.scss' as *;
	@use '../../scss/mixins.scss' as *;

	a {
		color: $text;
		text-decoration: none;

		width: 100%;

		padding: 0 1rem;
	}

	article.blogpost {
		display: flex;
		flex-direction: column;

		padding: 1rem 1rem;

		gap: 1rem;

		background-color: $surface0;
		border-radius: 6px;
		border: $surface1 1px solid;
	}

	p.date {
		font-size: 0.9rem;
		color: $subtext0;
	}
</style>
