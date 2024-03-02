# hotkeys

hotkeys module in TypeScript for easy to add hotkeys

##### Example

![Example](example.png)

##### Requirements

- get `hotkeys.scss` and `hotkeys.ts`

##### Usage

initialization

```typescript
import "../SCSS/hotkeys.scss";
import { Hotkeys } from "./hotkeys.ts";

const hotkeys = new Hotkeys();
```

create a hotkey

```typescript
hotkeys.set({
	key: "h",
	short: "Toggle Hotkeys",
	long: "Toggle the hotkeys modal display",
	func: () => hotkeys.toggle_modal(),
	experimental: false,
});
```

remove a hotkey

```typescript
hotkeys.remove("h");
```

print keys names available

```typescript
for (const row of Hotkeys.KEYBOARD_KEYS) {
	for (const column of row) {
		console.log(column);
	}
}
```
