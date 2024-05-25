import Home from "./routes/home/home"
import {Routes,Route} from "react-router-dom"
import Navigation from "./routes/navigation/Navbar"
import AboutUs from "./routes/aboutUs/AboutUs"
import Services from "./routes/services/services"
import Projects from "./routes/projectsCollection/projectsColllection"
import Volunteering from "./routes/volunteering/Volunteering"

import ProjectsLogin from './components/projectsLogin/projectsLogin'
import ProjectsRegister from './components/projectsRegister/projectsRegister'
import CreatePost from "./components/createPost/createPost"
import Postpage from "./components/postPage/postPage"
import EditPost from "./components/editPost/editPost"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { UserContextProvider } from "./UserContext"



function App() {
  useEffect(() => {
    AOS.init({
      duration : 2000
    });
  }, []);


  return (
    <UserContextProvider>
    <Routes>
    <Route path="/" element={<Navigation/>}>   
    <Route index element={<Home/> }/>
    <Route path="about-us" element={<AboutUs/>}/>
    <Route path="services" element={<Services/>}/> 
    <Route path ="volunteering" element={<Volunteering/>}/>
    <Route path ="projects/*" element={<Projects/>}/>
    <Route path="projects/login" element={<ProjectsLogin />}/>
    <Route path="projects/register" element={<ProjectsRegister />}/>
    <Route path="projects/create" element={<CreatePost />}/>
    <Route path="projects/post/:id" element={<Postpage/>}/>
    <Route path="projects/edit/:id" element={<EditPost/>}/>
       </Route>  
  </Routes>
  </UserContextProvider>

  );
}

export default App;