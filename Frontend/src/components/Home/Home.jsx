import "./Home.css"
import green_line from "../../assets/green-line.svg"
import photo_bk from "../../assets/photo-bk.png"
import bk_green_blur from '../../assets/bk-blur-green.svg'
import bk_pink_blur from '../../assets/bk-blur-pink.svg'
import bk_white_blur from '../../assets/bk-blur-white.svg'

export const Home = () => {
  return (
    <>
    <div className="Home">
      <div className="home-container">
        <div className="home-text">
            <h1 className="Heading">
                We’re here to Increase your Productivity
            </h1>
            <img src={green_line} className="Green-Line" />
            <p className="Heading-Caption">
                Let's make your work more organize and easily using the Taskio Dashboard with many of the latest features in managing work every day.
            </p>
            <a href="#" className="GetStarted">Get Started</a>
          </div>
        <img src={photo_bk} className="Photo-Banner" />
        </div>
        <div className="background-elements">
          <img class="left-corner-blur" src={bk_green_blur} />
          <img class="center-blur" src={bk_white_blur} />
          <img class="top-right-blur" src={bk_pink_blur} />
          <img src={bk_green_blur} className="bottom-right-blur" />
        </div>
    </div>
  



    </>
  )
}
