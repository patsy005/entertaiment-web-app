import { useDispatch } from 'react-redux'
import { AppDispatch } from '../store'
import { useForm } from 'react-hook-form'
import { loginUser, registerUser } from '../slices/authSlice'
import { IconLogo } from '../assets/icons/Icons'
import Form from '../components/Form/Form'
import Input from '../components/Input/Input'
import Button from '../components/Button/Button'
import AuthSwitcher from '../components/AuthSwitcher/AuthSwitcher'

export default function SignUp() {
	const dispatch: AppDispatch = useDispatch()

	const {
		handleSubmit,
		register,
		reset,
		getValues,
		formState: { errors },
	} = useForm()

	const onSubmit = (data: any) => {
		dispatch(registerUser(data)).then(() => {
			dispatch(loginUser(data))
		})
		reset()
	}

	const mainStyles = {
		height: '100vh',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	}

	return (
		<main className="main" style={mainStyles}>
			<div className="login d-flex align-items-center flex-column w-100">
				<IconLogo />
				<Form
					onSubmit={handleSubmit(onSubmit)}
					title="Sign Up"
					inputs={
						<div className="form__inputs d-flex flex-column">
							<Input
								name="email"
								placeholder="Email address"
								type="email"
								className={`form__input ${errors.email ? 'form__input--error' : ''}`}
								register={register}
								isRequired={true}
								errors={errors}
								validate={value => {
									return /\S+@\S+\.\S+/.test(value) || 'Email address is invalid'
								}}
							/>
							<Input
								name="password"
								placeholder="Password"
								type="password"
								className={`form__input ${errors.password ? 'form__input--error' : ''}`}
								register={register}
								isRequired={true}
								errors={errors}
								validate={value => {
									return value.length >= 6 || 'Password must be at least 6 characters long'
								}}
							/>
							<Input
								name="passwordConfirm"
								placeholder="Confirm Password"
								type="password"
								className={`form__input ${errors.passwordConfirm ? 'form__input--error' : ''}`}
								register={register}
								isRequired={true}
								errors={errors}
								validate={value => {
									return value === getValues('password') || 'Passwords do not match'
								}}
							/>
						</div>
					}>
					<Button text="Sign Up" className="" onClick={() => {}} />
					<AuthSwitcher hasAccount={true} />
				</Form>
			</div>
		</main>
	)
}
