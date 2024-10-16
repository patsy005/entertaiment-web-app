import { type ReactNode, useEffect, useMemo, useState } from 'react'
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
	type RegularImage = 'small' | 'medium' | 'large'
	type TrendingImage = 'small' | 'large'
	type ImageSize = RegularImage | TrendingImage
	const [imageSize, setImageSize] = useState<ImageSize>('small')

	useEffect(() => {
		const handleResize = () => {
			if (production.isTrending) {
				if (window.innerWidth > 768) {
					setImageSize('large')
				} else {
					setImageSize('small')
				}
			} else {
				if (window.innerWidth > 992) {
					setImageSize('large')
				} else if (window.innerWidth > 768) {
					setImageSize('medium')
				} else {
					setImageSize('small')
				}
			}
		}

		window.addEventListener('resize', handleResize)

		return () => {
			window.removeEventListener('resize', handleResize)
		}
	}, [])

	const handleMouseEnter = () => {
		setIsHovered(true)
	}

	const handleMouseLeave = () => {
		setIsHovered(false)
	}

	const productionUrl = useMemo(() => {
		if (production?.isTrending) {
			const trendingSize = imageSize as 'small' | 'large';
			return `thumbnails/${production?.thumbnail.trending[trendingSize]}`
		} else {
			const regularSize = imageSize as 'small' | 'medium' | 'large';
			return `thumbnails/${production?.thumbnail.regular[regularSize]}`
		}
	}, [production, imageSize])

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
