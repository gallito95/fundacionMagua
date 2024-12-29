import { useContext, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import axios from "axios"
import { AuthContext } from "../../context/authContext"
import './login.scss'
import Footer from '../../components/footer/Footer';

const Login = () => {

    const [inputs,setInputs] = useState({
        username:"",
        password:""
    })

    const navigate = useNavigate(); // Initialize the navigate function

    const {currentUser, login} = useContext(AuthContext)
    console.log(currentUser)

    const handleChange = (e)=> {
        setInputs((prev)=> ({...prev, [e.target.name]: e.target.value}));
    }

    const [err,SetErr] = useState(null)

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          await login(inputs)
          navigate("/projects")
        } catch (err) {
         SetErr(err.response.data)
        }
      };
        // inputs müssen an Backend geschickt werden   

     
    return(
        <div className="login__Container">
        <h3> Login your User</h3>
        <form className="login__Inputs"> 
            <input
            required
            type="text"
            name="username"
            placeholder="username"
            onChange={handleChange}
            />
            <input
            required
            type="password"
            name="password"
            placeholder="password"
            onChange={handleChange}
            />
            <button onClick={handleSubmit}> Login</button>
            {err && console.log(typeof err === "string" ? err : JSON.stringify(err))}
            </form>
            <Footer/>
        </div>
   

    )
}

export default Login