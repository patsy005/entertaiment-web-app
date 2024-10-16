import { useSelector } from 'react-redux'
import ProductionsList from '../components/ProductionsList/ProductionsList'
import SearchBar from '../components/SearchBar/SearchBar'
import SectionHeading from '../components/SectionHeading/SectionHeading'
import { selectBookmarkedMovies, selectBookmarkedTVSeries, selectSearchTerm } from '../slices/productionsSlice'
import SearchResults from '../components/SearchResults/SearchResults'

export default function Bookmarked() {
	const searchedTerm = useSelector(selectSearchTerm)

	return (
		<div className="home">
			<SearchBar placeholder="Search for bookmarked shows" />
			{searchedTerm && <SearchResults />}

			<section className="section">
				<SectionHeading heading="Bookmarked movies" />
				<ProductionsList selector={selectBookmarkedMovies} stringSelector="bookmarked movies" />
			</section>

			<section className="section">
				<SectionHeading heading="Bookmarked TV Series" />
				<ProductionsList selector={selectBookmarkedTVSeries} stringSelector="bookmarked series" />
			</section>
		</div>
	)
}
