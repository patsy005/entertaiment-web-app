import { useSelector } from 'react-redux'
import { ProductionsListProps } from '../ProductionsList/ProductionsList'
import TrendingBox from '../TrendingBox/TrendingBox'
import { useCallback, useEffect, useRef, useState } from 'react'

export default function TrendingListSlider({ selector, stringSelector }: ProductionsListProps) {
	const productions = useSelector(selector)
	const [currentIndex, setCurrentIndex] = useState(0)
	const [isPaused, setIsPaused] = useState(false)
	const [isDragging, setIsDragging] = useState(false)
	const [startX, setStartX] = useState(0) // Start position of the mouse or touch
	const [translateX, setTranslateX] = useState(0) // Current translation during dragging
	const intervalRef = useRef<NodeJS.Timeout | null>(null)
	const [slideWidth, setSlideWidth] = useState(0)

	const nextSlide = useCallback(
		(prevIndex: number) => {
			return (prevIndex + 1) % productions.length
		},
		[productions.length]
	)

	const prevSlide = (prevIndex: number) => {
		return (prevIndex - 1 + productions.length) % productions.length
	}

	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth < 768) {
				setSlideWidth(66.8)
			} else {
				setSlideWidth(41.8)
			}
		}
		handleResize()

		window.addEventListener('resize', handleResize)

		return () => {
			window.removeEventListener('resize', handleResize)
		}
	}, [slideWidth])

	useEffect(() => {
		const startAutoSlide = () => {
			if (!isPaused) {
				intervalRef.current = setInterval(() => {
					setCurrentIndex(prevIndex => nextSlide(prevIndex))
				}, 3000)
			}
		}

		startAutoSlide()

		return () => {
			if (intervalRef.current) {
				clearInterval(intervalRef.current)
			}
		}
	}, [isPaused, currentIndex, nextSlide])

	const handlePause = (shouldPause: boolean) => {
		setIsPaused(shouldPause)
		if (shouldPause && intervalRef.current) {
			clearInterval(intervalRef.current)
		}
	}

	const handleDragAndTouchMove = (e: React.MouseEvent | React.TouchEvent) => {
		if (!isDragging) return
		const deltaX = 'touches' in e ? e.touches[0].clientX - startX : e.clientX - startX
		setTranslateX(deltaX)
	}

	// start dragging
	const handleMouseDown = (e: React.MouseEvent) => {
		setIsDragging(true)
		setStartX(e.clientX)
		handlePause(true)
	}

	const handleTouchStart = (e: React.TouchEvent) => {
		setIsDragging(true)
		setStartX(e.touches[0].clientX)
		handlePause(true)
	}

	const handleTouchAndDragEnd = () => {
		if (isDragging) {
			setIsDragging(false)

			if (translateX < -50) {
				setCurrentIndex(prevIndex => nextSlide(prevIndex))
			} else if (translateX > 50) {
				setCurrentIndex(prevIndex => prevSlide(prevIndex))
			}

			setTranslateX(0)
			handlePause(false)
		}
	}

	const trendingSlidesStyle = {
		transform: `translateX(calc(-${currentIndex * slideWidth}% + ${translateX}px))`,
		transition: isDragging ? 'none' : 'transform 0.3s ease',
	}

	return (
		<div
			className="trending-slider"
			onMouseEnter={() => handlePause(true)}
			onMouseLeave={() => handlePause(false)}
			onMouseMove={handleDragAndTouchMove}
			onMouseDown={handleMouseDown}
			onMouseUp={handleTouchAndDragEnd}
			onTouchStart={handleTouchStart}
			onTouchMove={handleDragAndTouchMove}
			onTouchEnd={handleTouchAndDragEnd}
		>
			<div
				className={`trending-slides production-list d-flex row production-list__${stringSelector}`}
				style={trendingSlidesStyle}>
				{productions.map((production, index) => (
					<div className="production-list__box d-flex flex-column col-8 col-md-5" key={production.title}>
						<TrendingBox index={index} currentIndex={currentIndex} production={production} />
					</div>
				))}
			</div>
		</div>
	)
}
