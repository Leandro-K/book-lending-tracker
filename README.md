# Book Lending Tracker

Track lent books: what, to whom, and when it's due back.

**Live site:** https://book-lending-tracker-7yv.pages.dev

## Files

| File | Role |
|---|---|
| `style.css` | **CSS library** – reusable `ui-` classes (layout, card, form fields, buttons, table, badges, tabs, stats). Nothing in it is specific to this app. |
| `app.js` | **JavaScript library** – one reusable object, `UI`. Nothing in it is specific to this app. |
| `index.html` | The page. It uses **only** classes from `style.css` and **only** functions from the `UI` library. |

## Features

- Form: title, author, borrower, due date, genre – all required
- Validation with a custom message beside each invalid field
- Table: title, borrower, due date, genre, status (On loan / Overdue / Returned), actions (Mark returned, Delete)
- Summary: total loans and overdue loans
- Tabs: Lend a book, Loans, Summary
- Loans are saved in the browser (localStorage)

## JavaScript library – `UI`

| Function | What it does |
|---|---|
| `UI.form(form, { fields, onSubmit })` | Validates a form and shows each message beside its field (`<input id>-msg`) |
| `UI.rules.required / minLength / maxLength / pattern / date` | Validation rules, each with a custom message |
| `UI.table(tbody, rows, columns, emptyText)` | Renders table rows |
| `UI.tabs(root)` | Turns `.ui-tab` buttons into tabs; returns `{ select }` |
| `UI.store(key, fallback)` | `load()` / `save()` with localStorage |
| `UI.dates.parse / today / isPast / format` | Date helpers |
| `UI.el`, `UI.button`, `UI.badge`, `UI.uid` | Small DOM helpers |
