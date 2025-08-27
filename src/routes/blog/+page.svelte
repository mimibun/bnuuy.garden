<script lang="ts">
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

<svelte:head>
	<title>blog</title>
</svelte:head>

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
		display: flex;
		flex-direction: column;
		width: 100%;
		gap: 1rem;

		padding: 0 1rem;

		h2 {
			align-self: center;

			margin-top: 1rem;
		}
	}
</style>
