import { config } from '@onflow/fcl';
// import { config } from "@onflow/config";

config()
	.put('app.detail.title', 'Flow FCL SvelteKit Boilerplate 2.0.0')
	.put('app.detail.icon', 'https://images2.imgbox.com/a8/1a/kyO4npdI_o.png')
	.put('accessNode.api', import.meta.env.VITE_ACCESS_NODE_API)
	.put('discovery.wallet', import.meta.env.VITE_DISCOVERY_WALLET)
	.put('0xProfile', import.meta.env.VITE_PROFILE_ADDRESS);

// config()
// .put('app.detail.title', 'Flow FCL SvelteKit Boilerplate 2.0.0')
// .put('app.detail.icon', 'https://unavatar.io/twitter/muttonia')
// .put('accessNode.api', 'https://rest-testnet.onflow.org')
// .put('discovery.wallet', 'https://fcl-discovery.onflow.org/testnet/authn')
// .put('0xProfile', 'https://fcl-discovery.onflow.org/testnet/authn');

// config(){
//   "app.detail.title": "FCL Quickstart for SvelteKit", // Shows user what dapp is trying to connect
//   "app.detail.icon": "https://unavatar.io/twitter/muttonia", // shows image to the user to display your dapp brand
//   "accessNode.api": import.meta.env.VITE_ACCESS_NODE_API,
//   "discovery.wallet": import.meta.env.VITE_DISCOVERY_WALLET,
//   "0xProfile": import.meta.env.VITE_PROFILE_ADDRESS
// }
