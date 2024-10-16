import { ProductionType } from '../../slices/productionsSlice'
import ProductionItemBox from '../ProductionItemBox/ProductionItemBox'
import ProductionInfo from '../ProductionInfo/ProductionInfo'

type ProductionItem = {
	production: ProductionType
}

export default function ProductionItem({ production }: ProductionItem) {
	return (
		<>
			<ProductionItemBox production={production} className="justify-content-center" />
			<ProductionInfo production={production} />
		</>
	)
}
