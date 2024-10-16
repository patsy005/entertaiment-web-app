import SearchBar from '../components/SearchBar/SearchBar'
import SectionHeading from '../components/SectionHeading/SectionHeading'
import { selectMovies, selectSearchTerm } from '../slices/productionsSlice'
import ProductionsList from '../components/ProductionsList/ProductionsList'
import { useSelector } from 'react-redux'
import SearchResults from '../components/SearchResults/SearchResults'

export default function Movies() {
	const searchedTerm = useSelector(selectSearchTerm)
	return (
		<div className="movies">
			<SearchBar placeholder="Search for movies" />
			{searchedTerm && <SearchResults />}

			<section className="section">
				<SectionHeading heading="Movies" />
				<ProductionsList selector={selectMovies} stringSelector="movies" />
			</section>
		</div>
	)
}
