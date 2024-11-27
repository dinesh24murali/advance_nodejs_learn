# Error handling

## [App level error handling](https://vuejs.org/guide/essentials/application.html#app-configurations)

The application instance exposes a .config object that allows us to configure a few app-level options, for example, defining an app-level error handler that captures errors from all descendant components:

```js
app.config.errorHandler = (err) => {
  /* handle error */
}
```
