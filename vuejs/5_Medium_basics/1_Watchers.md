# Watchers

There are cases where we need to perform "side effects" in reaction to state changes.

```vue
<script setup>
import { ref, watch } from 'vue'

const question = ref('')

// watch works directly on a ref
watch(question, async (newQuestion, oldQuestion) => {
    console.log(" Question has changed: "+newQuestion)
})
</script>

<template>
  <p>
    Ask a yes/no question:
    <input v-model="question" />
  </p>
</template>
```

## Watch Source Types

watch's first argument can be different types of reactive "sources": it can be a ref (including computed refs), a reactive object, a getter function, or an array of multiple sources:

```js
const x = ref(0)
const y = ref(0)

// single ref
watch(x, (newX) => {
  console.log(`x is ${newX}`)
})

// getter
watch(
  () => x.value + y.value,
  (sum) => {
    console.log(`sum of x + y is: ${sum}`)
  }
)

// array of multiple sources
watch([x, () => y.value], ([newX, newY]) => {
  console.log(`x is ${newX} and y is ${newY}`)
})
```

You can't watch a property of a reactive object like this:

```js
const obj = reactive({ count: 0 })

// this won't work because we are passing a number to watch()
watch(obj.count, (count) => {
  console.log(`Count is: ${count}`)
})
```

Instead, use a getter:
```js
// instead, use a getter:
watch(
  () => obj.count,
  (count) => {
    console.log(`Count is: ${count}`)
  }
)
```

## Deep Watchers

When you call watch() directly on a reactive object, it will implicitly create a deep watcher - the callback will be triggered on all nested mutations:

```js
const obj = reactive({ count: 0 })

watch(obj, (newValue, oldValue) => {
  // fires on nested property mutations
  // Note: `newValue` will be equal to `oldValue` here
  // because they both point to the same object!
})

obj.count++
```

This should be differentiated with a getter that returns a reactive object - in the latter case, the callback will only fire if the getter returns a different object:
```js
watch(
  () => state.someObject,
  () => {
    // fires only when state.someObject is replaced
  }
)
```

You can, however, force the second case into a deep watcher by explicitly using the deep option:

```js
watch(
  () => state.someObject,
  (newValue, oldValue) => {
    // Note: `newValue` will be equal to `oldValue` here
    // *unless* state.someObject has been replaced
  },
  { deep: true }
)
```

# Eager Watchers

`watch` will get called when ever `source` changes and will run once when the component gets initialized.

```js
watch(
  source,
  (newValue, oldValue) => {
    // executed immediately, then again when `source` changes
  },
  { immediate: true }
)
```

# Once Watchers

Will trigger only once when the source changes for the first time.

```js
watch(
  source,
  (newValue, oldValue) => {
    // when `source` changes, triggers only once
  },
  { once: true }
)
```

# watchEffect

watchEffect combines dependency tracking and side effect into one phase. It automatically tracks every reactive property accessed during its synchronous execution. This is more convenient and typically results in terser code, but makes its reactive dependencies less explicit.

```js
watchEffect(async () => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${todoId.value}`
  )
  data.value = await response.json()
})
```
Here, the callback will run immediately, there's no need to specify immediate: true. During its execution, it will automatically track todoId.value as a dependency (similar to computed properties). Whenever todoId.value changes, the callback will be run again. With watchEffect(), we no longer need to pass todoId explicitly as the source value.

# [Side Effect Cleanup](https://vuejs.org/guide/essentials/watchers.html#side-effect-cleanup)

Sometimes we may perform side effects, e.g. asynchronous requests, in a watcher:

```js
watch(id, (newId) => {
  fetch(`/api/${newId}`).then(() => {
    // callback logic
  })
})
```

But what if id changes before the request completes? When the previous request completes, it will still fire the callback with an ID value that is already stale. Ideally, we want to be able to cancel the stale request when id changes to a new value.

We can use the onWatcherCleanup()  API to register a cleanup function that will be called when the watcher is invalidated and is about to re-run:

```js
import { watch, onWatcherCleanup } from 'vue'

watch(id, (newId) => {
  const controller = new AbortController()

  fetch(`/api/${newId}`, { signal: controller.signal }).then(() => {
    // callback logic
  })

  onWatcherCleanup(() => {
    // abort stale request
    controller.abort()
  })
})
```

Note that onWatcherCleanup is only supported in Vue 3.5+ and must be called during the synchronous execution of a watchEffect effect function or watch callback function: you cannot call it after an await statement in an async function.

Alternatively, an onCleanup function is also passed to watcher callbacks as the 3rd argument, and to the watchEffect effect function as the first argument:

```js
watch(id, (newId, oldId, onCleanup) => {
  // ...
  onCleanup(() => {
    // cleanup logic
  })
})

watchEffect((onCleanup) => {
  // ...
  onCleanup(() => {
    // cleanup logic
  })
})
```

# [Post Watchers](https://vuejs.org/guide/essentials/watchers.html#callback-flush-timing)

Let's say a source ref has changes a a side effect is triggered a DOM change. Normally if you try to access the DOM (that changed) from inside the watch callback it will have the old state. If we put `flush:'post'` it will call the watch callback after the DOM rendering is done.

```js
watch(source, callback, {
  flush: 'post'
})

watchEffect(callback, {
  flush: 'post'
})
```
Post-flush watchEffect() also has a convenience alias, watchPostEffect():
```js
import { watchPostEffect } from 'vue'

watchPostEffect(() => {
  /* executed after Vue updates */
})
```
# Sync Watchers
It's also possible to create a watcher that fires synchronously, before any Vue-managed updates:
```js
watch(source, callback, {
  flush: 'sync'
})

watchEffect(callback, {
  flush: 'sync'
})
```

Sync watchEffect() also has a convenience alias, watchSyncEffect():

```js
import { watchSyncEffect } from 'vue'

watchSyncEffect(() => {
  /* executed synchronously upon reactive data change */
})
```
# [Stopping a Watcher](https://vuejs.org/guide/essentials/watchers.html#stopping-a-watcher)
```js
const unwatch = watchEffect(() => {})

// ...later, when no longer needed
unwatch()
```