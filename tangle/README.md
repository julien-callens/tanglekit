Below is an **updated `README.md`** that reflects the **latest simplified grammar** you’ve provided. This includes adjustments so that `<code>` blocks only allow **variable declarations** and removes references to complex statements (like `if` statements, function calls, etc.) in the `<code>` block. The **HTML-like portion** still supports **embedded expressions** (`{{ expression }}`), which can be **integers**, **booleans**, **strings**, or **names**.

---

# TangleKit

**An easy-to-use JS framework based on `.tngl` files**

TangleKit introduces a **Svelte-like** single-file component format, allowing you to create modular and maintainable UI
components. Each **`.tngl`** file can include:

1. An **optional** `<import>` block to import components or styles.
2. An **optional** `<props>` block to define which props (variables) can be passed in.
3. An **optional** `<code>` block with **simple** JavaScript-like variable declarations.
4. A **required** HTML-like block that supports **embedded expressions**.

For an EBNF grammar of the `.tngl` files, check out the [Tangle Parser](./src/g4/TangleParser.g4)  
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
> **`.tngl`** files are always named with CamelCase and export this name as a function for use in normal JS code.

Below is an overview of each block and its usage.

---

### 1) `<import>` Block

```jsx
<import>
  "./styles.css";
  NestedComponent from './NestedComponent.tngl';
</import>
```

- Import **CSS** files with **`"./styles.css";`**.
- Import other **TangleKit components** (i.e., `.tngl` files) using a **`<componentName> from <path>`** format.
- Everything inside `<import>` is added to the top-level of the generated code (e.g.,
  `import NestedComponent from './NestedComponent.tngl';` in JavaScript).

---

### 2) `<props>` Block

```jsx
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
> **`children`** is a special prop that can be exported if you plan to receive child content.

---

### 3) `<code>` Block

```jsx
<code>
  let total = 0;
  const label = "Hello TangleKit";
</code>
```

- Contains **only variable declarations** in this simplified grammar.
- You can declare variables (`let`, `const`), optionally assign a value, and terminate with a semicolon.
- These variables become **private** to the component unless used in your HTML-like block to bind data or
  handle events.

---

### 4) HTML-like Syntax (Required)

Finally, each `.tngl` file **must** contain an **HTML-like block** that TangleKit will render. For example:

```jsx
<div class="container">
  Hello, {{ label }}
</div>
```

Within this HTML-like syntax, you can:

- Use **`{{ expression }}`** to **inject dynamic data** (e.g., `{{ label }}`).
    - In the simplified grammar, an **expression** can be an **integer**, a **string**, a **boolean**, or a **name** (variable).

#### Nesting Components

If you imported a component `NestedComponent` from `./NestedComponent.tngl`, you can directly use it in your HTML:

```jsx
<NestedComponent someProp="hello" />
```

#### Self-closing Elements

You can also use self-closing elements:

```jsx
<img src="./image.png" />
```

---

### Syntax Overview

Since the grammar is **simplified**, here’s a quick summary:

1. **Imports** (`<import>`):
   ```jsx
   <import>
     "./styles.css";
     NestedComponent from './NestedComponent.tngl';
   </import>
   ```
2. **Props** (`<props>`):
   ```jsx
   <props>
     let optionalMessage = "Welcome to TangleKit";
     let requiredCount;
   </props>
   ```
3. **Code** (`<code>`):
   ```jsx
   <code>
     let localVar = 10;
     const anotherVar = "Value";
   </code>
   ```
4. **Elements** (HTML-like):
   ```jsx
   <div>
     <p>{{ localVar }}</p>
   </div>
   ```
    - **Attributes**:  
      `<p class="myClass" id={{ anotherVar }}>...</p>`
    - **Embedded Expressions**:  
      `{{ anotherVar }}` can be `int`, `bool`, `string`, or a variable name.

---

## Full Example

A small `.tngl` snippet demonstrating **all** sections:

```jsx
<import>
  "./styles.css";
  NestedComponent from './NestedComponent.tngl';
</import>

<props>
  let title = "Welcome";
  let count;
</props>

<code>
  let anotherVar = 42;
</code>

<div class="rootContainer">
  <h2>{{ title }}</h2>
  <p>Count = {{ count }}</p>
  <p>Another Var = {{ anotherVar }}</p>
  <NestedComponent />
</div>
```

In this example:

- We **import** a CSS file and a nested component.
- We define **two props** (`title`, `count`).
- We have a `<code>` block with a **single** variable declaration (`anotherVar`).
- The **HTML** portion shows how to reference `title`, `count`, and `anotherVar`, plus the usage of
  `<NestedComponent>`.

---

## Example Output

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

---

## Credits

**Created by** Julien Callens

Enjoy building with **TangleKit**.  
If you have any issues, feel free to open an issue or contribute via pull requests.
