<script lang="ts">
	import { onMount } from 'svelte';

	import LoadingScreen from '$lib/components/LoadingScreen.svelte';
	import Candles from '$lib/components/Candles.svelte';
	import Stars from '$lib/components/Stars.svelte';
	import Clouds from '$lib/components/Clouds.svelte';

	// @ts-ignore
	import Typewriter from 'typewriter-effect/dist/core';

	let welcomeText: HTMLHeadingElement;

	let isDarkTheme = true;
	// Avoid changing theme while already playing the animation
	let isChangingTheme = false;

	const onCandleClick = () => {
		if (isChangingTheme) {
			return;
		}

		isChangingTheme = true;

		isDarkTheme = !isDarkTheme;
		localStorage.theme = isDarkTheme ? 'dark' : 'light';

		setTimeout(() => {
			isChangingTheme = false;
		}, 3000);
	};

	const loadThemePreference = () => {
		return (
			localStorage.theme === 'dark' ||
			(!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark').matches)
		);
	};

	onMount(() => {
		isDarkTheme = loadThemePreference();

		const typewriter = new Typewriter(welcomeText, {
			loop: true,
			delay: 75
		});

		typewriter
			.pauseFor(2500)
			.typeString('Welcome!')
			.pauseFor(2000)
			.deleteAll()
			.typeString('std::cout << "Hello I\'m Penca!" << std::endl;')
			.pauseFor(2000)
			.deleteAll()
			.typeString('console.log("I ♥ programming!");')
			.pauseFor(2000)
			.deleteAll()
			.typeString('Console.WriteLine("Contact me!");')
			.pauseFor(2000)
			.deleteAll()
			.start();
	});
</script>

<svelte:head>
	<meta name="description" content="Penca53's portfolio website" />
</svelte:head>

<!-- Switch is done using CSS (no need of Svelte if clauses) -->
<LoadingScreen />

<!-- Light and Dark Backgrounds. We can't simply change color because gradients don't support transitions  -->
<!-- Switch is done using CSS (no need of Svelte if clauses) -->
<div
	class="opacity-100 dark:opacity-0 main-light absolute z-0 w-full h-full transition duration-500"
/>
<div
	class="opacity-0 dark:opacity-100 main-dark absolute z-0 w-full h-full transition duration-500"
/>

<div class="w-full h-full flex flex-col items-center justify-between z-10 absolute">
	<div class="grow w-full min-h-0 flex items-center justify-center">
		<div
			class="transition duration-500 mt-8 max-h-full overflow-y-scroll w-5/6 md:w-4/5 max-w-5xl border border-neutral-500 dark:border-neutral-700 bg-neutral-300 dark:bg-neutral-800 shadow-2xl shadow-zinc-900 p-6 rounded-md text-neutral-800 dark:text-neutral-300"
		>
			<h1
				class="transition duration-500 font-mono text-md sm:text-xl md:text-2xl lg:text-3xl bg-slate-300 dark:bg-slate-800 border-t-2 border-t-neutral-900 border-r-2 border-r-neutral-900 border-b-2 border-b-neutral-900 p-4 border-l-4 border-l-red-600 dark:border-l-lime-500 rounded font-extralight whitespace-nowrap overflow-x-scroll"
				bind:this={welcomeText}
			>
				<!-- Space character. Used to keep line height correct -->
				&nbsp
			</h1>

			<div class="mt-8 md:mt-16 flex flex-col md:flex-row justify-between gap-12">
				<div class="text-sm sm:text-base md:text-lg">
					<p
						class="transition duration-300 ease hvr-forward text-justify border-l-8 pl-2 border-neutral-400 dark:border-neutral-600 rounded hover:border-blue-600 dark:hover:border-orange-500 hover:border-opacity-80"
					>
						Self-taught programmer, experienced in web && game development, interested in
						competitive programming and with a passion for pushing the boundaries of computer
						science.
					</p>

					<p
						class="transition duration-300 ease hvr-forward text-justify border-l-8 pl-2 mt-8 border-neutral-400 dark:border-neutral-600 rounded hover:border-blue-600 dark:hover:border-orange-500 hover:border-opacity-80"
					>
						Began my coding journey when I was 10 years old and have been passionate about it ever
						since, building the future one line at a time…
					</p>
				</div>

				<div
					class="transition duration-500 md:-mt-4 flex md:flex-col justify-evenly md:justify-between md:gap-2 dark:fill-neutral-300"
				>
					<a
						class="hvr-grow z-10"
						href="https://github.com/Penca53"
						target="_blank"
						rel="noopener noreferrer"
						aria-label="My GitHub"
					>
						<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"
							><path
								d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
							/></svg
						>
					</a>

					<a
						class="hvr-grow z-10"
						href="https://itch.io/profile/penca53/"
						target="_blank"
						rel="noopener noreferrer"
						aria-label="My Itch.io"
					>
						<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"
							><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path
								d="M71.9 34.8C50.2 47.7 7.4 96.8 7 109.7v21.3c0 27.1 25.3 50.8 48.3 50.8 27.6 0 50.5-22.9 50.5-50 0 27.1 22.2 50 49.8 50s49-22.9 49-50c0 27.1 23.6 50 51.2 50h.5c27.6 0 51.2-22.9 51.2-50 0 27.1 21.5 50 49 50s49.8-22.9 49.8-50c0 27.1 23 50 50.5 50 23 0 48.3-23.8 48.3-50.8v-21.3c-.4-12.9-43.2-62.1-64.9-75C372.6 32.4 325.8 32 256 32S91.1 33.1 71.9 34.8zm132.3 134.4c-22 38.4-77.9 38.7-99.9 .3-13.2 23.1-43.2 32.1-56 27.7-3.9 40.2-13.7 237.1 17.7 269.2 80 18.7 302.1 18.1 379.8 0 31.7-32.3 21.3-232 17.8-269.2-12.9 4.4-42.9-4.6-56-27.7-22 38.5-77.9 38.1-99.9-.2-7.1 12.5-23.1 28.9-51.8 28.9a57.5 57.5 0 0 1 -51.8-28.9zm-41.6 53.8c16.5 0 31.1 0 49.2 19.8a436.9 436.9 0 0 1 88.2 0C318.2 223 332.9 223 349.3 223c52.3 0 65.2 77.5 83.9 144.5 17.3 62.2-5.5 63.7-34 63.7-42.2-1.6-65.5-32.2-65.5-62.8-39.3 6.4-101.9 8.8-155.6 0 0 30.6-23.3 61.2-65.5 62.8-28.4-.1-51.2-1.6-33.9-63.7 18.7-67 31.6-144.5 83.9-144.5zM256 270.8s-44.4 40.8-52.4 55.2l29-1.2v25.3c0 1.6 21.3 .2 23.3 .2 11.7 .5 23.3 1 23.3-.2v-25.3l29 1.2c-8-14.5-52.4-55.2-52.4-55.2z"
							/></svg
						>
					</a>

					<a
						class="hvr-grow z-10"
						href="mailto:pencapencator@gmail.com"
						aria-label="Send me an email"
					>
						<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"
							><path
								d="M0 3v18h24v-18h-24zm21.518 2l-9.518 7.713-9.518-7.713h19.036zm-19.518 14v-11.817l10 8.104 10-8.104v11.817h-20z"
							/></svg
						>
					</a>
				</div>
			</div>
		</div>
	</div>

	<Candles {isDarkTheme} on:candleClick={() => onCandleClick()} />
</div>

<!-- Switch is done using CSS (no need of Svelte if clauses) -->
<Stars />
<Clouds />
