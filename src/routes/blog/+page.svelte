<script lang="ts">
	import dayjs from 'dayjs';
	import customParseFormat from 'dayjs/plugin/relativeTime';
	import { toUnixDate } from '$lib/utils';

	import Hero from '$lib/layout/Hero.svelte';
	import PostItem from '$lib/components/blogpostListItem.svelte';

	let { data } = $props();
	const posts = data.posts;

	/* 	const postSorted = () => {
		let sorted = [];
		for (const post in posts) {
			let newDate = toUnixDate(post.lastModified);
		}
	}; */
</script>

<Hero gradient="blog">
	<h1>my blog</h1>
	<p>here i literally post about what ever is on my mind</p>
</Hero>

<div class="blogposts">
	{#if posts.length > 0}
		{#each posts as post}
			<PostItem {...post} />
		{/each}
	{:else}
		<h2>No posts found :c</h2>
	{/if}
</div>

<style lang="scss">
	div.blogposts {
		width: 100%;
		gap: 1rem;

		padding: 0 1rem;
	}
</style>
