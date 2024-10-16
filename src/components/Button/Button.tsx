import { ComponentPropsWithoutRef } from 'react'
import { useSelector } from 'react-redux'
import { selectIsLoading } from '../../slices/authSlice'

type ButtonProps = {
	text: string
	className?: string
	onClick: () => void
	spinner?: React.ReactNode
} & ComponentPropsWithoutRef<'button'>

export default function Button({ text, onClick, className, spinner, ...rest }: ButtonProps) {
	const isLoading = useSelector(selectIsLoading)

	return (
		<button className={`btn btn-${className}`} {...rest} onClick={onClick}>
			{isLoading && spinner}
			{!isLoading && text}
		</button>
	)
}
