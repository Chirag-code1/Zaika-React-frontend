import React, {useState} from 'react'
import { useHistory } from 'react-router-dom'
// import signpic from "../images/signpic.png"
const Signup = () => {
    const history = useHistory();

    const [user, setUser] = useState({  name:"", email:"", phone:"",  password:"", cpassword:"" , error:"",});

    let name, value;

    const handleInputs = (e)=> {
        // console.log(e);
        name = e.target.name
        value = e.target.value;

        setUser({...user, [name]:value})
    }

    const Done = () => {
        window.alert("State Updated Successfully!")
    }


    return (
       <>
       <div className="jumbotron">
            <div className="container">
                <h2 className="mt-5 mb-5">Signup</h2>

            <form> 
                   <div className="form-group">
                       <label className="text-muted">Name</label>
                       <input 
                       type="text" 
                       name="name" 
                       id="name"
                       className="form-control"
                       value={user.name}
                       onChange={handleInputs}
                        
                       />
                   </div>

                   <div className="form-group">
                       <label className="text-muted">Email</label>
                       <input 
                       type="email" 
                       name="email" 
                       id="email"
                       className="form-control"
                        value={user.email}
                       onChange={handleInputs}
                       />
                   </div>
                   <div className="form-group">
                       <label className="text-muted">Phone</label>
                       <input 
                       type="number" 
                       name="phone" 
                       id="phone"
                       className="form-control"
                       value={user.phone}
                       onChange={handleInputs}
                       />
                   </div>
                   <div className="form-group">
                       <label className="text-muted">Password</label>
                       <input 
                       type="password" 
                       name="password" 
                       id="password"
                       className="form-control"
                       value={user.password}
                       onChange={handleInputs}
                       />
                   </div>

                   <div className="form-group">
                       <label className="text-muted">Confirm Password</label>
                       <input 
                       type="password"
                       name="cpassword" 
                       id="cpassword"
                        className="form-control"
                        value={user.cpassword}
                       onChange={handleInputs}
                        />
                   </div>
                   <button type="button" class="btn btn-primary btn-raised btn-lg btn-block" onClick={Done}>Submit</button>

                   {/* <button className="btn btn-raised btn-primary" onClick={Done}>
                   Submit
                   </button> */}

                </form>

                </div>
                </div>
       </>
    )


}

export default Signup
