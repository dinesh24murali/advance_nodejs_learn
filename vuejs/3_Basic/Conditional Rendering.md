# Conditional Rendering

## v-if

```vue
<h1 v-if="awesome">Vue is awesome!</h1>
```

## v-else

```vue
<button @click="awesome = !awesome">Toggle</button>

<h1 v-if="awesome">Vue is awesome!</h1>
<h1 v-else>Oh no 😢</h1>
```

# v-else-if

```vue
<div v-if="type === 'A'">
  A
</div>
<div v-else-if="type === 'B'">
  B
</div>
<div v-else-if="type === 'C'">
  C
</div>
<div v-else>
  Not A/B/C
</div>
```

## v-if on <template>
The rendered result won't have the `<template>` tag.
```vue
<template v-if="ok">
  <h1>Title</h1>
  <p>Paragraph 1</p>
  <p>Paragraph 2</p>
</template>
```

## v-show

`v-show` will use the css `display` property

```vue
<h1 v-show="ok">Hello!</h1>
```
v-show doesn't support the <template> element, nor does it work with v-else.

## v-if vs. v-show

Generally speaking, v-if has higher toggle costs while v-show has higher initial render costs. So prefer v-show if you need to toggle something very often, and prefer v-if if the condition is unlikely to change at runtime.

## v-if with v-for

It's not recommended to use v-if and v-for on the same element due to implicit precedence. Refer to style guide for details.

When v-if and v-for are both used on the same element, v-if will be evaluated first. 