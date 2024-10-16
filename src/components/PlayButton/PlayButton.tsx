import { IconPlay } from '../../assets/icons/Icons'

function PlayButton() {
	return (
		<button className="play-button">
			<div className="play-button__content d-flex">
				<IconPlay />
				<p>Play</p>
			</div>
		</button>
	)
}

export default PlayButton
