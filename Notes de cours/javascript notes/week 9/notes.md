
# JavaScript Course 9 Summary

## Storing Data in Browsers
JavaScript provides APIs for storing data on the client side, accessible only from the same domain:
- **sessionStorage**: Data persists during the browser session (until the tab or window is closed).
- **localStorage**: Data persists indefinitely, even after the browser is closed or the system is restarted.

### Key Methods
1. `setItem(key, value)`: Store a value.
2. `getItem(key)`: Retrieve a value.
3. `removeItem(key)`: Remove a specific key.
4. `clear()`: Clear all stored data.
5. `length`: Returns the number of stored items.
6. `key(index)`: Retrieve the key at a specific index.

### Example Usage
#### Storing and Retrieving Data
```javascript
sessionStorage.setItem('name', 'Alice');
localStorage.setItem('name', 'Bob');

console.log(sessionStorage.getItem('name')); // "Alice"
console.log(localStorage.getItem('name'));  // "Bob"
```

#### Removing Data
```javascript
sessionStorage.removeItem('name');
localStorage.removeItem('name');
sessionStorage.clear();
localStorage.clear();
```

## Differences Between `sessionStorage` and `localStorage`

| Property             | sessionStorage                              | localStorage                               |
|----------------------|---------------------------------------------|-------------------------------------------|
| **Duration**         | Persists during the browser session.        | Persists indefinitely.                    |
| **Scope**            | Specific to each tab or window.             | Accessible to all tabs/windows of a domain.|

## Working with Lists and Objects
### Storing Lists
```javascript
let list = ["One", "Two", "Three"];
localStorage.setItem("list", list.toString());

let storedList = localStorage.getItem("list").split(",");
storedList.push("Four");
localStorage.setItem("list", storedList.toString());
console.log(localStorage.getItem("list")); // "One,Two,Three,Four"
```

### Storing Objects
```javascript
const user = { id: 1, name: 'Alice', email: 'alice@example.com' };
localStorage.setItem('user', JSON.stringify(user));

const storedUser = JSON.parse(localStorage.getItem('user'));
console.log(storedUser.name); // "Alice"
```

## Best Practices
- Limit the size of stored data (typically 5–10 MB).
- Avoid storing sensitive data (e.g., passwords).
- Use mechanisms to verify data freshness and validity.

## Exercises
### Exercise 1: Basic localStorage
1. Create a webpage with two fields (name and age) and a button labeled "Save".
2. Save the entered values in `localStorage` when the button is clicked.
3. Add another button labeled "Show" that displays the stored values in an alert.

### Exercise 2: Session Tracking with `sessionStorage`
1. Create a webpage that tracks the number of times the user has reloaded it during the session.
2. Use `sessionStorage` to store and update this counter.
