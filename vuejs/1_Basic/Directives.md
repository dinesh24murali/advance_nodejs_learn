# Directives

Directives are special attributes with the v- prefix. Vue provides a number of built-in directives, including v-html and v-bind.


```jsx
<p v-if="seen">Now you see me</p>
```


# Reactively update an HTML attribute

Some directives can take an "argument", denoted by a colon after the directive name. For example, the v-bind directive is used to reactively update an HTML attribute:

```jsx
<a v-bind:href="url"> ... </a>

<!-- shorthand -->
<a :href="url"> ... </a>
```

# v-on

Another example is the v-on directive, which listens to DOM events:

```jsx
<a v-on:click="doSomething"> ... </a>

<!-- shorthand -->
<a @click="doSomething"> ... </a>
```

# Dynamic Arguments

```jsx
<!--
Note that there are some constraints to the argument expression,
as explained in the "Dynamic Argument Value Constraints" and "Dynamic Argument Syntax Constraints" sections below.
-->
<a v-bind:[attributeName]="url"> ... </a>

<!-- shorthand -->
<a :[attributeName]="url"> ... </a>
```

When using in-DOM templates (templates directly written in an HTML file), you should also avoid naming keys with uppercase characters, as browsers will coerce attribute names into lowercase:

```jsx
<a :[someAttr]="value"> ... </a>
```

The above will be converted to :[someattr] in in-DOM templates. If your component has a someAttr property instead of someattr, your code won't work. Templates inside Single-File Components are not subject to this constraint.

## Dynamic event name

```jsx
<a v-on:[eventName]="doSomething"> ... </a>

<!-- shorthand -->
<a @[eventName]="doSomething"> ... </a>
```
