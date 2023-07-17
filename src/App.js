import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from "./components/layout/Navbar"
import Footer from "./components/layout/Footer"
import Home from "./pages/Home"
import About from "./pages/About"
import Alert from "./components/layout/Alert"
import NotFound from "./pages/NotFound"
import User from "./pages/User"
import { GithubProvider } from "./context/github/GithubContext"
import { AlertProvider } from "./context/alert/AlertContext"

function App() {
  return (
    <GithubProvider>
      <AlertProvider>
        <Router>
          <div className='flex flex-col justify-between h-screen'>
            <Navbar />

            <main className='container mx-auto px-3 pb-12'>
              <Alert />
              <Routes>
                <Route exact path='/' element={<Home />}></Route>
                <Route path='/about' element={<About />}></Route>
                <Route path='/user/:login' element={<User />}></Route>
                <Route path='/notfound' element={<NotFound />}></Route>
                <Route path='/*' element={<NotFound />}></Route>
              </Routes>
            </main>

            <Footer />
          </div>
        </Router>
      </AlertProvider>
    </GithubProvider>
  )
}

export default App
