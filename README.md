# react-aria-hooks

A lightweight set of accessible React hooks (a11y) for building inclusive, screen reader–friendly web applications.

## 📣 What is `useAnnouncer`?

Screen readers **do not automatically announce dynamic updates** like “Message sent” or “7 results found.” Unless focus moves or an ARIA live region is used, these changes can go unnoticed.

The `useAnnouncer` hook enables you to **programmatically send messages to screen readers** — without disrupting the layout or moving focus.

## ✨ Features

* 🔊 `useAnnouncer` — announce messages via `aria-live` regions
* ♿️ Follows accessibility best practices (WAI-ARIA)
* ⚛️ Works in any React project (TypeScript-ready, zero dependencies)
* 🧹 Composable, tree-shakable, and easy to integrate

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

* Content updates without a focus change
* Screen readers might miss visual changes
* You want to notify users non-visually

### ✅ Examples

```ts
announce("Message sent successfully"); // Toasts or alerts
announce("Email field is required");   // Form errors
announce("Sort by: Price");            // Custom selects
announce("Data loaded");               // Async events
announce("7 results found");           // Search
announce("Page 2 of 10");              // Pagination
```

## 🛠️ Coming Soon

More accessible hooks are on the way:

* `useFocusTrap` – trap focus inside modals or drawers
* `useVisuallyHidden` – visually hide content but expose it to assistive tech
* `useSkipLink` – add skip-to-content links
* And more!

---

## 📄 License

MIT © [Andrii Tsapko](https://github.com/cuteshaun)
