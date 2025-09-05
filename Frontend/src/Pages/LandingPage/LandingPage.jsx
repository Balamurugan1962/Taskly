import { Footer } from '../../components/Footer/Footer'
import { Header } from '../../components/Header/Header'
import { Home } from '../../components/Home/Home'
import './LandingPage.css'

export const LandingPage = () => {
  return (
    <>
        <div className="LandingPage">
            <Header />
            <Home />
            <Footer />
        </div>
    </>
  )
}
