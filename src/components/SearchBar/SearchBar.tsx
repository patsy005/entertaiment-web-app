import { IconSearch } from '../../assets/icons/Icons'
import { AppDispatch } from '../../store'
import { useDispatch } from 'react-redux'
import { setSearchTerm } from '../../slices/productionsSlice'
import Input from '../Input/Input'

type SearchBarProps = {
	placeholder: string
	// onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export default function SearchBar({ placeholder }: SearchBarProps) {
	const dispatch: AppDispatch = useDispatch()

	const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
		// dispatch(filterProductions(e.target.value))
		dispatch(setSearchTerm(e.target.value))
	}
	return (
		<div className="search-bar d-flex align-items-start col-12">
			<div>
				<IconSearch className="" />
			</div>
			<div className="input-box">
				{/* <input type="text" placeholder={placeholder} className="" onChange={handleSearch} /> */}
				<Input type="text" placeholder={placeholder} className="input" onChange={handleSearch} />
			</div>
		</div>
	)
}
