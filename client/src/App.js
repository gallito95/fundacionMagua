import Home from "./routes/home/home"
import {Routes,Route} from "react-router-dom"
import Navigation from "./routes/navigation/Navbar"
import AboutUs from "./routes/aboutUs/AboutUs"
import Services from "./routes/services/services"
import Projects from "./routes/projects/projects.js"
import Volunteering from "./routes/volunteering/volunteering.js"
import ProjectsLogin from './components/projectsLogin/projectsLogin'
import ProjectsRegister from './components/projectsRegister/projectsRegister'
import CreatePost from "./components/createPost/createPost"
import Postpage from "./components/postPage/postPage"
import EditPost from "./components/editPost/editPost"
import Mangrove from "./components/articles/mangrove/mangrove.jsx"
import Breeding from "./components/articles/breeding/breeding.jsx"
import Education from "./components/articles/education/education.jsx"
import Unicorn from "./components/articles/unicorn/unicorn.jsx"

import Register from "./routes/register/register"
import Login from "./routes/login/login"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { AuthContexProvider } from "./context/authContext"
import Test from "./components/Test.js"



function App() {
  useEffect(() => {
    AOS.init({
      duration : 2000
    });
  }, []);


  return (
    <AuthContexProvider>
    <Routes>
    <Route path="/" element={<Navigation/>}>   
    <Route index element={<Home/> }/>
    <Route path="about-us" element={<AboutUs/>}/>
    <Route path="services" element={<Services/>}/> 
    <Route path ="volunteering" element={<Volunteering/>}/>
    {/* <Route path="register" element={<Register/>}/> */}
    <Route path="login" element={<Login/>}/>
    <Route path="education" element={<Education/>}/>
    <Route path="unicorn" element={<Unicorn/>}/>
    <Route path="breeding" element={<Breeding/>}/>
    <Route path="mangrove" element={<Mangrove/>}/>
    <Route path ="projects/*" element={<Projects/>}/>
    <Route path="projects/login" element={<ProjectsLogin />}/>
    {/* <Route path="projects/register" element={<ProjectsRegister />}/> */}
    <Route path="projects/create" element={<CreatePost />}/>
    <Route path="/post/:id" element={<Postpage/>}/>
    <Route path="projects/edit/" element={<EditPost/>}/>
  
       </Route>  
  </Routes>
  </AuthContexProvider>

  );
}

export default App;