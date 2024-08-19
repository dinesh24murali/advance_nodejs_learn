# Transfer Or share token between sub-domain using cookies

This document how you can test sharing cookies between sub-domain using cookie. In this example we will be using two react applications. One app will add a token in the cookie and redirect to the other domain. The other domain can read the cookie that was added by the first website.

1. There is a file called `/etc/hosts` at the root of the application. Open this file. You will already see `localhost` mapped with `127.0.0.1` in this file.

2. add the following below `localhost`. Here `app.localtest.me` and `apps.localtest.me` are sub-domains

```
127.0.0.1       app.localtest.me
127.0.0.1       apps.localtest.me
```

3. Any web server that you cna access with `localhost` can now be accessed with `app.localtest.me` and `apps.localtest.me`.

4. In the first app you can add the following code to add the cookie. We are using a plugin called `universal-cookie`:
```js
import Cookies from 'universal-cookie';

const date = new Date();
date.setDate(date.getDate() + 3);
const cookies = new Cookies(null, {
    path: '/',
    domain: '.localtest.me',
    expires: date,
});
cookies.set('transfer', 'token');
```
We need to set the domain as `.localtest.me` for the cookie, so that both `apps.localtest.me` and `app.localtest.me` can access the cookie. There are options to add constraints to access the cookie over only https.


5. At the application that wants to read the data add the following code:
```js
import Cookies from 'universal-cookie';

const cookies = new Cookies(null, { path: '/' });

const transferToken = cookies.get('transfer');
```