# JavaScript: Course 2 - Comparisons with Java

## 1. Expressions and Operations
- **Arithmetic Operations:**
  - JavaScript supports similar arithmetic operators as Java (`+`, `-`, `*`, `/`, `%`).
  - Operations on different types (e.g., string + number) can result in implicit type conversions in JavaScript:
    ```javascript
    let result = "Value: " + 5 * 2; // "Value: 10" (string concatenation)
    ```
    ```java
    String result = "Value: " + (5 * 2); // "Value: 10" (explicit grouping)
    ```

- **Operator Precedence:**
  - Similar rules apply in both languages, following mathematical conventions.
  - Example:
    ```javascript
    let result = ((25 - 3) % 4) * (4 + 10) % 5;
    ```
    In Java:
    ```java
    int result = ((25 - 3) % 4) * (4 + 10) % 5;
    ```

---

## 2. Boolean Logic
- **Logical Operators:**
  - JavaScript and Java use the same logical operators (`&&`, `||`, `!`), but JavaScript evaluates non-boolean values in a "truthy" or "falsy" context:
    ```javascript
    if ("Hello") console.log("Truthy!"); // Executes because non-empty strings are truthy
    ```
    In Java:
    ```java
    if ("Hello".length() > 0) System.out.println("Truthy!");
    ```

- **Bitwise Operators:**
  - Both languages share operators like `&`, `|`, `^`, but JavaScript operates on 32-bit integers internally.

---

## 3. Interacting with HTML
- JavaScript directly manipulates HTML using DOM (Document Object Model) methods:
  ```javascript
  document.getElementById("myElement").textContent = "Hello World!";