# hotkeys

hotkeys module in TypeScript for easy to add hotkeys

##### Example

![Example](example.png)

##### Requirements

- `hotkeys.css` and `hotkeys.ts`
- load the css and typescript into html `head` tag

```html
<link rel="stylesheet" href="hotkeys.css">
<script defer type="module" src="hotkeys.ts"></script>
```

- verify you have no error in console

##### Usage

initialization

```typescript
import { Hotkeys } from "./hotkeys.ts";

let hotkeys = new Hotkeys();
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

keys names available

```typescript
for (const row of Hotkeys.KEYBOARD_KEYS) {
	for (const column of row) {
		console.log(column);
	}
}
```
