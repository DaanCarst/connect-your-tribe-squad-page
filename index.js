// Importeer express uit de node_modules map
import express from 'express'

const url = 'https://whois.fdnd.nl/api/v1/member/daan-carstens'
const data = await fetch(url).then((response) => response.json())


const urlC = 'https://whois.fdnd.nl/api/v1/squad/squat-c-2022'
const dataC = await fetch(urlC).then((response) => response.json())
console.log(dataC)

const urlA = 'https://whois.fdnd.nl/api/v1/squad/squad-a-2022'
const dataA = await fetch(urlA).then((response) => response.json())
console.log(dataA)

const urlB = 'https://whois.fdnd.nl/api/v1/squad/squad-b-2022'
const dataB = await fetch(urlB).then((response) => response.json())
console.log(dataB)

const urlFDND = 'https://whois.fdnd.nl/api/v1/squad/founders-2021'
const dataFDND = await fetch(urlFDND).then((response) => response.json())
console.log(dataFDND)

// Maak een nieuwe express app aan
const app = express()

// Stel ejs in als template engine en geef de 'views' map door
app.set('view engine', 'ejs')
app.set('views', './views')

// Gebruik de map 'public' voor statische resources
app.use(express.static('public'))

// Maak een route voor de index
app.get('/', function (req, res) {
  // res.send('Hello World!')
  res.render('index', data)
})

app.get('/squadc', function (req, res) {
  // res.send('Hello World!')
  res.render('squadc', dataC)
})

app.get('/squada', function (req, res) {
  // res.send('Hello World!')
  res.render('squada', dataA)
})

app.get('/squadb', function (req, res) {
  // res.send('Hello World!')
  res.render('squadb', dataB)
})

app.get('/fdnd', function (req, res) {
  // res.send('Hello World!')
  res.render('fdnd', dataFDND)
})


// Stel het poortnummer in waar express op gaat luisteren
app.set('port', process.env.PORT || 8000)

// Start express op, haal het ingestelde poortnummer op
app.listen(app.get('port'), function () {
  // Toon een bericht in de console en geef het poortnummer door
  console.log(`Application started on http://localhost:${app.get('port')}`)
})
