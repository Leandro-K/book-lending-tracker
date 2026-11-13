# Book Lending Tracker

Track lent books: what, to whom, and when it's due back.

**Live site:** https://book-lending-tracker-7yv.pages.dev

## Libraries

This project uses only these two libraries, both made for it and published separately:

| Library | Repo | Loaded from |
|---|---|---|
| CSS library | [lt-css-library](https://github.com/Leandro-K/lt-css-library) | `https://cdn.jsdelivr.net/gh/Leandro-K/lt-css-library@v1.0.0/lt.css` |
| JS library | [lendtrack-js](https://github.com/Leandro-K/lendtrack-js) | `https://cdn.jsdelivr.net/gh/Leandro-K/lendtrack-js@v1.0.0/lendtrack.js` |

## Files

| File | Role |
|---|---|
| `index.html` | The page. Uses only `lt-` classes from the CSS library. |
| `style.css` | Empty – all styling comes from the CSS library. |
| `app.js` | Uses only the `LendTrack` library. |

## Features

- Form: title, author, borrower, due date, genre – all required
- Validation with a custom message beside each invalid field
- Table: title, borrower, due date, genre, status (On loan / Overdue / Returned), actions (Mark returned, Delete)
- Summary: total loans and overdue loans
- Tabs: Lend a book, Loans, Summary
- Loans are saved in the browser (localStorage)
