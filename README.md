# react-aria-hooks

A lightweight collection of accessible React hooks (a11y) for building inclusive web apps.

## 📣 What is `useAnnouncer`?

Screen readers do **not automatically announce visual updates** like “message sent” or “7 results found.” Unless focus moves or you use ARIA live regions, users may miss important information.

`useAnnouncer` fixes this by allowing you to programmatically send messages to screen readers — without changing focus or breaking layout.


## ✨ Features

- 🔊 `useAnnouncer` — announce messages to screen readers via `aria-live`
- ♿️ Built with accessibility standards
- ⚛️ Works with any React project (TypeScript-ready)


## 📦 Installation

```bash
npm install react-aria-hooks
```

## 🔧 Usage

```tsx
import { useAnnouncer } from "react-aria-hooks";
import { useState } from "react";

function SearchResults() {
  const announce = useAnnouncer();
  const [results, setResults] = useState(0);

  const handleSearch = () => {
    // Simulate search...
    const newResults = Math.floor(Math.random() * 10);
    setResults(newResults);
    announce(`${newResults} results found`);
  };

  return (
    <div>
      <button onClick={handleSearch}>Search</button>
      <p>Results: {results}</p>
    </div>
  );
}
```

## 💡 When to use Announcer
Use useAnnouncer when screen readers might miss dynamic updates, especially if:
- Nothing visually obvious changes.
- Focus stays in place.
- The update is visually clear, but not voiced.

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






