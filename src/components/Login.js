import React from 'react'

const Login = () => {

  const handleClick=(e)=> {
  //   <div className="alert alert-success" role="alert">
  //   <h4 className="alert-heading">Well done!</h4>
  //   <p>Aww yeah, you successfully read this important alert message.
  //    This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.</p>
  //   <hr>
  //   <p class="mb-0">Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>
  // </div>
  <div class="alert alert-primary" role="alert">
  This is a primary alert with <a href="#" class="alert-link">an example link</a>. Give it a click if you like.
</div>
  }

    return (
        <>

              <div className="jumbotron py-5">
<div class="container py-5">
  <h1 > Login Form </h1>
  <form  class="was-validated">
    <div class="form-group">
      <label for="uname">Username:</label>
      <input type="text" class="form-control" id="uname" placeholder="Enter username" name="uname" required />
      <div class="valid-feedback">Valid.</div>
      <div class="invalid-feedback">Please fill out this field.</div>
    </div>
    <div class="form-group">
      <label for="pwd">Password:</label>
      <input type="password" class="form-control" id="pwd" placeholder="Enter password" name="pswd" required />
      <div class="valid-feedback">Valid.</div>
      <div class="invalid-feedback">Please fill out this field.</div>
    </div>
    <div class="form-group form-check">
      <label class="form-check-label">
        <input class="form-check-input" type="checkbox" name="remember" required /> I agree.
        <div class="valid-feedback">Valid.</div>
        <div class="invalid-feedback">Check this checkbox to continue.</div>
      </label>
    </div>
    <button type="submit" class="btn btn-lg btn-block btn-raised btn-primary" onClick={handleClick}>Submit</button>
  </form>
</div>


</div>

        </>
    )
}

export default Login
