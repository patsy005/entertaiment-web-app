import { Outlet } from 'react-router-dom'
import Nav from './Nav'
import { useSelector } from 'react-redux'
import Spinner from '../../components/Spinner/Spinner'
import { selectErrorProductions, selectIsLoadingProductions } from '../../slices/productionsSlice'
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage'

export default function Layout() {
	const isLoading = useSelector(selectIsLoadingProductions)
	const productionsError = useSelector(selectErrorProductions)

	return (
		<div className="app-container">
			{isLoading && <Spinner className="page" />}
			{!isLoading && (
				<>
					<div className="col-12 col-xl-1 nav-box">
						<Nav />
					</div>

					<main className={`col-12 col-xl-11 main ${productionsError ? 'main__productions-error' : ''}`}>
						{productionsError !== '' && <ErrorMessage />}

						{productionsError === '' && <Outlet />}
					</main>
				</>
			)}
		</div>
	)
}
