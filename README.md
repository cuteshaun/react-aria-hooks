# react-aria-hooks

A lightweight collection of accessible React hooks (a11y) for building inclusive web apps.

## ✨ Features

- 🔊 `useAnnouncer` — announce messages to screen readers via `aria-live`
- ♿️ Built with accessibility standards in mind
- ⚛️ Works with any React project (TypeScript-ready)

## 📦 Installation

```bash
npm install react-aria-hooks
```

## 🔧 Usage

```tsx
import { useAnnouncer } from "react-aria-hooks";

function Example() {
  const announce = useAnnouncer();

  const handleClick = () => {
    announce("Button clicked");
  };

  return <button onClick={handleClick}>Click me</button>;
}
```

## 💡 When to use useAnnouncer
Screen readers do not automatically announce visual changes unless focus is moved or special ARIA techniques are used. The `useAnnouncer` hook helps bridge that gap.

Use it when you want to announce changes that aren’t automatically communicated.

### ✅ Common use cases

#### 🔔 Notifications and flash messages
```ts
announce("Message sent successfully");
```
#### ❌ Form validation (focus doesn't move)
```ts
announce("Email field is required");
```
#### 🧠 Custom selects or dropdowns
```ts
announce("Sort by: Price (low to high)");
```
#### 🔄 Async updates
```ts
announce("Data loaded");
```
#### 🔍 Filter/search result counts
```ts
announce("7 results found");
```
#### 🧭 Pagination or tab navigation
```ts
announce("You are on page 2 of 10");
```

More hooks coming soon: `useFocusTrap`, `useVisuallyHidden`, `useSkipLink`, and more!

MIT © [Andrii Tsapko](https://github.com/cuteshaun)






