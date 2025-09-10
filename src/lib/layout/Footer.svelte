<script lang="ts">
	const year = new Date().getFullYear();
</script>

<footer>
	<p id="credit">made by mimi <span id="bunny">🐰</span> - <span id="year">{year}</span></p>
</footer>

<style lang="scss">
	@use '../../scss/defaults.scss' as *;
	@use '../../scss/mixins.scss' as *;

	footer {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;

		height: 5rem;
		width: 100%;

		background-color: $surface0;

		border-top: 1px $lavender solid;
	}

	span#bunny {
		display: inline-block;

		@keyframes shake {
			0% {
				transform: translate(0px, 0px) rotate(0deg);
			}
			10% {
				transform: translate(-1px, -2px) rotate(-1deg);
			}
			20% {
				transform: translate(-3px, 0px) rotate(1deg);
			}
			30% {
				transform: translate(3px, 2px) rotate(0deg);
			}
			40% {
				transform: translate(1px, -1px) rotate(1deg);
			}
			50% {
				transform: translate(-1px, 2px) rotate(-1deg);
			}
			60% {
				transform: translate(-3px, 1px) rotate(0deg);
			}
			70% {
				transform: translate(3px, 1px) rotate(-1deg);
			}
			80% {
				transform: translate(-1px, -1px) rotate(1deg);
			}
			90% {
				transform: translate(1px, 2px) rotate(0deg);
			}
			100% {
				transform: translate(1px, -2px) rotate(-1deg);
			}
		}

		&:hover {
			/* Start the shake animation and make the animation last for 0.5 seconds */
			animation: shake 0.5s;
			animation-delay: 1s;

			/* When the animation is finished, start again */
			animation-iteration-count: infinite;
		}
	}
</style>
