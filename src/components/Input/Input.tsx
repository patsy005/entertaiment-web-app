import { type ComponentPropsWithoutRef } from 'react'
import { FieldErrors, FieldValues, RegisterOptions, UseFormRegister, Path } from 'react-hook-form'

type InputProps<T extends FieldValues = FieldValues> = {
	placeholder: string
	className: string
	name: Path<T>
	register?: UseFormRegister<T>
	isRequired?: boolean
	errors?: FieldErrors<T>
	validate?: RegisterOptions['validate']
} & ComponentPropsWithoutRef<'input'>

export default function Input<T extends FieldValues>({
	placeholder,
	className,
	register,
	name,
	isRequired,
	errors,
	validate,
	...rest
}: InputProps<T>) {
	return (
		<>
			<input
				placeholder={placeholder}
				className={className}
				{...(register
					? register(name, {
							required: isRequired ? 'This field is required' : '',
							validate: validate,
					  })
					: {})}
				{...rest}
			/>
			{errors && errors[name] && <span className="error">{String(errors[name]?.message)}</span>}
		</>
	)
}
