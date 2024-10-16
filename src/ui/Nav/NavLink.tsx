import { ComponentPropsWithoutRef } from 'react'
import { IconNavHome, IconNavMovies, IconNavTVSeries } from '../../assets/icons/Icons'
import { NavLink } from 'react-router-dom'

type NavLinkProps = {
	to: string
	page: string
} & ComponentPropsWithoutRef<'a'>

export default function NavLinkBox({ to, page }: NavLinkProps) {
	return (
		<li className="nav__item">
			<NavLink to={to}>
				{page === 'trending' && <IconNavHome />}
				{page === 'movies' && <IconNavMovies />}
				{page === 'series' && <IconNavTVSeries />}
				{page === 'bookmarked' && <IconNavHome />}
			</NavLink>
		</li>
	)
}
