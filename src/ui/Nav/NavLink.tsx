import { ComponentPropsWithoutRef } from 'react'
import { IconNavHome, IconNavMovies, IconNavTVSeries } from '../../assets/icons/Icons'
import { NavLink } from 'react-router-dom'
import { AppDispatch } from '../../store'
import { useDispatch } from 'react-redux'
import { setSearchTerm } from '../../slices/productionsSlice'

type NavLinkProps = {
	to: string
	page: string
} & ComponentPropsWithoutRef<'a'>

export default function NavLinkBox({ to, page }: NavLinkProps) {
	const dispatch: AppDispatch = useDispatch()

	const handleClearSearch = () => {
		dispatch(setSearchTerm(''))
	}
	return (
		<li className="nav__item">
			<NavLink to={to} onClick={handleClearSearch}>
				{page === 'trending' && <IconNavHome />}
				{page === 'movies' && <IconNavMovies />}
				{page === 'series' && <IconNavTVSeries />}
				{page === 'bookmarked' && <IconNavHome />}
			</NavLink>
		</li>
	)
}
