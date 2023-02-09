// It helps to access req.body
const bodyParser = require('body-parser') 

const errorController = require('./controllers/error')

const sequelize = require('./util/database')

const User = require('./User')
var cors = require('cors')

const app = express()

app.use(cors())

app.set('view engine', 'ejs')
app.set('views', 'views')

const adminRoutes = require('./routes/admin')
const shopRoutes = require('./routes/shop')
const userRoutes = require('./uusers')

app.use(bodyParser.json({extended:false}))
app.use(express.static(path.join(__dirname, 'public')))

app.use('/admin/', adminRoutes)
app.use(shopRoutes)

