<svelte:head>
	<title>About</title>
</svelte:head>

<!-- svelte-ignore security-anchor-rel-noreferrer -->
<div class="container">
	<h1>About This dApp</h1>

	<p>
		This is a <a href="https://docs.onflow.org/fcl" target="_blank">FCL-powered</a>
		decentralized application (dApp) built on
		<a href="https://docs.onflow.org/fcl" target="_blank">Flow</a>
		by <a href="https://twitter.com/SolomonFoskaay" target="_blank"> Solomon Foskaay</a>
		<br />
		A Sveltkit 1.0+ version of
		<a href="https://github.com/muttoni/fcl-sveltekit-quickstart" target="_blank">
			Fcl Sveltekit Quickstart</a
		>.
	</p>

	<p>This dApp shows how to:</p>
	<ul>
		<li>Authenticate a user on the Flow blockchain.</li>
		<li>
			Import a contract to let a user create a profile and query the blockchain for their data.
		</li>
		<li>Let a user modify their profile and mutate the blockchain to save changes.</li>
	</ul>

	<p>Use this dApp as a starting template to build your very own web3 dApp, powered on Flow!</p>

	<h2>What Is Flow Blockchain?</h2>
	<p>
		<a href="https://onflow.org" target="_blank">Flow Blockchain</a> is a fast, decentralized, and
		developer-friendly blockchain, designed as the foundation for a new generation of games, apps,
		and the digital assets that power them.
		<br />
		Flow is based on a unique, multi-role architecture, and designed to scale without sharding, allowing
		for massive improvements in speed and throughput while preserving a developer-friendly, ACID-compliant
		environment.
	</p>
</div>
