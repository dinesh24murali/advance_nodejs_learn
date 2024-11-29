# Event handling

The usage would be `v-on:click="handler"` or with the shortcut, `@click="handler"`.

## Inline Handlers

Inline handlers are typically used in simple cases, for example:

```js
const count = ref(0)
```

```vue
<button @click="count++">Add 1</button>
<p>Count is: {{ count }}</p>
```

## Method Handlers

```js
const name = ref('Vue.js')

function greet(event) {
  alert(`Hello ${name.value}!`)
  // `event` is the native DOM event
  if (event) {
    alert(event.target.tagName)
  }
}
```

```vue
<!-- `greet` is the name of the method defined above -->
<button @click="greet">Greet</button>
```


## Calling Methods in Inline Handlers

```js
function say(message) {
  alert(message)
}
```

```vue
<button @click="say('hello')">Say hello</button>
<button @click="say('bye')">Say bye</button>
```

## Accessing Event Argument in Inline Handlers

```vue
<!-- using $event special variable -->
<button @click="warn('Form cannot be submitted yet.', $event)">
  Submit
</button>

<!-- using inline arrow function -->
<button @click="(event) => warn('Form cannot be submitted yet.', event)">
  Submit
</button>
```

# Event Modifiers

It is a very common need to call `event.preventDefault()` or `event.stopPropagation()` inside event handlers.

```
.stop
.prevent
.self
.capture
.once
.passive
```


```vue
<!-- the click event's propagation will be stopped -->
<a @click.stop="doThis"></a>

<!-- the submit event will no longer reload the page -->
<form @submit.prevent="onSubmit"></form>

<!-- modifiers can be chained -->
<a @click.stop.prevent="doThat"></a>

<!-- just the modifier -->
<form @submit.prevent></form>

<!-- only trigger handler if event.target is the element itself -->
<!-- i.e. not from a child element -->
<div @click.self="doThat">...</div>
```
> Order matters when using modifiers because the relevant code is generated in the same order. Therefore using @click.prevent.self will prevent click's default action on the element itself and its children, while @click.self.prevent will only prevent click's default action on the element itself.

The `.capture`, `.once`, and `.passive` modifiers mirror the options of the native addEventListener method:

```vue
<!-- use capture mode when adding the event listener     -->
<!-- i.e. an event targeting an inner element is handled -->
<!-- here before being handled by that element           -->
<div @click.capture="doThis">...</div>

<!-- the click event will be triggered at most once -->
<a @click.once="doThis"></a>

<!-- the scroll event's default behavior (scrolling) will happen -->
<!-- immediately, instead of waiting for `onScroll` to complete  -->
<!-- in case it contains `event.preventDefault()`                -->
<div @scroll.passive="onScroll">...</div>
```

# Key Modifiers

When listening for keyboard events, we often need to check for specific keys. Vue allows adding key modifiers for v-on or @ when listening for key events:

```vue
<!-- only call `submit` when the `key` is `Enter` -->
<input @keyup.enter="submit" />

<input @keyup.page-down="onPageDown" />
```
## Multiple keys
```vue
<!-- Alt + Enter -->
<input @keyup.alt.enter="clear" />

<!-- Ctrl + Click -->
<div @click.ctrl="doSomething">Do something</div>
```