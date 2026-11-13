const LETTERS = /^[\p{L} .'-]+$/u;
const store = LendTrack.store("book-lending-tracker.loans", []);
const tabs = LendTrack.tabs(document.getElementById("tabs"));
let loans = store.load();

function update(next) {
  loans = next;
  store.save(loans);
  render();
}

const columns = [
  (loan) => [
    LendTrack.el("span", { class: "lt-strong", text: loan.title }),
    LendTrack.el("span", { class: "lt-block lt-small lt-muted", text: "by " + loan.author })
  ],
  (loan) => loan.borrower,
  (loan) => LendTrack.dates.format(loan.dueDate),
  (loan) => loan.genre,
  (loan) => LendTrack.badge(LendTrack.status(loan).text, LendTrack.status(loan).variant),
  (loan) =>
    LendTrack.el(
      "div",
      { class: "lt-row" },
      LendTrack.button(loan.returned ? "Undo return" : "Mark returned", "secondary", () => update(LendTrack.toggleReturned(loans, loan.id)), true),
      LendTrack.button("Delete", "danger", () => update(LendTrack.remove(loans, loan.id)), true)
    )
];

function render() {
  const summary = LendTrack.summary(loans);
  LendTrack.table(document.getElementById("loan-table-body"), LendTrack.sortByDue(loans), columns, "No books lent yet.");
  document.getElementById("total-loans").textContent = summary.total;
  document.getElementById("overdue-loans").textContent = summary.overdue;
  document.getElementById("loans-count").textContent = summary.total;
}

LendTrack.form(document.getElementById("loan-form"), {
  fields: {
    title: [LendTrack.rules.required("Please enter the book title."), LendTrack.rules.maxLength(120, "Title is too long (max 120).")],
    author: [LendTrack.rules.required("Please enter the author."), LendTrack.rules.pattern(LETTERS, "Only letters, spaces, . ' -")],
    borrower: [
      LendTrack.rules.required("Who borrowed it?"),
      LendTrack.rules.minLength(2, "Name must be at least 2 letters."),
      LendTrack.rules.pattern(LETTERS, "Only letters, spaces, . ' -")
    ],
    dueDate: [LendTrack.rules.required("Pick a due date."), LendTrack.rules.date("That date is not valid.")],
    genre: [LendTrack.rules.required("Choose a genre.")]
  },
  onSubmit(values) {
    update([...loans, LendTrack.create(values)]);
    tabs.select("panel-loans");
  }
});

render();
