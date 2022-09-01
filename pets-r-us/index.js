const express = require('express');
const path = require('path');

const app = express();

app.engine('html', require('ejs').__express);

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');

app.use(express.static(path.join(__dirname, 'public')));

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
   res.render('index', {
      title: 'Pets R Us',
      pageTitle: 'Welcome to Pets R Us',
      message: 'Welcome to Pets R Us'
   });
});

app.get('/grooming.html', (req, res) => {
	res.render('grooming', {
      title: 'Pets R Us',
      pageTitle: 'Grooming',
      message: 'Lets get your pet groomed'

   });
});

app.listen(PORT, () => {
   console.log(`Server listening on port ${PORT}`);
});