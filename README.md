# Product Hunt Clone Project (React + Redux)

### Version
0.1.0

### Tech

* [React] - A JavaScript library for building user interfaces.
* [Redux] - A predictable state container for JavaScript apps.
* [Webpack] - Module Bundler.
* [Twitter Bootstrap] - great UI boilerplate for modern web apps.
* [Sass] - An extension of CSS that adds power and elegance to the basic language.
* [node.js] - evented I/O for the backend.
* [Express] - fast node.js network app framework [@tjholowaychuk].

### Development

To properly access the Product Hunt API we use a [NGINX] server to make a proxy pass, so you can copy or link our configuration.

Make Symbolic Link:
```sh
$ ln -s producthuntapp/config/nginx/nginx-dev.conf /link/to/your/nginx/server/dev.conf
```

Add path on hosts (/etc/hosts):
```sh
dev.producthunt.com 127.0.0.1
```

Install Dependencies:
```sh
$ npm install
```

Start the app:
```sh
$ npm start
```

And access dev.producthunt.com (localhost:3000)
### Todos

 - Write Tests
 - Implement SignUp/SignIn


   [node.js]: <http://nodejs.org>
   [Twitter Bootstrap]: <http://twitter.github.com/bootstrap/>
   [express]: <http://expressjs.com>
   [React]: <https://facebook.github.io/react/>
   [Redux]: <http://redux.js.org/>
   [Webpack]: <https://webpack.github.io/>
   [Sass]: <http://sass-lang.com/>
   [NGINX]: <http://nginx.org/>
