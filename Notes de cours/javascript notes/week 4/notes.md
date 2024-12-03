# JavaScript: Course 4 - Logical Operations, Conditionals, and Loops

## Summary of Week 4 (Course 4)
This course focuses on **logical operations, conditional statements, loops, and basic practical exercises**.

---

## 1. Logical Operations
- JavaScript supports logical operators similar to Java:
  - `&&` (AND), `||` (OR), and `!` (NOT).
  - Example in JavaScript:
    ```javascript
    if (a > 0 && b > 0) {
        console.log("Both are positive.");
    }
    ```
  - Equivalent in Java:
    ```java
    if (a > 0 && b > 0) {
        System.out.println("Both are positive.");
    }
    ```

---

## 2. Conditional Statements
- **If-else structure:**
  - Example in JavaScript:
    ```javascript
    if (x > 10) {
        console.log("x is greater than 10");
    } else {
        console.log("x is less than or equal to 10");
    }
    ```
  - Equivalent in Java:
    ```java
    if (x > 10) {
        System.out.println("x is greater than 10");
    } else {
        System.out.println("x is less than or equal to 10");
    }
    ```

- **Switch case:**
  - Example in JavaScript:
    ```javascript
    const fruit = "apple";
    switch (fruit) {
        case "apple":
            console.log("It's an apple.");
            break;
        case "banana":
            console.log("It's a banana.");
            break;
        default:
            console.log("Unknown fruit.");
    }
    ```
  - Equivalent in Java:
    ```java
    String fruit = "apple";
    switch (fruit) {
        case "apple":
            System.out.println("It's an apple.");
            break;
        case "banana":
            System.out.println("It's a banana.");
            break;
        default:
            System.out.println("Unknown fruit.");
    }
    ```

---

## 3. Loops
- **For loop:**
  - Example in JavaScript:
    ```javascript
    for (let i = 1; i <= 10; i++) {
        console.log(i);
    }
    ```
  - Equivalent in Java:
    ```java
    for (int i = 1; i <= 10; i++) {
        System.out.println(i);
    }
    ```

- **While loop:**
  - Example in JavaScript:
    ```javascript
    let i = 1;
    while (i <= 10) {
        console.log(i);
        i++;
    }
    ```
  - Equivalent in Java:
    ```java
    int i = 1;
    while (i <= 10) {
        System.out.println(i);
        i++;
    }
    ```

---

## 4. Practical Exercises
- **Example 1:** Check if a user is an adult (18 or older):
  ```javascript
  const age = parseInt(prompt("Enter your age:"));
  if (age >= 18) {
      console.log("You are an adult.");
  } else {
      console.log("You are a minor.");
  }