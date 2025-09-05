import "./Home.css"
import green_line from "../../assets/green-line.svg"
import photo_bk from "../../assets/photo-bk.png"


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
            <a href="signup" className="GetStarted">Get Started</a>
          </div>
          <div className="Photo">
                <img src={photo_bk} className="Photo-Banner" />
          </div>
        </div>
    </div>
  



    </>
  )
}
