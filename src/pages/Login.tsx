import { useForm } from 'react-hook-form'
import { IconLogo } from '../assets/icons/Icons'
import AuthSwitcher from '../components/AuthSwitcher/AuthSwitcher'
import Button from '../components/Button/Button'
import Form from '../components/Form/Form'
import Input from '../components/Input/Input'
import { AppDispatch } from '../store'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { loginUser } from '../slices/authSlice'
import Spinner from '../components/Spinner/Spinner'

export default function Login() {
	const dispatch: AppDispatch = useDispatch()
	const navigate = useNavigate()

	const {
		handleSubmit,
		register,
		reset,
		formState: { errors },
	} = useForm({
		defaultValues: {
			email: 'testuser@example.com',
			password: 'pass123',
		},
	})

	const onSubmit = async (data: { email: string; password: string }) => {
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
					title="Login"
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
						</div>
					}>
					<Button text="Login" className="" onClick={() => {}} spinner={<Spinner className='form' />} />
					<AuthSwitcher hasAccount={false} />
				</Form>
			</div>
		</main>
	)
}
