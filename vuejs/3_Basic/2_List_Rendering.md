# List Rendering:

## v-for

```js
const items = ref([{ message: 'Foo' }, { message: 'Bar' }])
```

```vue
<li v-for="item in items">
  {{ item.message }}
</li>
```

`v-for` has access to `index`
```vue
<li v-for="(item, index) in items">
  {{ parentMessage }} - {{ index }} - {{ item.message }}
</li>
```

We can destructure
```vue
<li v-for="{ message } in items">
  {{ message }}
</li>

<!-- with index alias -->
<li v-for="({ message }, index) in items">
  {{ message }} {{ index }}
</li>
```

For nested `v-for`.
```vue
<li v-for="item in items">
  <span v-for="childItem in item.children">
    {{ item.message }} {{ childItem }}
  </span>
</li>
```

## v-for with an Object

```js
const myObject = reactive({
  title: 'How to do lists in Vue',
  author: 'Jane Doe',
  publishedAt: '2016-04-10'
})
```
```vue
<ul>
  <li v-for="value in myObject">
    {{ value }}
  </li>
</ul>
```
With object `key` and `index`.
```vue
<li v-for="(value, key, index) in myObject">
  {{ index }}. {{ key }}: {{ value }}
</li>
```

## v-for with a Range

```vue
<span v-for="n in 10">{{ n }}</span>
```

## v-for with v-if

> It's not recommended to use v-if and v-for on the same element due to implicit precedence. Refer to style guide for details.

When they exist on the same node, v-if has a higher priority than v-for. That means the v-if condition will not have access to variables from the scope of the v-for:

```vue
<!--
This will throw an error because property "todo"
is not defined on instance.
-->
<li v-for="todo in todos" v-if="!todo.isComplete">
  {{ todo.name }}
</li>
```

This can be fixed by moving v-for to a wrapping <template> tag (which is also more explicit):

```vue
<template v-for="todo in todos">
  <li v-if="!todo.isComplete">
    {{ todo.name }}
  </li>
</template>
```

# [Maintaining State with key](https://vuejs.org/guide/essentials/list.html#maintaining-state-with-key)

```vue
<div v-for="item in items" :key="item.id">
  <!-- content -->
</div>
```

## v-for with a Component

You can directly use v-for on a component, like any normal element (don't forget to provide a key):

```vue
<MyComponent v-for="item in items" :key="item.id" />
```

However, this won't automatically pass any data to the component, because components have isolated scopes of their own. In order to pass the iterated data into the component, we should also use props:

```vue
<MyComponent
  v-for="(item, index) in items"
  :item="item"
  :index="index"
  :key="item.id"
/>
```

## Array Change Detection​

### Mutation Methods​

Vue is able to detect when a reactive array's mutation methods are called and trigger necessary updates. These mutation methods are:

```js
push()
pop()
shift()
unshift()
splice()
sort()
reverse()
```

## Displaying Filtered/Sorted Results

```js
const numbers = ref([1, 2, 3, 4, 5])

const evenNumbers = computed(() => {
  return numbers.value.filter((n) => n % 2 === 0)
})
```
```vue
<li v-for="n in evenNumbers">{{ n }}</li>
```