import './Header.css'

export const Header = () => {
  return (
    <>
        <div className="header">
            <div className="title">
                <h1>Task.io</h1>
            </div>
            <div className="left-nav">
                <div className="Nav">
                    <a href="#">Home</a>
                    <a href="#">Features</a>
                    <a href="#">About</a>
                </div>
                <div className="GetIn">
                    <a href="login" className="login">Login</a>
                    <a href="signup" className="signup">SignUp</a>
                </div>
            </div>
            
        </div> 
    </>
  )
}
