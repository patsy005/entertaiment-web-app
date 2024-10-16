import { useSelector } from 'react-redux'
import ProductionsList from '../components/ProductionsList/ProductionsList'
import SearchBar from '../components/SearchBar/SearchBar'
import SectionHeading from '../components/SectionHeading/SectionHeading'
import TrendingListSlider from '../components/TrendingListSlider/TrendingListSlider'
import { selectAllProductions, selectIsTrending, selectSearchTerm } from '../slices/productionsSlice'
import SearchResults from '../components/SearchResults/SearchResults'

export default function Home() {
	const searchedTerm = useSelector(selectSearchTerm)

	return (
		<div className="home">
			<SearchBar placeholder="Search for movies or TV series" />
			{searchedTerm && <SearchResults />}

			{!searchedTerm && (
				<section className="section section__slider">
					<SectionHeading heading="Trending" />
					<TrendingListSlider selector={selectIsTrending} stringSelector="isTrending" />
				</section>
			)}

			<section className="section">
				<SectionHeading heading="Recommended for you" />
				<ProductionsList selector={selectAllProductions} stringSelector="all" />
			</section>
		</div>
	)
}
