import { useSelector } from 'react-redux'
import { selectFilteredProductions, selectSearchTerm } from '../../slices/productionsSlice'

export default function SearchResults() {
	const searchedTerm = useSelector(selectSearchTerm)
	const selectedProductions = useSelector(selectFilteredProductions)

	return (
		<div className="searched-results">
			<p>
				Found {selectedProductions.length} results for '{searchedTerm}'
			</p>
		</div>
	)
}
