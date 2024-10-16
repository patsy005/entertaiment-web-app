import { Outlet } from 'react-router-dom'
import Nav from './Nav'

export default function Layout() {
	return (
		// <div className="row">
		// 	<div className="container">
		<div className="app-container">
			<div className="col-12 col-xl-1">
				<Nav />
			</div>

			<main className="col-12 col-xl-11 main">
				<Outlet />
			</main>
		</div>
		// 	</div>
		// </div>
	)
}
