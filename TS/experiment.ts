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

hotkeys.set({
	key: "g",
	short: "Toggle party key",
	long: "Toggle the key 'l' on the hotkeys",
	func: () => {
		hotkeys.hotkeys["l"]
			? hotkeys.remove("l")
			: hotkeys.set({
					key: "l",
					short: "PARTY TIME! 🎉🎊🎉🎊🎉🎊🎉🎊",
					long: "Change the background color to a random color",
					func: () => {
						document.body.style.backgroundColor = `rgb(${Math.floor(
							Math.random() * 256
						)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(
							Math.random() * 256
						)})`;
					},
					experimental: true,
			  });
	},
	experimental: false,
});
