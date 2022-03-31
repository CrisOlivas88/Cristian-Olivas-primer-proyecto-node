const { path } = require('./app')
const app = require('./app')
const morgan = require('morgan')
const PORT = process.env.PORT || 3000

app.use(morgan('dev'))

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'hbs')

app.get('/', (req, res) => {
  res.render('Hola Mundo otra vez')
})

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
})
