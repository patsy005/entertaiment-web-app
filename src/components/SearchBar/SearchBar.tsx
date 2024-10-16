import { type ComponentPropsWithoutRef } from 'react'
import { IconSearch } from '../../assets/icons/Icons'
import { AppDispatch } from '../../store'
import { useDispatch } from 'react-redux'
import { filterProductions } from '../../slices/productionsSlice'

type SearchBarProps = {
	placeholder: string
} & ComponentPropsWithoutRef<'input'>

export default function SearchBar({ placeholder }: SearchBarProps) {
	const dispatch: AppDispatch = useDispatch()

	// const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
	// 	dispatch(filterProductions(e.target.value))
	// }
	return (
		<div className="search-bar d-flex align-items-start col-12">
			<div>
				<IconSearch className="" />
			</div>
			<div className="input-box">
				<input type="text" placeholder={placeholder} className="" />
			</div>
		</div>
	)
}
