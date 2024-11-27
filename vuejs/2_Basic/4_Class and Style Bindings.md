# Class and Style Bindings

## Binding to Objects

We can pass an object to :class (short for v-bind:class) to dynamically toggle classes:

```vue
<div :class="{ active: isActive }"></div>
```

You can use `class` and `:class` at the same time for a tag.

```js
const isActive = ref(true)
const hasError = ref(false)
```

```vue
<div
  class="static"
  :class="{ active: isActive, 'text-danger': hasError }"
></div>
```
**Output:**
```html
<div class="static active"></div>
```

The bound object doesn't have to be inline:

```js
const classObject = reactive({
  active: true,
  'text-danger': false
})
```

```vue
<div :class="classObject"></div>
```

This will render:
```html
<div class="active"></div>
```

We can also use [computed property](https://vuejs.org/guide/essentials/computed.html).
```js
const isActive = ref(true)
const error = ref(null)

const classObject = computed(() => ({
  active: isActive.value && !error.value,
  'text-danger': error.value && error.value.type === 'fatal'
}))
```

```vue
<div :class="classObject"></div>
```

# Binding to Arrays

We can bind `:class` to an array to apply a list of classes:

```js
const activeClass = ref('active')
const errorClass = ref('text-danger')
```

```vue
<div :class="[activeClass, errorClass]"></div>
```
If you would like to also toggle a class in the list conditionally, you can do it with a ternary expression:
```vue
<div :class="[isActive ? activeClass : '', errorClass]"></div>
```
We can pass a object inside the array as well.
```vue
<div :class="[{ [activeClass]: isActive }, errorClass]"></div>
```

# With Components

When you use the class attribute on a component with a single root element, those classes will be added to the component's root element and merged with any existing class already on it.

For example, if we have a component named MyComponent with the following template:

```vue
<script setup>
</script>
<template>
    <div>
        <p class="foo bar">Hi!</p>
    </div>
</template>
```

Then add some classes when using it:

```vue
<!-- when using the component -->
<MyComponent class="baz boo" />
```
result:
```html
<p class="foo bar baz boo">Hi!</p>
```
If your component has multiple root elements, you would need to define which element will receive this class. You can do this using the $attrs component property:
```vue
<template>
<!-- MyComponent template using $attrs -->
<p :class="$attrs.class">Hi!</p>
<span>This is a child component</span>
</template>
```
result:
```html
<p class="baz">Hi!</p>
<span>This is a child component</span>
```

# Binding Inline Styles

## Binding to Objects

:style supports binding to JavaScript object values - it corresponds to an HTML element's style property:


```vue
<script setup>
const activeColor = ref('red')
const fontSize = ref(30)
</script>
<template>
<div :style="{ color: activeColor, fontSize: fontSize + 'px' }"></div>
</template>
```

```vue
<div :style="{ 'font-size': fontSize + 'px' }"></div>
```

```vue
<script setup>
const styleObject = reactive({
  color: 'red',
  fontSize: '30px'
})
</script>
<template>
<div :style="styleObject"></div>
</template>
```

## Binding to Arrays
```vue
<div :style="[baseStyles, overridingStyles]"></div>
```
## Multiple Values
```vue
<div :style="{ display: ['-webkit-box', '-ms-flexbox', 'flex'] }"></div>
```