import { IconCategoryMovie, IconCategoryTV, IconDot } from '../../assets/icons/Icons'
import { ProductionType } from '../../slices/productionsSlice'

type ProductionInfoProps = {
	production: ProductionType
}

export default function ProductionInfo({ production }: ProductionInfoProps) {
	return (
		<>
			<div className="movie-box__info d-flex align-items-center">
				<p>{production.year}</p>
				<IconDot />
				<div className="movie-box__info--category d-flex align-items-center">
					{production.category === 'Movie' && <IconCategoryMovie />}
					{production.category === 'TV series' && <IconCategoryTV />}
					<p>{production.category}</p>
				</div>
				<IconDot />
				<p className="movie-box__info--rating">{production.rating}</p>
			</div>
			<div className="movie-box__title">
				<h4>{production.title}</h4>
			</div>
		</>
	)
}
