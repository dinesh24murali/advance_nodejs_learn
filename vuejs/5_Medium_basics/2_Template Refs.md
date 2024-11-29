# Template Refs

Similar to ReactJS `useRef`

```vue
<script setup>
import { useTemplateRef, onMounted } from 'vue'

// the first argument must match the ref value in the template
const input = useTemplateRef('my-input')

onMounted(() => {
  input.value.focus()
})
</script>

<template>
  <input ref="my-input" />
</template>
```

# Refs inside v-for

When ref is used inside v-for, the corresponding ref should contain an Array value, which will be populated with the elements after mount:

```vue
<script setup>
import { ref, useTemplateRef, onMounted } from 'vue'

const list = ref([
  /* ... */
])

const itemRefs = useTemplateRef('items')

onMounted(() => console.log(itemRefs.value))
</script>

<template>
  <ul>
    <li v-for="item in list" ref="items">
      {{ item }}
    </li>
  </ul>
</template>
```

# Function Refs

```vue
<input :ref="(el) => { /* assign el to a property or ref */ }">
```


# Ref on Component

ref can also be used on a child component. In this case the reference will be that of a component instance:

### Parent Component:
```js
<script setup>
import { useTemplateRef, onMounted } from 'vue'
import Child from './Child.vue'

const childRef = useTemplateRef('child')

onMounted(() => {
  // childRef.value will hold an instance of <Child />
  console.log({
    message: childRef.value.message
  })
})
</script>

<template>
  <Child ref="child" />
</template>
```

### Child component:

```js
<script>
import { ref } from 'vue';

export default {
  setup() {
    const message = ref("Hello, Vue!");
  }
}
</script>
<template>
    <h1>{{ message }}</h1>
</template>
```

The above will work fine since we are not using `<script setup>`. The functions present inside `<Child />` will also be accessible. They will be private to the parent.

```vue
<script setup>
import { ref } from 'vue'

const a = 1
const b = ref(2)

// Compiler macros, such as defineExpose, don't need to be imported
defineExpose({
  a,
  b
})
</script>
```
After passing them via `defineExpose`, they will be visible.

