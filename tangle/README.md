# TangleKit

[![repo](https://custom-icon-badges.demolab.com/badge/Repo-blue.svg?logo=repo)](https://github.com/julien-callens/tanglekit)

**An easy-to-use JS framework based on `.tngl` files**

TangleKit introduces a **Svelte-like** single-file component format, allowing you to create modular and maintainable UI
components. Each **`.tngl`** file can include:

1. An **optional** `<import>` block to import components or styles.
2. An **optional** `<props>` block to define which props (variables) can be passed in.
3. An **optional** `<code>` block with JavaScript-like syntax for logic, functions, conditionals, etc.
4. A **required** HTML-like block that supports embedded dynamic expressions and logic.

For a EBNF grammar of the `.tngl` files, check out the [Tangle Parser](./src/g4/TangleParser.g4)
and [Tangle Lexer](./src/g4/TangleLexer.g4) files.

Or check out the [Tangle EBNF](./TangleEBNF.ebnf) file for a more readable version of the grammar.

---

## Project setup

### (Re-)Building the Compiler

Use:

```shell
npm run build
```

This runs the **ANTLR** tool (via the included JAR) to compile the Tangle grammar and generate the parser/lexer in
JavaScript, enabling the framework to parse `.tngl` files.

> **Note**  
> On UNIX-based systems, you can paste that build command directly into your terminal.

---

## Usage

1. **Create a new Vite project** (or any project that supports Vite).
2. **Install TangleKit**:

   ```shell
   npm i tanglekit
   ```

3. **Add TangleKit's plugin** to your `vite.config.js`:

   ```js
   import { defineConfig } from 'vite'
   import { tanglePlugin } from 'tanglekit'
   
   export default defineConfig({
     plugins: [tanglePlugin()],
   });
   ```

### Local usage

If you're developing TangleKit locally:

1. Run `npm link` inside this TangleKit project.
2. In your desired Vite project, run `npm link tanglekit`.
3. Or, alternatively, run `npm pack` in TangleKit and install the generated `.tgz` file in your target project.

### Testing

Run:

```shell
npm run test
```

This uses **vitest** to test both the compiler and the runtime usage of `.tngl` files.

---

## Project usage

TangleKit works with files ending in **`.tngl`**. Think of these similar to **`.svelte`** or **`.vue`** single-file
components. Each file can contain up to four blocks:

1. **`<import>`** (optional)
2. **`<props>`** (optional)
3. **`<code>`** (optional)
4. **HTML-like** syntax (required)

> **Note**  
> **`.tngl`** files are always named with CamelCase and export this name as a function for use in normal js code.

Below is an overview of each block and its usage.

---

### 1) `<import>` Block

```
<import>
    "./styles.css";
    NestedComponent from './NestedComponent.tngl';
    AnotherNestedComponent from './AnotherNestedComponent.tngl';
</import>
```

- Import **CSS** files with **`"./styles.css";`**.
- Import other **TangleKit components** (i.e., `.tngl` files) using a **`<componentName> from <path>`** format.
- Everything inside `<import>` is added to the top-level of the generated code (e.g.,
  `import NestedComponent from './NestedComponent.tngl';` in JavaScript).

---

### 2) `<props>` Block

```
<props>
    let optionalProp = "I am optional";
    let requiredProp;
</props>
```

- Declares **props** (variables) that a **parent** component can inject.
- **Required** props have **no default** (e.g., `let requiredProp;`).
- **Optional** props have an **initial value** (e.g., `let optionalProp = "I am optional";`).

These become **exported** properties on the component, so that parent components can set them like
`<MyComponent requiredProp="..." />`.

> **Note**  
> **`children`** is a special prop that can be exported. This then supposed to be used in a non-self-closing
> component.  
> `<MyComponent requiredProp="..." >I am the children passed</MyComponent>`

---

### 3) `<code>` Block

```
<code>
    let counter = 0;
    
    if (counter < 5) {
        counter += 1;
    }

    function add(a, b) {
        return a + b;
    }

    // Comments are allowed
</code>
```

- Contains **JavaScript-like** logic.
- You can declare variables (`let`, `const`), define functions, run conditionals, etc.
- These variables and functions become **private** to the component unless used in your HTML-like block to bind data or
  handle events.
- TangleKit supports **single-line comments** (introduced by `//`) and typical assignments, increments (`counter++`),
  function calls, etc.

#### **If Statements**

```js
if (counter < 5) {
  counter += 1;
}
```

#### **Function Declarations**

```js
function doSomething() {
  // ...
}
```

#### **Variable Modification**

```js
count += 1;
```

#### **Function Calls**

```js
doSomething();
```

---

### 4) HTML-like Syntax (Required)

Finally, each `.tngl` file **must** contain an **HTML-like block** that TangleKit will render. For example:

```jsx
<div class={{ mainClass }}>
  <h1> Hello, {{ userName }} </h1>
  
  {{ if (counter > 5) }}
    <p>The counter is above five!</p>
  {{ else if (counter === 5) }}
    <p>The counter is exactly five!</p>
  {{ else }}
    <p>The counter is below five.</p>
  {{ /if }}
</div>
```

Within this HTML-like syntax, you can use:

- **`{{ expression }}`** to **inject dynamic data** (e.g., `{{ userName }}`).
- **Embedded conditionals**:
  ```jsx
  {{ if (someCondition) }}
    <span>Condition is true</span>
  {{ else }}
    <span>Condition is false</span>
  {{ /if }}
  ```
- **Pass attributes** that can also be dynamic:
  ```jsx
  <div class={{ dynamicClass }}>
    ...
  </div>
  ```

#### Nesting Components

If you imported a component `NestedComponent` from `./NestedComponent.tngl`, you can directly use it:

```html
<NestedComponent someProp="hello" />
```

#### Self-closing Elements

You can also use self-closing elements:

```html
<img src="./image.png" />
```

---

### Syntax Overview

TangleKit’s grammar supports the following constructs inside `<code>` or embedded statements:

1. **Variable Declarations**
   ```js
   let value = 5;
   const label = "Hello";
   ```
2. **Conditionals**
    - **Non-embedded** in `<code>`:
      ```js
      if (condition) {
        // ...
      }
      ```
    - **Embedded** in HTML:
      ```html
      {{ if (booleanExpression) }}
        ...
      {{ else if (anotherCondition) }}
        ...
      {{ else }}
        ...
      {{ /if }}
      ```
3. **Functions**
   ```js
   function add(a, b) {
     return a + b;
   }
   ```
4. **Function Calls**
   ```js
   add(5, 3);
   ```
5. **Increment/Decrement**
   ```js
   counter += 1;
   anotherVar--;
   ```
6. **Operators**
    - **Arithmetic**: `+ - * / %`
    - **Logical**: `&& || !`
    - **Comparison**: `=== !== < <= > >=`
7. **Variable Types**
    - **Integers** (e.g., `123`)
    - **Booleans** (`true` / `false`)
    - **Strings** (`"Hello"`, `'World'`)

---

## Full Example

A small `.tngl` snippet demonstrating **all** sections:

```jsx
<import>
  "./styles.css";
  NestedComponent from './NestedComponent.tngl';
</import>

<props>
  let optionalMessage = "Welcome to TangleKit";
  let requiredCount;
</props>

<code>
  // We'll keep track of clicks
  let clicks = 0;

  function increment() {
    clicks += 1;
    console.log("Clicked, total = ", clicks);
  }

  if (requiredCount < 10) {
    requiredCount += 1;
  }
</code>

<div>
  <h2>{{ optionalMessage }}</h2>
  <p>Count = {{ requiredCount }}</p>
  <p>Clicks = {{ clicks }}</p>

  <button onClick={{ increment }}>Click me</button>

  {{ if (requiredCount > 5) }}
    <NestedComponent someProp="Yes, it's above 5" />
  {{ else }}
    <NestedComponent someProp="No, it's 5 or below" />
  {{ /if }}
</div>
```

In this example:

- We **import** a CSS file and a nested component.
- We define **two props** (`optionalMessage`, `requiredCount`).
- We have **some code** to track clicks and increment `clicks`.
- Our HTML-like portion includes **dynamic placeholders** (`{{ ... }}`), an **embedded if**, and usage of
  `<NestedComponent>`.

---

## Exmaple Output

Basic input `.tngl` file:

```jsx
<import>
    "./styles.css";
    NestedComponent from './NestedComponent.tngl';
    AnotherNestedComponent from './AnotherNestedComponent.tngl';
</import>

<code>
    let variable = 'balls';
</code>

<div class='randomClass'>
        <p class={{variable}}>variable: {{variable}}</p>

        <NestedComponent prop="beans" prop2={{variable}} />
        <AnotherNestedComponent>
            <p>content of AnotherNestedComponent</p>
            test
            <AnotherNestedComponent>
                        <p>content of AnotherNestedComponent</p>
                        test
                    </AnotherNestedComponent>
        </AnotherNestedComponent>
</div>
```

The above `.tngl` file would be compiled to a **single JavaScript function**:

```js
import NestedComponent from "/src/components/NestedComponent.tngl";
import AnotherNestedComponent from "/src/components/AnotherNestedComponent.tngl";
export default function BasicSyntax() {
    let variable = "beans";

    const sQPZhoBT = document.createElement('div');
    sQPZhoBT.setAttribute('class', "randomClass");

    const CviKSbJJ = document.createElement('p');
    CviKSbJJ.setAttribute('class', variable);
    CviKSbJJ.innerHTML += "variable: ";
    CviKSbJJ.innerHTML += variable;
    sQPZhoBT.appendChild(CviKSbJJ);

    const nestedcomponent = NestedComponent({
        prop: null,
        prop2: variable
    });
    sQPZhoBT.appendChild(nestedcomponent);

    const anothernestedcomponent = AnotherNestedComponent({
        children: [ () => {
            const TIEmfiRt = document.createElement('p');
            TIEmfiRt.innerHTML += "content of AnotherNestedComponent";
            return TIEmfiRt
        }
        , () => {
            return document.createTextNode(" test ")
        }
        , () => {
            const anothernestedcomponent = AnotherNestedComponent({
                children: [ () => {
                    const ocXfgMKm = document.createElement('p');
                    ocXfgMKm.innerHTML += "content of AnotherNestedComponent";
                    return ocXfgMKm
                }
                , () => {
                    return document.createTextNode(" test ")
                }
                , ]
            });
            return anothernestedcomponent
        }
        , ]
    });
    sQPZhoBT.appendChild(anothernestedcomponent);

    return sQPZhoBT;
}
```

## Credits

**Created by** Julien Callens

Enjoy building with **TangleKit**.  
If you have any issues, feel free to open an issue or contribute via pull requests.
