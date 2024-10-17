import { useSelector } from 'react-redux'
import { selectIsAuth } from '../../slices/authSlice'
import { Navigate } from 'react-router-dom'

export default function ProtectedRoute({ children }: { children: React.ReactNode }) {
	const isAuthenticated = useSelector(selectIsAuth)

	if (!isAuthenticated) {
		return <Navigate to="/login" replace />
	}

	return <>{children}</>
}
