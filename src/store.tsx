import { configureStore } from '@reduxjs/toolkit'
import productionsSlice from './slices/productionsSlice'
import authSlice from './slices/authSlice'

export const store = configureStore({
	reducer: {
		productions: productionsSlice,
		auth: authSlice,
	},
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
