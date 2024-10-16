import { type ComponentPropsWithoutRef } from 'react'

type InputProps = {
	placeholder: string
	className: string
	onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
} & ComponentPropsWithoutRef<'input'>

export default function Input({ placeholder, className, onChange, ...rest }: InputProps) {
	return <input placeholder={placeholder} className={className} onChange={onChange} {...rest} />
}
