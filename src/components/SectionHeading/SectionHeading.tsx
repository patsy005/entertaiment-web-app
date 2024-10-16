import { useSelector } from 'react-redux'
import { selectSearchTerm } from '../../slices/productionsSlice'

type SectionHeadingProps = {
	heading: string
}

export default function SectionHeading({ heading }: SectionHeadingProps) {
	const searchedTerm = useSelector(selectSearchTerm)
	return <>{!searchedTerm && <h2 className="section-heading">{heading}</h2>}</>
}
