import "./App.css"
import { Header } from "./components/Header/Header"
import { LandingPage } from "./Pages/LandingPage/LandingPage"
import { LoginPage } from "./Pages/LoginPage/LoginPage"
import { BrowserRouter as Router,Routes,Route,Link } from 'react-router-dom'
import { SignupPage } from "./Pages/SignupPage/SignupPage"

function App(){
    return(
        <>
            <Router>
                <Routes>
                    <Route path="/login" element={<LoginPage />}/>
                    <Route path="/signup" element={<SignupPage />}/>
                    <Route path="/*" element={<LandingPage/>}/>
                </Routes>
            </Router>
        </>
    )
}

export default App