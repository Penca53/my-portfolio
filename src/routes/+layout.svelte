<script>
	import './styles.css';

	export const trailingSlash = 'always';
	export const prerender = true;
</script>

<div>
	<main>
		<slot />
	</main>

	<footer />
</div>
