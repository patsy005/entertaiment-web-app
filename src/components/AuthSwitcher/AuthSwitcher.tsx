import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { selectError } from '../../slices/authSlice'

type AuthSwitcherProps = {
	hasAccount: boolean
}
export default function AuthSwitcher({ hasAccount }: AuthSwitcherProps) {
	const serverError = useSelector(selectError)

	return (
		<>
			{hasAccount && !serverError && (
				<p className="auth-switcher">
					Already have an account? <Link to="/login">Login</Link>
				</p>
			)}

			{!hasAccount && !serverError && (
				<p className="auth-switcher">
					Don't have an account? <Link to="/signup">Sign Up</Link>
				</p>
			)}

			{!hasAccount && serverError && (
				<p className="auth-switcher auth-switcher__server-error">
					{serverError} <Link to="/signup">Sign Up</Link>
				</p>
			)}

			{hasAccount && serverError && (
				<p className="auth-switcher auth-switcher__server-error">
					{serverError} <Link to="/login">Login</Link>
				</p>
			)}
		</>
	)
}
