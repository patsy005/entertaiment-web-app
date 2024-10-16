import { Link } from "react-router-dom"

type AuthSwitcherProps = {
    hasAccount: boolean
}
export default function AuthSwitcher({ hasAccount }: AuthSwitcherProps) {
  return (
    <>
        {hasAccount && (
            <p className="auth-switcher">Already have an account? <Link to='/login' >Login</Link></p>
        )}

        {!hasAccount && (
            <p className="auth-switcher">Don't have an account? <Link to='/signUn'>Sign Up</Link></p>
        )}
    </>
  )
}
