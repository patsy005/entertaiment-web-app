import { SubmitHandler } from 'react-hook-form'
import FormTitle from './FormTitle'

type FormProps = {
	title: string
	inputs?: React.ReactNode
	children?: React.ReactNode
	onSubmit: SubmitHandler<any>
}

export default function Form({ title, inputs, children, onSubmit }: FormProps) {

	const handleSubmit = (data: any) => {
		onSubmit(data)
	}

	return (
		<form className="form d-flex flex-column justify-content-between" onSubmit={handleSubmit}>
			<FormTitle title={title} />

			<div className="form__inputs">{inputs}</div>
			{children}
		</form>
	)
}
