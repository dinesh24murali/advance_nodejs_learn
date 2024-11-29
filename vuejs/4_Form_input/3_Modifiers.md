# Modifiers

## .lazy

By default, v-model syncs the input with the data after each input event (with the exception of IME composition as stated above). You can add the lazy modifier to instead sync after change events:

```vue
<!-- synced after "change" instead of "input" -->
<input v-model.lazy="msg" />
```

`msg` will update after you press enter or loose focus of the input.

## .number

typecast as a number

```vue
<input v-model.number="age" />
```

## .trim

```vue
<input v-model.trim="msg" />
```

