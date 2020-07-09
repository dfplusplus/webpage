import App from './App.svelte';

var searchParams = new URLSearchParams(window.location.search);
let rankCode = searchParams.get("rank");
let rank = "default";

// -- possible ranks:
// support-K9xd
// expert-S46F
// mod-2ipk
// admin-6Sg3

if (rankCode=="support-K9xd") rank = "support";
if (rankCode=="expert-S46F") rank = "expert";
if (rankCode=="mod-2ipk") rank = "mod";
if (rankCode=="admin-6Sg3") rank = "admin";

const app = new App({
	target: document.body,
	props: {
		rank: rank
	}
});

export default app;