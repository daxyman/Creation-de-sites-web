# JavaScript: Course 3 - Comparisons with Java

## 1. Functions
- **Definition:**
  - Functions are reusable blocks of code that perform specific tasks.
  - JavaScript:
    ```javascript
    function greet(name) {
        return `Hello, ${name}!`;
    }
    ```
  - Java:
    ```java
    public static String greet(String name) {
        return "Hello, " + name + "!";
    }
    ```

- **Anonymous Functions:**
  - JavaScript supports anonymous functions (e.g., for callbacks).
    ```javascript
    const add = function (a, b) {
        return a + b;
    };
    ```
  - Java requires lambdas or functional interfaces for similar constructs:
    ```java
    BinaryOperator<Integer> add = (a, b) -> a + b;
    ```

---

## 2. Scopes and Closures
- **Scope:**
  - Variables in JavaScript can have global, function, or block scope:
    ```javascript
    {
        let blockScoped = "visible here";
        var globalScoped = "visible globally";
    }
    console.log(globalScoped); // Works
    console.log(blockScoped); // Error
    ```
  - In Java:
    ```java
    public static void example() {
        int blockScoped = 42; // Local to the method
    }
    ```

- **Closures:**
  - JavaScript functions can access variables from their lexical scope even after the outer function has executed:
    ```javascript
    function outer() {
        let count = 0;
        return function inner() {
            count++;
            return count;
        };
    }
    const counter = outer();
    console.log(counter()); // 1
    console.log(counter()); // 2
    ```

---

## 3. Control Flow with Advanced Loops
- JavaScript offers advanced loop constructs like `for...of` and `for...in`, unlike Java, which uses `for-each` or streams:
  ```javascript
  for (let value of [1, 2, 3]) {
      console.log(value);
  }