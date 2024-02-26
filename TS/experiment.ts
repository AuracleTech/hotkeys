import { hotkey_add } from "./hotkeys.ts";

hotkey_add("n", "Short", "Long description", () =>
	document.write("Hello, World!")
);

hotkey_add(
	"r",
	"Unfinished",
	"This featured has the unfinished flag",
	() => document.write("Hello, World!"),
	true
);
