import "./LoginPage.css"

export const LoginPage = () => {
  return (
    <>
    <div className="login-main">
      <form>
        <h1>Login to your account</h1>
        <label>Username</label>
        <input type="text" className="username" />
        <div className="Password">
        <label>Password</label>
        <a href="#">Forgot?</a>
        </div>
        <input type="password" className="password" />
        
        <button className="submit">Login Now</button>
        <button className="google">Continue with Google</button>

        <div id="signup">
        <p>Don't Have An Account? <a href="#">Signup</a> </p>
        </div>
      </form>
    </div>
    </>
  )
}
