# JavaScript: Course 5 - Arrays and String Manipulation

## 1. Working with Arrays
- JavaScript provides a variety of methods for manipulating arrays:
  - **Adding or Removing Elements:**
    ```javascript
    const arr = [1, 2, 3];
    arr.push(4); // Adds 4 at the end
    arr.pop(); // Removes the last element
    arr.unshift(0); // Adds 0 at the beginning
    arr.shift(); // Removes the first element
    ```
  - **Comparison:**
    - In Java:
      ```java
      List<Integer> list = new ArrayList<>(Arrays.asList(1, 2, 3));
      list.add(4); // Adds at the end
      list.remove(list.size() - 1); // Removes the last element
      list.add(0, 0); // Adds at the beginning
      list.remove(0); // Removes the first element
      ```

  - **Slicing and Splicing:**
    ```javascript
    const arr = [1, 2, 3, 4];
    console.log(arr.slice(1, 3)); // [2, 3] - Doesn't modify original array
    arr.splice(1, 2, 10, 20); // Replaces 2 elements starting at index 1
    console.log(arr); // [1, 10, 20, 4]
    ```
  - **Comparison:**
    - Java doesn’t have direct slicing but uses `subList`:
      ```java
      List<Integer> sublist = list.subList(1, 3);
      ```

---

## 2. String Manipulation
- JavaScript provides flexible methods for strings:
  - **Finding and Replacing:**
    ```javascript
    const str = "Hello, World!";
    console.log(str.indexOf("World")); // 7
    console.log(str.replace("World", "JavaScript")); // "Hello, JavaScript!"
    ```

  - **Comparison:**
    - Java uses methods from the `String` class:
      ```java
      String str = "Hello, World!";
      System.out.println(str.indexOf("World")); // 7
      System.out.println(str.replace("World", "Java")); // "Hello, Java!"
      ```

  - **Splitting and Joining:**
    ```javascript
    const str = "apple,banana,cherry";
    const arr = str.split(",");
    console.log(arr); // ["apple", "banana", "cherry"]
    console.log(arr.join(";")); // "apple;banana;cherry"
    ```

    - **Comparison:**
      - In Java:
        ```java
        String str = "apple,banana,cherry";
        String[] arr = str.split(",");
        System.out.println(String.join(";", arr)); // "apple;banana;cherry"
        ```

---

## Key Takeaways
- **Dynamic Arrays:** JavaScript arrays are more flexible and allow dynamic resizing, unlike Java’s fixed-size arrays.
- **String Methods:** Both JavaScript and Java have extensive string manipulation capabilities, but JavaScript’s methods are more integrated for web-based tasks.