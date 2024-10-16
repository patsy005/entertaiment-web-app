import ProductionsList from '../components/ProductionsList/ProductionsList'
import SearchBar from '../components/SearchBar/SearchBar'
import SectionHeading from '../components/SectionHeading/SectionHeading'
import TrendingListSlider from '../components/TrendingListSlider/TrendingListSlider'
import { selectAllProductions, selectIsTrending } from '../slices/productionsSlice'

export default function Home() {
	return (
		<div className="home">
			<SearchBar placeholder="Search for movies or TV series" />

			<section className="section">
				<SectionHeading heading="Trending" />
				<TrendingListSlider selector={selectIsTrending} stringSelector="isTrending" />
			</section>

			<section className="section">
				<SectionHeading heading="Recommended for you" />
				<ProductionsList selector={selectAllProductions} stringSelector="all" />
			</section>
		</div>
	)
}
