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

	#bunny {
		@include shakeEffectOnHover();
	}
</style>
