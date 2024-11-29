# Ref

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