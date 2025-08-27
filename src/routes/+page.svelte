<script lang="ts">
	import Hero from '$lib/layout/Hero.svelte';

	let { data } = $props();
	const about_me = data.about_me;
	const about_my_blog = data.about_my_blog;
	const projects = data.projects;
</script>

<Hero gradient="default">
	<section id="introduction">
		<h1>heya, i'm <span id="name">mimi</span>!</h1>
		<p>tinkerer, queer person and aspiring software developer :3</p>
	</section>
	<section id="links">
		<a href="/">&gt contact me!</a>
		<a href="/">&gt github</a>
		<a href="/">&gt my projects</a>
		<a href="/">&gt fediverse</a>
	</section>
</Hero>

<article>
	{#if about_me}
		<section id="about-me" class="content">
			<h2>about me</h2>
			<hr />
			<div class="text">
				{@html about_me}
			</div>
		</section>
	{/if}
	{#if about_my_blog}
		<section id="blog" class="content">
			<h2>about my blog</h2>
			<hr />
			<div class="text">
				{@html about_my_blog}
			</div>
		</section>
	{/if}
	{#if projects}
		<section id="projects" class="content">
			<h2>my projects</h2>
			<hr />
			<div class="text">
				{@html projects}
			</div>
		</section>
	{/if}
</article>

<style lang="scss">
	@use '../scss/defaults.scss' as *;
	@use '../scss/mixins.scss' as *;
	/*----------------------------hero------------------------------------*/
	section#introduction {
		display: flex;
		flex-direction: column;
		align-self: center;

		flex-grow: 1;

		h1 {
			font-size: 4rem;

			#name {
				@include textGradient3($deg: 45deg, $color1: $blue, $color2: $mauve, $color3: $green);
			}
		}

		p {
			font-size: 1.5rem;
		}
	}

	section#links {
		display: flex;
		flex-direction: row;
		justify-content: space-evenly;
		flex-wrap: wrap;

		gap: 1rem;

		padding-top: 1rem;

		a {
			text-decoration: none;

			background: transparent;

			border-image-source: linear-gradient(69deg, rgb(203, 166, 247), rgb(230, 166, 247));
			border: solid;
			border-width: 4px;
			border-radius: 8px;
			padding: 6px 18px;
		}
	}
	/*----------------------------end------------------------------------*/
	article {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;

		margin: 0 1rem;
	}

	article section {
		width: 400px;
		flex-grow: 1;

		padding: 1rem;
	}

	.text {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	section#about-me {
		hr {
			border: $pink solid 1px;
		}
	}

	section#blog {
		hr {
			border: $red solid 1px;
		}
	}

	section#projects {
		hr {
			border: $green solid 1px;
		}
	}
</style>
