
# JavaScript Course 7 Summary

## JavaScript Events Overview
- Events allow JavaScript to interact with user actions or changes in the DOM.
- Common ways to define event listeners:
  - Inline attribute: `<element onclick="myScript">`
  - Property: `object.onclick = function(){myScript};`
  - Using `addEventListener`: `object.addEventListener("click", myScript);`

## Common Event Attributes
- `onclick`: Triggered when an element is clicked.
- `onmouseover` and `onmouseout`: Triggered when the mouse enters or leaves an element.
- `onkeydown` and `onkeyup`: Triggered when a key is pressed or released.

## Using `addEventListener()`
- Syntax:
  ```javascript
  element.addEventListener("event", function);
  ```
- Benefits:
  - Supports multiple event listeners for the same event.
  - Enables better separation of JavaScript and HTML.

### Example
```javascript
const button = document.getElementById("myButton");
button.addEventListener("click", function() {
    console.log("Button clicked!");
});
```

## Exercise: Form Validation
Create a registration form with the following fields:
1. **Name** (required, minimum 3 characters).
2. **Surname** (required, minimum 3 characters).
3. **Email** (required, must be a valid email address).
4. **Password** (required, minimum 6 characters).
5. **Password Confirmation** (must match the password).
6. **Gender** (choice between "Male" and "Female").
7. **Submit Button** ("Sign Up").

### Validation Requirements
- Ensure all required fields are filled.
- Validate the email format using a regular expression:
  ```javascript
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  emailRegex.test(string);
  ```
- Check that the password meets the minimum length and matches the confirmation.
- If validation fails:
  - Display an error message below the corresponding field.
  - Prevent form submission using the `onsubmit` attribute.

### Success Message
- If all validations pass, display a success message to the user.

