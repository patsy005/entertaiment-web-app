import SearchBar from '../components/SearchBar/SearchBar'
import SectionHeading from '../components/SectionHeading/SectionHeading'
import ProductionsList from '../components/ProductionsList/ProductionsList'
import { selectSearchTerm, selectTVSeries } from '../slices/productionsSlice'
import { useSelector } from 'react-redux'
import SearchResults from '../components/SearchResults/SearchResults'

export default function TVSeries() {
	const searchedTerm = useSelector(selectSearchTerm)

	return (
		<div className="movies">
			<SearchBar placeholder="Search for TV series" />
			{searchedTerm && <SearchResults />}

			<section className="section">
				<SectionHeading heading="TV series" />
				<ProductionsList selector={selectTVSeries} stringSelector="TV series" />
			</section>
		</div>
	)
}
