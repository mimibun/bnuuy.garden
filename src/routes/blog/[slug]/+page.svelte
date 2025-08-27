<script lang="ts">
	import Hero from '$lib/layout/Hero.svelte';
	import type { BlogPost } from '$lib/types.js';

	import { toTimeSincePublish } from '$lib/utils';

	let { data } = $props();
	const post = data.post as BlogPost;

	const relativeTime = toTimeSincePublish(post.lastModified);
</script>

<Hero gradient="blog">
	<h1>{post.title}</h1>
	<p class="date">published {relativeTime}</p>
</Hero>

<article>
	{@html post.content}
</article>

<style lang="scss">
	@use '../../../scss/defaults.scss' as *;

	p.date {
		font-size: 1rem;
		color: $subtext0;
	}

	article {
		display: flex;
		flex-direction: column;

		width: 100%;
		padding: 1rem 1rem;

		gap: 1rem;
	}
</style>
