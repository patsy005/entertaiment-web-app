import express from 'express'
import cors from 'cors'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'

dotenv.config()

const app = express()
const PORT = process.env.PORT

const allowedOrigins = [
	'http://localhost:5000',
	'https://entertaiment-web-app-beta.vercel.app',
]

app.use(
	cors({
		origin: function (origin, callback) {
			if (!origin) return callback(new Error('Not allowed by CORS'))
			if (allowedOrigins.indexOf(origin) === -1) {
				const message = 'The CORS policy for this site does not allow access from the specified Origin.'
				return callback(new Error(message), false)
			}
			return callback(null, true)
		},
		methods: ['GET', 'POST'],
	})
)

app.use(express.json())

const users = []

const seedUser = async () => {
	const email = 'testuser@example.com'
	const password = 'pass123'

	const existingUser = users.find(user => user.email === email)
	if (!existingUser) {
		const hashedPassword = await bcrypt.hash(password, 10)
		users.push({
			email,
			password: hashedPassword,
		})
		console.log('Default user added:', email)
	}
}

seedUser()

const generateToken = id => {
	return jwt.sign({ id }, process.env.JWT_SECRET, {
		expiresIn: process.env.JWT_EXPIRES_IN,
	})
}

app.post('/register', async (req, res) => {
	const { email, password } = req.body

	const existingUser = users.find(user => user.email === email)
	if (existingUser) {
		return res.status(400).json({ message: 'User already exists' })
	}

	const hashedPassword = await bcrypt.hash(password, 10)

	const newUser = {
		email,
		password: hashedPassword,
	}
	users.push(newUser)

	const token = generateToken(newUser.email)

	res.status(201).json({ token })
})

app.post('/login', async (req, res) => {
	const { email, password } = req.body

	const user = users.find(user => user.email === email)
	if (!user) {
		return res.status(400).json({ message: 'User does not exist' })
	}

	const isPasswordCorrect = await bcrypt.compare(password, user.password)
	if (!isPasswordCorrect) {
		return res.status(400).json({ message: 'Invalid credentials' })
	}

	const token = generateToken(user.email)

	res.status(200).json({ token })
})

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`)
})
