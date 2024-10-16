import { useSelector } from 'react-redux'
import { selectErrorProductions } from '../../slices/productionsSlice'

export default function ErrorMessage() {
	const productionsError = useSelector(selectErrorProductions)

	return (
		<div className="error-message">
			<p className="error-message__text">{productionsError}</p>
		</div>
	)
}
