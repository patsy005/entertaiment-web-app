import { IconSearch } from '../../assets/icons/Icons'
import { AppDispatch } from '../../store'
import { useDispatch } from 'react-redux'
import { setSearchTerm } from '../../slices/productionsSlice'
import Input from '../Input/Input'

type SearchBarProps = {
	placeholder: string
}

export default function SearchBar({ placeholder }: SearchBarProps) {
	const dispatch: AppDispatch = useDispatch()

	const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
		dispatch(setSearchTerm(e.target.value))
	}
	return (
		<div className="search-bar d-flex align-items-start col-12">
			<div>
				<IconSearch className="" />
			</div>
			<div className="input-box">
				<Input type="text" placeholder={placeholder} className="input" name="search" onChange={handleSearch} />
			</div>
		</div>
	)
}
