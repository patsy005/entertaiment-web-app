import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './ui/Nav/Layout'
import Home from './pages/Home'
import { AppDispatch } from './store'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { fetchProductions } from './slices/productionsSlice'
import Movies from './pages/Movies'
import TVSeries from './pages/TVSeries'
import Bookmarked from './pages/Bookmarked'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute'

const router = createBrowserRouter([
	{
		element: (
			<ProtectedRoute>
				<Layout />
			</ProtectedRoute>
		),
		children: [
			{
				path: '/',
				element: <Home />,
			},
			{
				path: '/movies',
				element: <Movies />,
			},
			{
				path: '/series',
				element: <TVSeries />,
			},
			{
				path: '/bookmarked',
				element: <Bookmarked />,
			},
		],
	},
	{
		path: '/login',
		element: <Login />,
	},
	{
		path: '/signup',
		element: <SignUp />,
	},
])

function App() {
	const dispatch: AppDispatch = useDispatch()

	useEffect(() => {
		dispatch(fetchProductions())
	}, [dispatch])

	return <RouterProvider router={router}></RouterProvider>
}

export default App
