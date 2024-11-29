# Form Input Bindings

Follow the [documentation](https://vuejs.org/guide/essentials/forms.html#form-input-bindings) regarding how to bind for individual form components.

When dealing with forms on the frontend, we often need to sync the state of form input elements with corresponding state in JavaScript.

## Bind value alone to input
```js
const message = ref("Hello, Vue!");
```
```vue
<input :value="message" />
```

## v-model - two way binding

```vue
<input v-model="message" />
```
## Using reactive:
```js
const textInput = reactive({
    input: 'Input'
});
```
```vue
<input v-model="textInput.input" />
```
# Complete example
```vue
<script>
import { ref, reactive } from 'vue';

export default {
  setup() {
    const message = ref("Hello, Vue!");
    const text = ref("Hello, Vue!");
    const textInput = reactive({
        input: 'Input'
    });

    return { message,text, textInput };
  }
};
</script>
<template>
    <h1>Message: {{ message }}</h1>
    <h1>Text: {{ text }}</h1>
    <h1>textInput: {{ textInput.input }}</h1>
    <input :value="message"  @input="event => message = event.target.value" />
    <input v-model="text" />
    <input v-model="textInput.input" />
</template>
```
