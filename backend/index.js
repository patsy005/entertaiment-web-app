import express from 'express'
import cors from 'cors'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 5000

app.use(
	cors({
		origin: 'https://entertaiment-web-app-git-backend-patsy005s-projects.vercel.app',
		methods: ['GET', 'POST'],
	})
)
app.use(express.json())

const users = []

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
