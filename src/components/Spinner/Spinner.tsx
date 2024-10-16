type SpinnerProps = {
	className: string
}
export default function Spinner({ className }: SpinnerProps) {
	return (
		<div className="spinnerContainer">
			<div className={`spinner spinner__${className}`}></div>
		</div>
	)
}
