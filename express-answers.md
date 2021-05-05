# Express Answers 🚝

Provide the following solutions with `code` snippets or `text`. The page is formated with boilerplate snippets to add `code` or `text`

- [✓] `1` What dependency do we use to create a server? (`text`)
```text
express
```
- [✓] `2` What dependency do we use to fetch data from an API? (`text`)
```text
axios
```
- [✓] `3` Provide a example for making a server with a home route. (`code`)
```js
import express from 'express';
const app = express();
app.get('/', (rq, rs) => rs.send('hello world'));
app.listen(8080)
```
- [✓] `4` Provide a route that uses `req.params`. (`code`)
```js
app.get('/:test?', (rq, rs) => rs.send(rq.params?.test || 'no test param given'))
```
- [✓] `5` Provide a route that uses some data and returns `json` to the client. (`code`)
```js
import axios from 'axios';
import colors from 'colors';
app.get('/gh/:user?', (rq, rs) => {
  const user = rq.params?.user || 'ga-avery';
  axios.get(`https://api.github.com/users/${user}`)
    .then(({ data }) => {
      rs.json(data);
    })
    .catch(error => console.log('[𝑥]'.red, error));
});
```
- [✓] `6` Provide a route that will be ideal for a `404` page. (`code`)
```js
app.get('/*', (_, rs) => rs.status(404).send('404'));
```
- [✓] `7` Where is a good location within our Express App to place the route for a `404` page. (`text`)
```text
this would be best placed at the bottom of all of our routing to give valid paths a chance to be seen before sending out the 404 response.
```
- [✓] `8` Provide a route that renders a *static* `index.html` file (`code`)
```js
// provided that there is a folder named public with index.html inside of it traveling to localhost/index.html should show this page
app.use(express.static('public'));

```
- [✓] `9` What dependency is used for Express Templating? (`text`)
```text
ejs
```
- [✓] `10` Provide a route that renders an `ejs` page. (`code`)
```js
// provided that ejs is already set as the view engine
// and that there is a view named index.ejs
app.get('/:name/:age', (rq, rs) => {
  const { name, age } = rq.params;
  rs.render('index.ejs', {name, age});
})
```
- [✓] `11` Provide an exmaple of an `ejs` page that includes `<%=` syntax for sending data to view template (`code`)
```ejs
<!doctype html>
<html>
<body>
  <h1>Hello <%= name %>, you are <%= age %> years old</h1>
</body>
</html>
```
