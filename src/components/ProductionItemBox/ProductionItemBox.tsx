import { type ReactNode, useMemo, useState } from 'react'
import Bookmark from '../Bookmark/Bookmark'
import PlayButton from '../PlayButton/PlayButton'
import { ProductionType } from '../../slices/productionsSlice'
import classNames from 'classnames'

type ProductionItemBoxProps = {
	children?: ReactNode
	className?: string
	production: ProductionType
}

export default function ProductionItemBox({ children, className, production }: ProductionItemBoxProps) {
	const [isHovered, setIsHovered] = useState(false)

	const handleMouseEnter = () => {
		setIsHovered(true)
	}

	const handleMouseLeave = () => {
		setIsHovered(false)
	}

	const productionUrl = useMemo(() => {
		return production?.isTrending
			? `/public/thumbnails/${production?.thumbnail.trending.small}`
			: `/public/thumbnails/${production?.thumbnail.regular.small}`
	}, [production])

	const movieBoxStyle = {
		backgroundImage: isHovered
			? `linear-gradient(0deg, rgba(0, 0, 0, 0.50) 0%, rgba(0, 0, 0, 0.50) 100%), url(${productionUrl})`
			: `url(${productionUrl})`,
		backgroundColor: 'lightgray',
		backgroundSize: 'cover',
		backgroundPosition: 'center',
		backgroundRepeat: 'no-repeat',
	}

	const productionBoxClasses = classNames('movie-box d-flex flex-column', className, {
		hovered: isHovered,
		'trending-box': production.isTrending,
	})

	return (
		<div
			className={productionBoxClasses}
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
			style={movieBoxStyle}>
			<Bookmark title={production.title} isBookmarked={production.isBookmarked} />
			<PlayButton />
			{children}
		</div>
	)
}
