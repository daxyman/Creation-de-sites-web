
# JavaScript Course 6 Summary

## Overview of the HTML DOM
- When a web page is loaded, the browser creates a **Document Object Model (DOM)**.
- Using the DOM, JavaScript can:
  - Access and modify HTML elements, attributes, and styles.
  - Add or remove HTML elements and attributes.
  - React to and create HTML events.

## Accessing HTML Elements
### Methods for Selecting Elements
- `getElementById(id)`  
  Example:
  ```javascript
  const element = document.getElementById("Titre");
  console.log(element);
  ```

- `getElementsByTagName(tagName)`  
  Returns a collection of elements with the specified tag name.
  ```javascript
  const elements = document.getElementsByTagName("p");
  ```

- `getElementsByClassName(className)`  
  Returns a collection of elements with the specified class name.

- `getElementsByName(name)`  
  Returns elements with the given `name` attribute.

- `querySelector(selector)`  
  Selects the first element matching the CSS selector.

- `querySelectorAll(selector)`  
  Returns all elements matching the CSS selector.

### Working with NodeList and HTMLCollection
- **NodeList**: Can contain different types of nodes (elements, text, etc.).
- **HTMLCollection**: Only contains HTML elements.
- Differences:
  - HTMLCollection is dynamic: updates with changes in the DOM.
  - NodeList is static: does not update with DOM changes (except for `childNodes`).

## Modifying HTML Content
### Properties
- `innerHTML`: Allows HTML insertion.
- `textContent`: For setting or retrieving plain text.
- Modifying attributes:
  ```javascript
  element.setAttribute("attribute", "value");
  element.getAttribute("attribute");
  ```

### Styling
- Modify styles using:
  ```javascript
  element.style.property = "value";
  ```

### Navigating the DOM
- Accessing siblings, children, and parent elements:
  - `nextSibling`, `previousSibling`
  - `parentNode`, `firstChild`, `lastChild`, `children`

## Adding and Removing Elements
- `document.createElement(tag)`: Creates a new HTML element.
- `document.appendChild(element)`: Appends an element as a child.
- `document.removeChild(element)`: Removes a child element.
- `document.replaceChild(newElement, oldElement)`: Replaces an element.

## Exercises
1. Create input fields for name, surname, and age, with a button that displays:  
   *"Bonjour! Je m'appelle [PRENOM] [NOM] et j'ai [AGE] ans."*
2. Add a button to toggle the visibility of a star image.

### Advanced Exercises
- Create a JavaScript file `script.js` to:
  1. Change an `<h1>` title to "Bienvenue dans le monde du DOM!"
  2. Add the `.highlight` class to paragraphs with the `.description` class.
  3. Modify the 3rd list item to display "Item Modifié".
  4. Add a new `<li>` with the text "Nouvel Item".
  5. Update the paragraph with ID `texte` to display "Texte mis à jour".
  6. Change the background color of the element with ID `conteneur` to `lightblue`.

