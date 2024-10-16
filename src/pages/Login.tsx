import { IconLogo } from '../assets/icons/Icons'
import AuthSwitcher from '../components/AuthSwitcher/AuthSwitcher'
import Button from '../components/Button/Button'
import Form from '../components/Form/Form'
import Input from '../components/Input/Input'

export default function Login() {
	return (
		<div className="login d-flex align-items-center flex-column">
			<IconLogo />
			<Form
				title="Login"
				inputs={
					<div className="form__inputs d-flex flex-column">
						<Input placeholder="Password" type="password" className="form__input" />
						<Input placeholder="Email address" type="email" className="form__input error" />
					</div>
				}>
				<Button text="Login" className="" onClick={() => {}} />
				<AuthSwitcher hasAccount={false} />
			</Form>
		</div>
	)
}
