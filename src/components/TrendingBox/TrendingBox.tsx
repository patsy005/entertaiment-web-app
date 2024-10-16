import data from '../../data.json'
import { ProductionType } from '../../slices/productionsSlice'
import ProductionInfo from '../ProductionInfo/ProductionInfo'
import ProductionItemBox from '../ProductionItemBox/ProductionItemBox'

console.log(data)

type MovieBoxProps = {
	production: ProductionType
	index: number
	currentIndex: number
}

export default function TrendingBox({ production, index, currentIndex }: MovieBoxProps) {
	return (
		<>
			<ProductionItemBox
				className={`justify-content-end trending-slide ${index === currentIndex ? 'active' : ''}`}
				production={production}>
				<ProductionInfo production={production} />
			</ProductionItemBox>
		</>
	)
}
