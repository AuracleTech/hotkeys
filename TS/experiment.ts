import { Hotkeys } from "./hotkeys.ts";

let hotkeys = new Hotkeys();

hotkeys.set({
	key: "h",
	short: "Toggle Hotkeys",
	long: "Toggle the hotkeys modal",
	func: () => hotkeys.toggle_modal(),
	experimental: false,
});

hotkeys.set({
	key: "space",
	short: "Magenta Background",
	long: "Change the background color to magenta",
	func: () => (document.body.style.backgroundColor = "#FF00FF"),
	experimental: false,
});

hotkeys.set({
	key: "d",
	short: "Green Background",
	long: "Change the background color to green",
	func: () => {
		document.body.style.backgroundColor = "#BADA55";
	},
	experimental: true,
});

hotkeys.set({
	key: "a",
	short: "Toggle party key",
	long: "Toggle a new 'w' hotkeys",
	func: () => {
		hotkeys.hotkeys["w"]
			? hotkeys.remove("w")
			: hotkeys.set({
					key: "w",
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

for (const row of Hotkeys.KEYBOARD_KEYS) {
	for (const column of row) {
		hotkeys.set({
			key: column,
			short: `Log ${column}`,
			long: `Log the key '${column}' to the console`,
			func: () => console.log(`Pressed key '${column}'`),
			experimental: true,
		});
	}
}
