const express = require('express');
const path = require('path');

const app = express();

const title = `Pets-&#7449;-Us`;
const companyName = `<div class="company-name">Pets-<div class="reverse">R</div>-Us</div>`;

app.engine('html', require('ejs').__express);

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');

app.use(express.static(path.join(__dirname, 'public')));

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
	res.render('index', {
		title: `${title} | Welcome to Pets-&#7449;-Us`,
		message: `Welcome to ${companyName}`,
		companyName: companyName,
	});
});

app.get('/grooming.html', (req, res) => {
	res.render('grooming', {
		title: `${title} | Grooming`,
		message: 'Lets get your pet groomed',
		companyName: companyName,
	});
});

app.listen(PORT, () => {
	console.log(`Server listening on port ${PORT}`);
});
