import Home from "./routes/home/home"
import {Routes,Route} from "react-router-dom"
import Navigation from "./routes/navigation/Navbar.tsx"
import AboutUs from "./routes/aboutUs/AboutUs"
import Services from "./routes/services/services"
import Projects from "./routes/projects/projects.js"
import Volunteering from "./routes/volunteering/Volunteering.js"
import ProjectsLogin from './components/projectsLogin/ProjectsLogin.tsx'
import ProjectsRegister from './components/projectsRegister/ProjectsRegister.tsx'
import CreatePost from "./components/createPost/CreatePost.tsx"
import Postpage from "./components/postPage/PostPage.tsx"
import EditPost from "./components/editPost/EditPost.tsx"
import Login from "./routes/login/login"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { AuthContexProvider } from "./context/AuthContext.tsx"




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