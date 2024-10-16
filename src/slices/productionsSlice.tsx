import { createAsyncThunk, createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../store'

type ThumbnailType = {
	regular: {
		small: string
		medium: string
		large: string
	}
	trending: {
		small: string
		large: string
	}
}

export type ProductionType = {
	category: string
	isBookmarked: boolean
	isTrending: boolean
	rating: string
	title: string
	year: number
	thumbnail: ThumbnailType
}

type ProductionsState = {
	productions: ProductionType[]
	isLoading: boolean
	error: string
	bookmarkedProductions: ProductionType[]
	searchTerm: string
}

const initialState: ProductionsState = {
	productions: [],
	isLoading: false,
	error: '',
	bookmarkedProductions: [],
	searchTerm: '',
}

export const fetchProductions = createAsyncThunk('productions/fetchProductions', async () => {
	const response = await fetch('/data.json')
	const data = await response.json()
	return data
})

const productionsSlice = createSlice({
	name: 'productions',
	initialState,
	reducers: {
		toggleBookmark: (state, action) => {
			state.productions.map(production => {
				if (production.title === action.payload) {
					production.isBookmarked = !production.isBookmarked

					if (production.isBookmarked) {
						state.bookmarkedProductions.push(production)
					} else {
						state.bookmarkedProductions = state.bookmarkedProductions.filter(prod => prod.title !== production.title)
					}
				}
			})
		},
		filterProductions: (state, action) => {
			state.productions.filter(production => production.title.includes(action.payload.toLowerCase()))
		},
		setSearchTerm: (state, action: PayloadAction<string>) => {
			state.searchTerm = action.payload
		},
	},
	extraReducers: builder => {
		builder.addCase(fetchProductions.fulfilled, (state, action) => {
			state.productions = action.payload
			state.bookmarkedProductions = action.payload.filter((production: ProductionType) => production.isBookmarked)
		})
		builder.addCase(fetchProductions.rejected, state => {
			state.error = 'Failed to fetch productions'
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
		builder.addMatcher(
			action => action.type.endsWith('rejected'),
			state => {
				state.error = 'Failed to fetch productions, please try again later'
			}
		)
	},
})

export const selectIsLoadingProductions = (state: RootState) => state.productions.isLoading
export const selectErrorProductions = (state: RootState) => state.productions.error
export const selectProductions = (state: RootState) => state.productions.productions
export const selectSearchTerm = (state: RootState) => state.productions.searchTerm

export const selectBookmarkedProductions = (state: RootState) => state.productions.bookmarkedProductions

export const selectFilteredProductions = createSelector(
	[selectProductions, selectSearchTerm],
	(productions, searchTerm) => {
		if (!searchTerm) return productions
		return productions.filter(production => production.title.toLowerCase().includes(searchTerm.toLowerCase()))
	}
)

export const selectBookmarkedFilteredProductions = createSelector(
	[selectBookmarkedProductions, selectSearchTerm],
	(bookmarkedProductions, searchTerm) => {
		if (!searchTerm) return bookmarkedProductions
		return bookmarkedProductions.filter(production => production.title.toLowerCase().includes(searchTerm.toLowerCase()))
	}
)

export const selectAllProductions = createSelector(selectFilteredProductions, productions => [...productions])

export const selectMovies = createSelector(selectFilteredProductions, productions =>
	productions.filter(production => production.category === 'Movie')
)

export const selectTVSeries = createSelector(selectFilteredProductions, productions =>
	productions.filter(production => production.category === 'TV Series')
)

export const selectIsTrending = createSelector(selectProductions, productions =>
	productions.filter(production => production.isTrending)
)

export const selectBookmarkedMovies = createSelector(selectBookmarkedFilteredProductions, productions =>
	productions.filter(production => production.category === 'Movie')
)

export const selectBookmarkedTVSeries = createSelector(selectBookmarkedFilteredProductions, productions =>
	productions.filter(production => production.category === 'TV Series')
)

export const { toggleBookmark, filterProductions, setSearchTerm } = productionsSlice.actions
export default productionsSlice.reducer
