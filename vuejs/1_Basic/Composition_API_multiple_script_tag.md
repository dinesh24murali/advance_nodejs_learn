
## Single script tag

In vue we have to keep our Javascript code in script tag. If we are using a single script tag we need to return a setup function

```vue
<script>
import { ref, onMounted } from 'vue';

export default {
  setup() {
    const message = ref("Hello, Vue!");
    const change = function () {
        message.value = "Hello, world!"
    }

    onMounted(() => {
      console.log("Component mounted! Message is:", message.value);
    });

    return { message,change };
  }
};
</script>
<template>
    <h1>{{ message }}</h1>
    <button @click="change()">Click</button>
</template>
```

## Two script tags

In vue for single file component we can have our javascript code in two script tags.
1. script tag with has `setup` attribute
2. script tag without `setup` attribute


```vue
<script setup>
import { ref, onMounted } from 'vue';

const message = ref("Hello, Vue!");

onMounted(() => {
  console.log("onMounted(), Component mounted! Message is:", message.value);
});

function change() {
  message.value = "Hello, change!"
}
</script>
<script>
function change3() {
  this.message = "Nice!!!";
}
</script>
<template>
    <h1>{{ message }}</h1>
    <button @click="change()">Click</button>
    <button @click="change3()">Click2</button>
    {{ message2 }}
</template>
```