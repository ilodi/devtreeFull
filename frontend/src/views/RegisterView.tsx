import { Link } from "react-router-dom";

export default function LoginView(){
  return(
  <>
  <h1>RegisterView</h1>
    <nav>
      <Link 
      to="/auth/login"
      >
        Ingresa
        </Link>
    </nav>
  </>
  )
}