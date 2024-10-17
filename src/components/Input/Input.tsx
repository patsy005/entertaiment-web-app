import { type ComponentPropsWithoutRef } from 'react'
import { FieldErrors, FieldValues, RegisterOptions, useForm } from 'react-hook-form'

type InputProps = {
	placeholder: string
	className: string
	name: string
	register?: ReturnType<typeof useForm>['register']
	isRequired?: boolean
	errors?: FieldErrors<FieldValues>
	validate?: RegisterOptions['validate']
} & ComponentPropsWithoutRef<'input'>

export default function Input({
	placeholder,
	className,
	register,
	name,
	isRequired,
	errors,
	validate,
	...rest
}: InputProps) {
	return (
		<>
			<input
				placeholder={placeholder}
				className={className}
				{...(register ? register(name, {
					required: isRequired ? 'This field is required' : '',
					validate: validate,
				}) : {})}
				{...rest}
			/>
			{errors && errors[name] && <span className="error">{String(errors[name].message)}</span>}
		</>
	)
}
