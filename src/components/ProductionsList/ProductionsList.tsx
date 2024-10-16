import { RootState } from '../../store'
import { useSelector } from 'react-redux'
import { ProductionType } from '../../slices/productionsSlice'
import ProductionItem from '../ProductionItem/ProductionItem'
import classNames from 'classnames'

export type ProductionsListProps = {
	selector: (state: RootState) => ProductionType[]
	stringSelector?: string
}

export default function ProductionsList({ selector, stringSelector }: ProductionsListProps) {
	const productions = useSelector(selector)

	const productionListBoxClasses = classNames('production-list__box d-flex flex-column', {
		'col-8': stringSelector === 'isTrending',
		'col-6 col-md-4 col-xl-3': stringSelector !== 'isTrending',
	})

	return (
		<div className={`production-list d-flex row production-list__${stringSelector}`}>
			{productions.map(production => (
				<div className={productionListBoxClasses} key={production.title}>
					<ProductionItem production={production} />
				</div>
			))}
		</div>
	)
}
