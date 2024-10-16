import SearchBar from '../components/SearchBar/SearchBar'
import SectionHeading from '../components/SectionHeading/SectionHeading'
import ProductionsList from '../components/ProductionsList/ProductionsList'
import { selectTVSeries } from '../slices/productionsSlice'

export default function TVSeries() {
	return (
		<div className="movies">
			<SearchBar placeholder="Search for TV series" />

			<section className="section">
				<SectionHeading heading="TV series" />
				<ProductionsList selector={selectTVSeries} stringSelector="TV series" />
			</section>
		</div>
	)
}
