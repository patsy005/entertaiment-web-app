import SearchBar from '../components/SearchBar/SearchBar'
import SectionHeading from '../components/SectionHeading/SectionHeading'
import { selectMovies } from '../slices/productionsSlice'
import ProductionsList from '../components/ProductionsList/ProductionsList'

export default function Movies() {
	return (
		<div className="movies">
			<SearchBar placeholder="Search for movies" />

			<section className="section">
				<SectionHeading heading="Movies" />
				<ProductionsList selector={selectMovies} stringSelector="movies" />
			</section>
		</div>
	)
}
