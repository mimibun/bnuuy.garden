<script lang="ts">
</script>

<header>
	<section id="home">
		<a href="/">mimi</a>
	</section>
	<section class="nav">
		<a href="/blog"
			>blog <img
				src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiM0OTRkNjQiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1ub3RlYm9vay1wZW4taWNvbiBsdWNpZGUtbm90ZWJvb2stcGVuIj48cGF0aCBkPSJNMTMuNCAySDZhMiAyIDAgMCAwLTIgMnYxNmEyIDIgMCAwIDAgMiAyaDEyYTIgMiAwIDAgMCAyLTJ2LTcuNCIvPjxwYXRoIGQ9Ik0yIDZoNCIvPjxwYXRoIGQ9Ik0yIDEwaDQiLz48cGF0aCBkPSJNMiAxNGg0Ii8+PHBhdGggZD0iTTIgMThoNCIvPjxwYXRoIGQ9Ik0yMS4zNzggNS42MjZhMSAxIDAgMSAwLTMuMDA0LTMuMDA0bC01LjAxIDUuMDEyYTIgMiAwIDAgMC0uNTA2Ljg1NGwtLjgzNyAyLjg3YS41LjUgMCAwIDAgLjYyLjYybDIuODctLjgzN2EyIDIgMCAwIDAgLjg1NC0uNTA2eiIvPjwvc3ZnPg=="
				alt="blog logo"
			/></a
		>
	</section>
</header>

<style lang="scss">
	@use 'sass:color';
	@use '../../scss/defaults.scss' as *;
	@use '../../scss/mixins.scss' as *;

	header {
		display: flex;
		flex-direction: row;
		justify-content: space-around;

		position: fixed;
		width: 100%;
		top: 0;
		z-index: 1000;
		margin: 0 0;

		background-color: color.change($mantle, $alpha: 80%);

		backdrop-filter: blur(5px);
		border-bottom: solid 1.5px color.change($overlay1, $alpha: 80%);
	}

	section {
		display: flex;

		&#home {
			a {
				text-shadow: none;
				font-size: 3rem;
				font-weight: bold;

				background: linear-gradient(45deg, $blue, $mauve, $green);
				-webkit-background-clip: text;
				background-clip: text;
				color: transparent;
			}
		}

		&.nav {
			align-self: center;
			a {
				display: flex;
				gap: 0.5rem;
				text-decoration: none;

				background-image: linear-gradient(69deg, rgb(203, 166, 247), rgb(230, 166, 247));
				border-radius: 8px;
				padding: 7px 18px;
				color: $surface1;

				img {
					display: inline;
					align-self: center;
					height: 1rem;
					width: 1rem;
				}
			}
		}
	}
</style>
