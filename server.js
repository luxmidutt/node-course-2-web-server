const express = require('express');
const hbs = require('hbs');

const port = process.env.PORT || 3000;
const app = express();

hbs.registerPartials(__dirname + '/views/partials')
app.set('view engine', 'hbs');

app.use(express.static(__dirname + '/public'));

hbs.registerHelper('getCurrentYear', () => {
  return new Date().getFullYear();
});

hbs.registerHelper('screamIt', (text) => {
  return text.toUpperCase();
});

app.get('/', (req, res) => {
res.render('home.hbs', {
  welcomeMessage : 'Weolcome here !!',
  pageTitle : 'Home Page',
})
});

app.get('/about', (req, res) => {
  res.render('about.hbs', {
    pageTitle : 'About Page',
  })
});

app.get('/projects', (req, res) => {
  res.render('projects.hbs' , {
    pageTitle : 'Projects Page'
  })

});

app.get('/bad', (req, res) => {
  res.send({
    arrorMessage : 'Unable to fulfil request.'
  });
});

app.listen(port, () => {
  console.log(`Server is up on port ${port}.`);
});
