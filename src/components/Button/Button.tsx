import { ComponentPropsWithoutRef } from 'react'

type ButtonProps = {
	text: string
	className?: string
	onClick: () => void
} & ComponentPropsWithoutRef<'button'>

export default function Button({ text, onClick, className, ...rest }: ButtonProps) {
	return (
		<button className={`btn btn-${className}`} {...rest} onClick={onClick}>
			{text}
		</button>
	)
}
