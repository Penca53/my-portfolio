<script lang="ts">
	import './shooting-star.css';
	import './clouds.css';
	import './candle.css';
	import './transition.css';
	import { onMount } from 'svelte';
	// @ts-ignore
	import Typewriter from 'typewriter-effect/dist/core';

	let welcomeText: HTMLHeadingElement;

	let candle1: HTMLDivElement;
	let candle1__eyes_one: HTMLSpanElement;
	let candle1__eyes_two: HTMLSpanElement;
	let candle1__mouth: HTMLDivElement;

	let candle2: HTMLDivElement;
	let candle2__eyes_one: HTMLDivElement;
	let candle2__eyes_two: HTMLDivElement;
	let candle2__stick: HTMLDivElement;
	let candle2__fire: HTMLDivElement;

	let candle__smoke_one: HTMLDivElement;
	let candle__smoke_two: HTMLDivElement;

	let loading_screen: HTMLDivElement;

	const removeAnimation = (element: ElementCSSInlineStyle) => {
		element.style.animation = '';
	};

	let isDarkTheme = true;
	let isChangingTheme = false;
	let isLoading = true;
	const setLightTheme = () => {
		localStorage.theme = 'light';

		// Candle2
		candle2.style.animation = 'shake-left 2s linear';
		candle2.addEventListener('animationend', () => removeAnimation(candle2));

		candle2__eyes_one.style.animation = 'changeto-lower 2s linear';
		candle2__eyes_one.addEventListener('animationend', () => removeAnimation(candle2__eyes_one));

		candle2__eyes_two.style.animation = 'changeto-greater 2s linear';
		candle2__eyes_two.addEventListener('animationend', () => removeAnimation(candle2__eyes_two));

		candle2__stick.style.animation = 'stick-animation 2s linear';
		candle2__stick.addEventListener('animationend', () => removeAnimation(candle2__stick));

		// Default
		candle1__eyes_one.style.animation = 'blink-eyes-wait 3s infinite linear';
		candle1__eyes_two.style.animation = 'blink-eyes-wait 3s infinite linear';

		setTimeout(() => {
			candle2__fire.style.width = '16px';
			candle2__fire.style.height = '20px';
			document.documentElement.classList.remove('dark');
		}, (2000 * 72) / 100);
	};
	const setDarkTheme = () => {
		localStorage.theme = 'dark';

		// Candle1
		candle1.style.animation = 'expand-body 2s linear';
		candle1.addEventListener('animationend', () => removeAnimation(candle1));

		candle1__eyes_one.style.animation = 'blink-eyes 2s linear';
		candle1__eyes_one.addEventListener('animationend', () => removeAnimation(candle1__eyes_one));

		candle1__eyes_two.style.animation = 'blink-eyes 2s linear';
		candle1__eyes_two.addEventListener('animationend', () => removeAnimation(candle1__eyes_two));

		candle1__mouth.style.animation = 'uff 2s linear';
		candle1__mouth.addEventListener('animationend', () => removeAnimation(candle1__mouth));

		// Default
		candle2.style.animation = 'shake-wait 3s infinite linear';

		setTimeout(() => {
			candle2__fire.style.width = '0px';
			candle2__fire.style.height = '0px';
			document.documentElement.classList.add('dark');
		}, (2000 * 60) / 100);

		// Candle
		candle__smoke_one.style.animation = 'move-left 2s linear';
		candle__smoke_one.addEventListener('animationend', () => removeAnimation(candle__smoke_one));

		candle__smoke_two.style.animation = 'move-top 2s linear';
		candle__smoke_two.addEventListener('animationend', () => removeAnimation(candle__smoke_two));
	};

	const onCandleClick = () => {
		if (isChangingTheme) {
			return;
		}

		isChangingTheme = true;

		isDarkTheme = !isDarkTheme;
		if (isDarkTheme) {
			setDarkTheme();
		} else {
			setLightTheme();
		}

		setTimeout(() => {
			isChangingTheme = false;
		}, 3000);
	};

	onMount(() => {
		setTimeout(() => {
			loading_screen.classList.add('ld');
			loading_screen.classList.add('ld-slide-ttb-out');
		}, 2000);

		loading_screen.addEventListener('animationend', () => (loading_screen.style.display = 'none'));

		if (
			localStorage.theme === 'dark' ||
			(!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark').matches)
		) {
			isDarkTheme = true;
			document.documentElement.classList.add('dark');
		} else {
			isDarkTheme = false;
			document.documentElement.classList.remove('dark');
		}

		if (isDarkTheme) {
			// Default
			candle2.style.animation = 'shake-wait 3s infinite linear';
			candle2__fire.style.width = '0px';
			candle2__fire.style.height = '0px';
		} else {
			// Default
			candle1__eyes_one.style.animation = 'blink-eyes-wait 3s infinite linear';
			candle1__eyes_two.style.animation = 'blink-eyes-wait 3s infinite linear';
			candle2__fire.style.width = '16px';
			candle2__fire.style.height = '20px';
		}

		const typewriter = new Typewriter(welcomeText, {
			loop: true,
			delay: 75
		});

		typewriter
			.pauseFor(2500)
			.typeString('Welcome!')
			.pauseFor(2000)
			.deleteAll()
			.typeString('std::cout << "Hello I\'m Mirco!" << std::endl;')
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

<div
	bind:this={loading_screen}
	class="z-50 h-full w-full flex justify-center items-center absolute bg-zinc-600"
>
	<svg
		xmlns="http://www.w3.org/2000/svg"
		xmlns:xlink="http://www.w3.org/1999/xlink"
		style="margin: auto"
		width="200px"
		height="200px"
		viewBox="0 0 100 100"
		preserveAspectRatio="xMidYMid"
	>
		<g transform="translate(50 50)">
			<g transform="translate(-17 -17) scale(0.5)">
				<g>
					<animateTransform
						attributeName="transform"
						type="rotate"
						values="0;45"
						keyTimes="0;1"
						dur="0.29069767441860467s"
						begin="0s"
						repeatCount="indefinite"
					/><path
						d="M39.382737335030434 -7 L49.382737335030434 -7 L49.382737335030434 7 L39.382737335030434 7 A40 40 0 0 1 32.79754809959447 22.89805316298281 L32.79754809959447 22.89805316298281 L39.86861591145995 29.969120974848284 L29.969120974848284 39.86861591145995 L22.89805316298281 32.79754809959447 A40 40 0 0 1 7.000000000000006 39.382737335030434 L7.000000000000006 39.382737335030434 L7.000000000000007 49.382737335030434 L-7.000000000000001 49.382737335030434 L-7.000000000000002 39.382737335030434 A40 40 0 0 1 -22.898053162982805 32.79754809959448 L-22.898053162982805 32.79754809959448 L-29.96912097484828 39.868615911459955 L-39.86861591145995 29.969120974848284 L-32.79754809959447 22.89805316298281 A40 40 0 0 1 -39.382737335030434 7.000000000000009 L-39.382737335030434 7.000000000000009 L-49.382737335030434 7.00000000000001 L-49.382737335030434 -6.999999999999999 L-39.382737335030434 -7 A40 40 0 0 1 -32.79754809959448 -22.898053162982798 L-32.79754809959448 -22.898053162982798 L-39.868615911459955 -29.96912097484827 L-29.969120974848305 -39.86861591145994 L-22.898053162982826 -32.797548099594465 A40 40 0 0 1 -6.999999999999994 -39.382737335030434 L-6.999999999999994 -39.382737335030434 L-6.999999999999996 -49.382737335030434 L6.999999999999978 -49.38273733503044 L6.99999999999998 -39.38273733503044 A40 40 0 0 1 22.898053162982812 -32.79754809959447 L22.898053162982812 -32.79754809959447 L29.969120974848288 -39.86861591145995 L39.86861591145993 -29.969120974848302 L32.79754809959446 -22.898053162982826 A40 40 0 0 1 39.382737335030434 -6.9999999999999964 M0 -25A25 25 0 1 0 0 25 A25 25 0 1 0 0 -25"
						fill="#ff7f00"
					/></g
				></g
			>
			<g transform="translate(0 22) scale(0.4)">
				<g>
					<animateTransform
						attributeName="transform"
						type="rotate"
						values="45;0"
						keyTimes="0;1"
						dur="0.29069767441860467s"
						begin="-0.14534883720930233s"
						repeatCount="indefinite"
					/><path
						d="M39.382737335030434 -7 L49.382737335030434 -7 L49.382737335030434 7 L39.382737335030434 7 A40 40 0 0 1 32.79754809959447 22.89805316298281 L32.79754809959447 22.89805316298281 L39.86861591145995 29.969120974848284 L29.969120974848284 39.86861591145995 L22.89805316298281 32.79754809959447 A40 40 0 0 1 7.000000000000006 39.382737335030434 L7.000000000000006 39.382737335030434 L7.000000000000007 49.382737335030434 L-7.000000000000001 49.382737335030434 L-7.000000000000002 39.382737335030434 A40 40 0 0 1 -22.898053162982805 32.79754809959448 L-22.898053162982805 32.79754809959448 L-29.96912097484828 39.868615911459955 L-39.86861591145995 29.969120974848284 L-32.79754809959447 22.89805316298281 A40 40 0 0 1 -39.382737335030434 7.000000000000009 L-39.382737335030434 7.000000000000009 L-49.382737335030434 7.00000000000001 L-49.382737335030434 -6.999999999999999 L-39.382737335030434 -7 A40 40 0 0 1 -32.79754809959448 -22.898053162982798 L-32.79754809959448 -22.898053162982798 L-39.868615911459955 -29.96912097484827 L-29.969120974848305 -39.86861591145994 L-22.898053162982826 -32.797548099594465 A40 40 0 0 1 -6.999999999999994 -39.382737335030434 L-6.999999999999994 -39.382737335030434 L-6.999999999999996 -49.382737335030434 L6.999999999999978 -49.38273733503044 L6.99999999999998 -39.38273733503044 A40 40 0 0 1 22.898053162982812 -32.79754809959447 L22.898053162982812 -32.79754809959447 L29.969120974848288 -39.86861591145995 L39.86861591145993 -29.969120974848302 L32.79754809959446 -22.898053162982826 A40 40 0 0 1 39.382737335030434 -6.9999999999999964 M0 -25A25 25 0 1 0 0 25 A25 25 0 1 0 0 -25"
						fill="#343434"
					/></g
				></g
			>
			<g transform="translate(28 4) scale(0.3)">
				<g>
					<animateTransform
						attributeName="transform"
						type="rotate"
						values="0;45"
						keyTimes="0;1"
						dur="0.29069767441860467s"
						begin="-0.14534883720930233s"
						repeatCount="indefinite"
					/><path
						d="M39.382737335030434 -7 L49.382737335030434 -7 L49.382737335030434 7 L39.382737335030434 7 A40 40 0 0 1 32.79754809959447 22.89805316298281 L32.79754809959447 22.89805316298281 L39.86861591145995 29.969120974848284 L29.969120974848284 39.86861591145995 L22.89805316298281 32.79754809959447 A40 40 0 0 1 7.000000000000006 39.382737335030434 L7.000000000000006 39.382737335030434 L7.000000000000007 49.382737335030434 L-7.000000000000001 49.382737335030434 L-7.000000000000002 39.382737335030434 A40 40 0 0 1 -22.898053162982805 32.79754809959448 L-22.898053162982805 32.79754809959448 L-29.96912097484828 39.868615911459955 L-39.86861591145995 29.969120974848284 L-32.79754809959447 22.89805316298281 A40 40 0 0 1 -39.382737335030434 7.000000000000009 L-39.382737335030434 7.000000000000009 L-49.382737335030434 7.00000000000001 L-49.382737335030434 -6.999999999999999 L-39.382737335030434 -7 A40 40 0 0 1 -32.79754809959448 -22.898053162982798 L-32.79754809959448 -22.898053162982798 L-39.868615911459955 -29.96912097484827 L-29.969120974848305 -39.86861591145994 L-22.898053162982826 -32.797548099594465 A40 40 0 0 1 -6.999999999999994 -39.382737335030434 L-6.999999999999994 -39.382737335030434 L-6.999999999999996 -49.382737335030434 L6.999999999999978 -49.38273733503044 L6.99999999999998 -39.38273733503044 A40 40 0 0 1 22.898053162982812 -32.79754809959447 L22.898053162982812 -32.79754809959447 L29.969120974848288 -39.86861591145995 L39.86861591145993 -29.969120974848302 L32.79754809959446 -22.898053162982826 A40 40 0 0 1 39.382737335030434 -6.9999999999999964 M0 -25A25 25 0 1 0 0 25 A25 25 0 1 0 0 -25"
						fill="#7eff00"
					/></g
				></g
			></g
		>
	</svg>
</div>

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
					>
						<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"
							><path
								d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
							/></svg
						>
					</a>

					<a
						class="hvr-grow z-10"
						href="https://www.linkedin.com/in/mirco-mazzoni-022816219/"
						target="_blank"
						rel="noopener noreferrer"
					>
						<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"
							><path
								d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
							/></svg
						>
					</a>

					<a class="hvr-grow z-10" href="mailto:pencapencator@gmail.com">
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

	<div
		class="shadow hvr-grow-candle sm:hvr-grow-candle-sm md:hvr-grow-candle-md z-10 mb-4 mt-24 sm:mt-36 md:mt-48 scale-50 sm:scale-75 md:scale-100"
	>
		<button class="candles" on:click={() => onCandleClick()}>
			<div class="candle1" bind:this={candle1}>
				<div class="candle1__body">
					<div class="candle1__eyes">
						<span class="candle1__eyes-one" bind:this={candle1__eyes_one} />
						<span class="candle1__eyes-two" bind:this={candle1__eyes_two} />
					</div>
					<div class="candle1__mouth" bind:this={candle1__mouth} />
				</div>
				<div class="candle1__stick" />
			</div>

			<div class="candle2" bind:this={candle2}>
				<div class="candle2__body">
					<div class="candle2__eyes">
						<div class="candle2__eyes-one" bind:this={candle2__eyes_one} />
						<div class="candle2__eyes-two" bind:this={candle2__eyes_two} />
					</div>
				</div>
				<div class="candle2__stick" bind:this={candle2__stick} />
			</div>
			<div class="candle2__fire" bind:this={candle2__fire} />
			<div class="sparkles-one" />
			<div class="sparkles-two" />
			<div class="candle__smoke-one" bind:this={candle__smoke_one} />
			<div class="candle__smoke-two" bind:this={candle__smoke_two} />
		</button>
		<div class="floor" />
	</div>
</div>

<div class="hidden dark:block relative">
	<div class="night">
		<div class="shooting_star" />
		<div class="shooting_star" />
		<div class="shooting_star" />
		<div class="shooting_star" />
		<div class="shooting_star" />
		<div class="shooting_star" />
		<div class="shooting_star" />
		<div class="shooting_star" />
		<div class="shooting_star" />
		<div class="shooting_star" />
		<div class="shooting_star" />
		<div class="shooting_star" />
		<div class="shooting_star" />
		<div class="shooting_star" />
		<div class="shooting_star" />
		<div class="shooting_star" />
		<div class="shooting_star" />
		<div class="shooting_star" />
		<div class="shooting_star" />
		<div class="shooting_star" />
		<div class="shooting_star" />
		<div class="shooting_star" />
		<div class="shooting_star" />
		<div class="shooting_star" />
		<div class="shooting_star" />
		<div class="shooting_star" />
		<div class="shooting_star" />
		<div class="shooting_star" />
		<div class="shooting_star" />
		<div class="shooting_star" />
		<div class="shooting_star" />
		<div class="shooting_star" />
		<div class="shooting_star" />
		<div class="shooting_star" />
		<div class="shooting_star" />
		<div class="shooting_star" />
		<div class="shooting_star" />
		<div class="shooting_star" />
		<div class="shooting_star" />
		<div class="shooting_star" />
		<div class="shooting_star" />
		<div class="shooting_star" />
		<div class="shooting_star" />
		<div class="shooting_star" />
		<div class="shooting_star" />
		<div class="shooting_star" />
		<div class="shooting_star" />
		<div class="shooting_star" />
		<div class="shooting_star" />
		<div class="shooting_star" />
	</div>
</div>

<div class="block dark:hidden overflow-hidden h-full">
	<div class="cloud large cloud-1">
		<div />
		<div />
		<div />
		<div />
	</div>
	<div class="cloud normal cloud-2">
		<div />
		<div />
		<div />
		<div />
	</div>
	<div class="cloud small cloud-3">
		<div />
		<div />
		<div />
		<div />
	</div>
	<div class="cloud tiny cloud-4">
		<div />
		<div />
		<div />
		<div />
	</div>
	<div class="cloud large cloud-5">
		<div />
		<div />
		<div />
		<div />
	</div>
	<div class="cloud normal cloud-6">
		<div />
		<div />
		<div />
		<div />
	</div>
	<div class="cloud small cloud-7">
		<div />
		<div />
		<div />
		<div />
	</div>
	<div class="cloud tiny cloud-8">
		<div />
		<div />
		<div />
		<div />
	</div>
	<div class="cloud small cloud-9">
		<div />
		<div />
		<div />
		<div />
	</div>
	<div class="cloud normal cloud-10">
		<div />
		<div />
		<div />
		<div />
	</div>
	<div class="cloud tiny cloud-11">
		<div />
		<div />
		<div />
		<div />
	</div>
	<div class="cloud small cloud-12">
		<div />
		<div />
		<div />
		<div />
	</div>
	<div class="cloud tiny cloud-13">
		<div />
		<div />
		<div />
		<div />
	</div>
	<div class="cloud small cloud-14">
		<div />
		<div />
		<div />
		<div />
	</div>
	<div class="cloud large cloud-15">
		<div />
		<div />
		<div />
		<div />
	</div>
	<div class="cloud normal cloud-16">
		<div />
		<div />
		<div />
		<div />
	</div>
	<div class="cloud large cloud-17">
		<div />
		<div />
		<div />
		<div />
	</div>
	<div class="cloud tiny cloud-18">
		<div />
		<div />
		<div />
		<div />
	</div>
	<div class="cloud normal cloud-19">
		<div />
		<div />
		<div />
		<div />
	</div>
	<div class="cloud small cloud-20">
		<div />
		<div />
		<div />
		<div />
	</div>
</div>
