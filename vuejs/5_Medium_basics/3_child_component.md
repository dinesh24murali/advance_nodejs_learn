# Child component

Get props from parent. You can define props with `defineProps` function.

```vue
<script setup>

defineProps(['title'])

</script>
<template>
    <div>
      Title from parent:  {{ title }}
    </div>
</template>
```

### Parent component:


```vue
<script setup>
</script>
<template>
    <Child title="Some title" />
</template>
```

## Value to be passed to child is dynamic:

### Parent component
```vue
<script setup>
import { ref } from 'vue';

const count = ref(0);

</script>
<template>
    <Child :count="count" />
</template>
```
### Child component
```vue
<script setup>

defineProps(['count'])

</script>
<template>
    <div>
      Count from parent:  {{ count }}
    </div>
</template>
```

`defineProps` is a compile-time macro that is only available inside `<script setup>` and does not need to be explicitly imported. Declared props are automatically exposed to the template. `defineProps` also returns an object that contains all the props passed to the component, so that we can access them in JavaScript if needed:

```js
const props = defineProps(['title'])
console.log(props.title)
```

# Listening to Events


### Parent component

```vue
<script setup>
import {ref} from 'vue';
const count = ref(1)
<script>
<template>
    <div>
        {{ count }}
        <Child @child-click="count += 1"/>
    </div>
</template>
```

### Child component

```vue
<script setup>
import {ref} from 'vue';
const title = ref("Title")
<script>
<template>
  <div class="blog-post">
    <h4>{{ title }}</h4>
    <button @click="$emit('child-click')">Trigger parent</button>
  </div>
</template>
```

We can optionally declare emitted events using the `defineEmits` macro:

```vue
<!-- Child.vue -->
<script setup>
defineProps(['title'])
defineEmits(['enlarge-text'])
</script>
```


Similar to defineProps, defineEmits is only usable in <script setup> and doesn't need to be imported. It returns an emit function that is equivalent to the $emit method. It can be used to emit events in the <script setup> section of a component, where $emit isn't directly accessible:

```vue
<script setup>
const emit = defineEmits(['enlarge-text'])

emit('enlarge-text')
</script>
```

If you are not using <script setup>, you can declare emitted events using the emits option. You can access the emit function as a property of the setup context (passed to setup() as the second argument):

```vue
export default {
  emits: ['enlarge-text'],
  setup(props, ctx) {
    ctx.emit('enlarge-text')
  }
}
```

## Passing data to child component between tags

In child component you can use `<slot />` tag to access the data passed through the tags

**Child component**
```vue
<template>
  <div class="blog-post">
    <slot />
  </div>
</template>
```
**Parent component**
```vue
<template>
  <Child>Some text</Child>
</template>
```
`Some text` will be printed replacing `<slot />`.


