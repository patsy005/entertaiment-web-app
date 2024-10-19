
export default function Footer() {
	const getFullYear = () => {
		return new Date().getFullYear()
	}
	return (
		<div className="footer">
			<p>&copy; {getFullYear()} Patrycja Zawadzka. All rights reserved.</p>
		</div>
	)
}
