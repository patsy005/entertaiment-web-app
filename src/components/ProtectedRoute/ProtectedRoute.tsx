import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { selectIsAuth } from '../../slices/authSlice'

export default function ProtectedRoute({ children }: { children: React.ReactNode }) {
	const isAuthenticated = useSelector(selectIsAuth)

	if (!isAuthenticated) {
		return <Navigate to="/login" replace />
	}

	return <>{children}</>
}
