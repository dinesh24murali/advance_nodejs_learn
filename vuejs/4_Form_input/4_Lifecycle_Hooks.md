# Lifecycle Hooks

## Registering Lifecycle Hooks

For example, the onMounted hook can be used to run code after the component has finished the initial rendering and created the DOM nodes:

```vue
<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  console.log(`the component is now mounted.`)
})
</script>
```