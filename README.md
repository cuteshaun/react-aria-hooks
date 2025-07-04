# react-aria-hooks

A lightweight collection of accessible React hooks (a11y) for building inclusive, screen-reader-friendly web applications.

## 📣 What is `useAnnouncer`?

Screen readers **do not automatically announce dynamic visual updates** like “Message sent” or “7 results found.” Unless you move focus or use ARIA live regions, these updates may go unnoticed.

The `useAnnouncer` hook solves this by allowing you to **programmatically announce messages to screen readers** — without moving focus or affecting layout.

## ✨ Features

* 🔊 `useAnnouncer` — announce messages via `aria-live` regions
* ♿️ Follows accessibility best practices and standards (WAI-ARIA)
* ⚛️ Works with any React project (TypeScript-ready, zero dependencies)
* 🧹 Easy to integrate, composable and tree-shakable

## 📦 Installation

```bash
npm install react-aria-hooks
```

## 🔧 Quick Start

```tsx
import { useAnnouncer } from "react-aria-hooks";
import { useState } from "react";

function SearchResults() {
  const announce = useAnnouncer();
  const [results, setResults] = useState(0);

  const handleSearch = () => {
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

## 💡 When to Use `useAnnouncer`

Use it when:

* Dynamic content updates without changing focus
* Screen readers may miss an update
* You want to notify the user without visual disruption

### ✅ Common Use Cases

* 🔔 Toasts or flash messages
  `announce("Message sent successfully");`

* ❌ Form validation (when focus doesn’t change)
  `announce("Email field is required");`

* 🧠 Custom selects / dropdowns
  `announce("Sort by: Price (low to high)");`

* 🔄 Async updates
  `announce("Data loaded");`

* 🔍 Search results
  `announce("7 results found");`

* 🗱 Pagination or tab switch
  `announce("You are on page 2 of 10");`

---

## 🛠️ Coming Soon

More accessible hooks on the way:

* `useFocusTrap` – trap focus in modals or drawers
* `useVisuallyHidden` – visually hide content while keeping it screen reader-accessible
* `useSkipLink` – create skip-to-content links
* And more!

---

## 📄 License

MIT © [Andrii Tsapko](https://github.com/cuteshaun)
