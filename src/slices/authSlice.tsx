import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

type AuthState = {
	token: string | null
	error: string | null
	isAuth: boolean
	isLoading: boolean
}

const initialState: AuthState = {
	token: null,
	error: null,
	isAuth: false,
	isLoading: false,
}

export const registerUser = createAsyncThunk(
	'auth/registerNewUser',
	async (userData: { email: string; password: string }) => {
		const response = await fetch('https://entertaiment-web-app-api.onrender.com/register', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(userData),
		})

		if (!response.ok) {
			const error = await response.json()
			throw new Error(error.message)
		}

		const data = await response.json()
		return data
	}
)

export const loginUser = createAsyncThunk('auth/loginUser', async (userData: { email: string; password: string }) => {
	const response = await fetch('https://entertaiment-web-app-api.onrender.com/login', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(userData),
	})

	if (!response.ok) {
		const error = await response.json()
		throw new Error(error.message)
	}
	const data = await response.json()
	return data
})

const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {},
	extraReducers: builder => {
		builder.addCase(registerUser.fulfilled, (state, action) => {
			state.token = action.payload.token
			state.error = null
			state.isAuth = true
		})
		builder.addCase(registerUser.rejected, (state, action) => {
			state.error = action.error.message === 'Failed to fetch' ? 'Server is down' : (action.error.message as string)
		})
		builder.addCase(loginUser.fulfilled, (state, action) => {
			state.token = action.payload.token
			state.isAuth = true
			state.error = null
		})
		builder.addCase(loginUser.rejected, (state, action) => {
			state.error = action.error.message === 'Failed to fetch' ? 'Server is down' : (action.error.message as string)
		})
		builder.addMatcher(
			action => action.type.endsWith('pending'),
			state => {
				state.isLoading = true
			}
		)
		builder.addMatcher(
			action => action.type.endsWith('fulfilled') || action.type.endsWith('rejected'),
			state => {
				state.isLoading = false
			}
		)
	},
})

export const selectError = (state: { auth: AuthState }) => state.auth.error
export const selectToken = (state: { auth: AuthState }) => state.auth.token
export const selectIsAuth = (state: { auth: AuthState }) => state.auth.isAuth
export const selectIsLoading = (state: { auth: AuthState }) => state.auth.isLoading

export default authSlice.reducer
