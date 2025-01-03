import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"
import axios from "axios"
import './register.scss'
import Footer from '../../components/footer/Footer.tsx';

const Register = () => {

    const [inputs,setInputs] = useState({
        username:"",
        email:"",
        password:""
    })

    const [successMessage, setSuccessMessage] = useState("")

    const navigate = useNavigate(); // Initialize the navigate function

    const handleChange = (e)=> {
        setInputs((prev)=> ({...prev, [e.target.name]: e.target.value}));
    }

    const [err,SetErr] = useState(null)

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const res = await axios.post("https://ecomagua.org/api/auth/register", inputs);
          setSuccessMessage("Registration successful! Redirecting to login...")
          
          setTimeout(() => {
            navigate("/login");
        }, 2000);
        } catch (err) {
         SetErr(err.response.data)
        }
      };
        // inputs müssen an Backend geschickt werden
    


    return(
        <div>
              <div className="register__Container">
      <h3>Register</h3>
      <form className="register__Inputs">
        <input
          required
          type="text"
          placeholder="username"
          name="username"
          onChange={handleChange}
        />
        <input
          required
          type="email"
          placeholder="email"
          name="email"
          onChange={handleChange}
        />
        <input
          required
          type="password"
          placeholder="password"
          name="password"
          onChange={handleChange}
        />
        <button onClick={handleSubmit}>Register</button>
        {err && console.log(typeof err === "string" ? err : JSON.stringify(err))}
        {successMessage && (
                        <div className="success-message">{successMessage}</div>
                    )}
        <span className="login__Account">
          <p>Do you have an account?</p>
          <Link to="/login">Login</Link>
        </span>
      </form>
      <Footer/>
    </div>
        </div>
    )
}

export default Register