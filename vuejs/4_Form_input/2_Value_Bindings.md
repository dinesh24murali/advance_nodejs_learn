# Value Bindings

sometimes we may want to bind the value to a dynamic property on the current active instance. We can use v-bind to achieve that. In addition, using v-bind allows us to bind the input value to non-string values.

## Checkbox
```vue
<input
  type="checkbox"
  v-model="toggle"
  true-value="yes"
  false-value="no" />
```

true-value and false-value are Vue-specific attributes that only work with v-model. Here the toggle property's value will be set to 'yes' when the box is checked, and set to 'no' when unchecked. You can also bind them to dynamic values using v-bind:

```vue
<input
  type="checkbox"
  v-model="toggle"
  :true-value="dynamicTrueValue"
  :false-value="dynamicFalseValue" />
```

## Radio

```vue
<input type="radio" v-model="pick" :value="first" />
<input type="radio" v-model="pick" :value="second" />
```

## Select Options

```vue
<select v-model="selected">
  <!-- inline object literal -->
  <option :value="{ number: 123 }">123</option>
</select>
```