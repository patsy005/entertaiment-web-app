import ProductionsList from '../components/ProductionsList/ProductionsList'
import SearchBar from '../components/SearchBar/SearchBar'
import SectionHeading from '../components/SectionHeading/SectionHeading'
import { selectBookmarkedMovies, selectBookmarkedTVSeries } from '../slices/productionsSlice'

export default function Bookmarked() {
	return (
		<div className="home">
			<SearchBar placeholder="Search for bookmarked shows" />

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
