# Text Interpolation

The most basic form of data binding is text interpolation using the "Mustache" syntax (double curly braces):

```jsx
<span>Message: {{ msg }}</span>
```

# [Raw HTML](https://vuejs.org/guide/essentials/template-syntax.html#raw-html)

The double mustaches interpret the data as plain text, not HTML. In order to output real HTML, you will need to use the v-html directive:

```jsx
<p>Using text interpolation: {{ rawHtml }}</p>
<p>Using v-html directive: <span v-html="rawHtml"></span></p>
```

Here we're encountering something new. The v-html attribute you're seeing is called a directive. Directives are prefixed with v- to indicate that they are special attributes provided by Vue, and as you may have guessed, they apply special reactive behavior to the rendered DOM. 

# Attribute Bindings

Mustaches cannot be used inside HTML attributes. Instead, use a v-bind directive:

```jsx
<div v-bind:id="dynamicId"></div>
```

The v-bind directive instructs Vue to keep the element's id attribute in sync with the component's dynamicId property. If the bound value is null or undefined, then the attribute will be removed from the rendered element.

### Short hand

Because v-bind is so commonly used, it has a dedicated shorthand syntax:

```jsx
<div :id="dynamicId"></div>
```

# Boolean Attributes

```jsx
<button :disabled="isButtonDisabled">Button</button>
```

# Dynamically Binding Multiple Attributes

If you have a JavaScript object representing multiple attributes that looks like this:

```js
const objectOfAttrs = {
  id: 'container',
  class: 'wrapper',
  style: 'background-color:green'
}
```

You can bind them to a single element by using v-bind without an argument:

```jsx
<div v-bind="objectOfAttrs"></div>
```

# Calling Functions

```jsx
<time :title="toTitleDate(date)" :datetime="date">
  {{ formatDate(date) }}
</time>
```

Functions called inside binding expressions will be called every time the component updates, so they should not have any side effects, such as changing data or triggering asynchronous operations.

# Restricted Globals Access

Template expressions are sandboxed and only have access to a restricted list of globals. The list exposes commonly used built-in globals such as Math and Date.

Globals not explicitly included in the list, for example user-attached properties on window, will not be accessible in template expressions. You can, however, explicitly define additional globals for all Vue expressions by adding them to app.config.globalProperties.
