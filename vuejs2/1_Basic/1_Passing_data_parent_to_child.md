# Passing data from parent to child:

## Parent:
```vue
<template>
    <ChildComponent msg="Welcome to Your Vue.js App"/>
</template>

<script>
import ChildComponent from './components/ChildComponent.vue'

export default {
  name: 'App',
  components: {
    ChildComponent
  }
}
</script>
```

## Child component:

```vue
<template>
    <h1>{{ msg }}</h1>
</template>
<script>
export default {
  name: 'ChildComponent',
  props: {
    msg: String
  }
}
</script>
```