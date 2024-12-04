import { Link } from "react-router-dom";

export default function LoginView(){
  return(
  <>
  <h1>Login</h1>
    <nav>
      <Link 
      to="/auth/register"
      >
        Ingresa
        </Link>
    </nav>
  </>
  )
}