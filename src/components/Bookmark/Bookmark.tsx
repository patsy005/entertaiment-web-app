import { useDispatch } from 'react-redux'
import { IconBookMarkEmpty, IconBookMarkFilled } from '../../assets/icons/Icons'
import { AppDispatch } from '../../store'
import { toggleBookmark } from '../../slices/productionsSlice'

type BookmarkProps = {
	title: string
	isBookmarked: boolean
}

export default function Bookmark({ title, isBookmarked }: BookmarkProps) {
	const dispatch: AppDispatch = useDispatch()

	const bookmarkToggleHandler = () => {
		dispatch(toggleBookmark(title))
	}
	return (
		<div className="bookmark" onClick={bookmarkToggleHandler}>
			{isBookmarked && <IconBookMarkFilled />}
			{!isBookmarked && <IconBookMarkEmpty />}
		</div>
	)
}
