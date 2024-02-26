import { Hotkeys } from "./hotkeys.ts";

let hotkeys = new Hotkeys();

hotkeys.set({
	key: "f",
	short: "Toggle Fullscreen",
	long: "Toggle Fullscreen",
	func: () => (document.body.style.backgroundColor = "#FF00FF"),
	experimental: false,
});

hotkeys.set({
	key: "r",
	short: "Interesting",
	long: "The quick brown fox jumps over the lazy dog",
	func: () => {
		document.body.style.backgroundColor = "#BADA55";
	},
	experimental: true,
});
