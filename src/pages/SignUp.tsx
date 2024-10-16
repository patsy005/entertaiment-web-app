import { useDispatch } from 'react-redux'
import { AppDispatch } from '../store'
import { useForm } from 'react-hook-form'

import { IconLogo } from '../assets/icons/Icons'
import Form from '../components/Form/Form'
import Input from '../components/Input/Input'
import Button from '../components/Button/Button'
import AuthSwitcher from '../components/AuthSwitcher/AuthSwitcher'
import { useNavigate } from 'react-router-dom'
import { registerUser } from '../slices/authSlice'
import { loginUser } from '../slices/authSlice'

export default function SignUp() {
	const dispatch: AppDispatch = useDispatch()
	const navigate = useNavigate()

	const {
		handleSubmit,
		register,
		reset,
		getValues,
		formState: { errors },
	} = useForm<{ email: string; password: string; passwordConfirm: string }>()

	const onSubmit = async (data: { email: string; password: string; passwordConfirm: string }) => {
		await dispatch(registerUser(data)).unwrap()
		await dispatch(loginUser(data)).unwrap()
		reset()
		navigate('/')
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
