import FormTitle from './FormTitle'

type FormProps = {
	title: string
	inputs?: React.ReactNode
	children?: React.ReactNode
}

export default function Form({ title, inputs, children }: FormProps) {
	return (
		<form className="form d-flex flex-column justify-content-between">
			<FormTitle title={title} />

			<div className="form__inputs">{inputs}</div>
			{children}
		</form>
	)
}
