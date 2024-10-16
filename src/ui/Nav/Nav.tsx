import { IconLogo } from '../../assets/icons/Icons'
import NavLinkBox from './NavLink'

export default function Nav() {
	return (
		<div className="nav">
			<div className="nav__container d-flex justify-content-between align-items-center w-100">
				<div className="logo-icon">
					<IconLogo />
				</div>
				<ul className="d-flex nav__list">
					<NavLinkBox to="/" page="trending"></NavLinkBox>
					<NavLinkBox to="/movies" page="movies"></NavLinkBox>
					<NavLinkBox to="/series" page="series"></NavLinkBox>
					<NavLinkBox to="/bookmarked" page="bookmarked"></NavLinkBox>
				</ul>

				<div className="nav__user">
					<img src="/images/image-avatar.png" alt="" />
				</div>
			</div>
		</div>
	)
}
