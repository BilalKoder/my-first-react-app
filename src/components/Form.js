import React, {useState} from 'react'

export default function Form(props) {

    const [email , setEmail] = useState("");
    const [password , setPassword] = useState("");

    const handleOnChangeEmail =(event) =>{
        
        setEmail(event.target.value);
    }
    const handleOnChangePassword =(event) =>{
        setPassword(event.target.value)
    }
   
    const handleFormEvent =() =>{
        console.log(email,password);
        if (email === null || email === "") {
            props.showAlert("Email is required!", "danger");
          }
        
          if (password === null || password === "") {
            props.showAlert("Password is required!", "danger");
          }
        
    }
   

  return (
    <div>
        <h1>{props.title}</h1>
        <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
            <input type="email" value={email} placeholder="Enter Your Email" onChange={handleOnChangeEmail}  className="form-control emailInput" id="exampleInputEmail1" aria-describedby="emailHelp"/>
            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
            <input type="password" value={password} placeholder="Enter Your Password" onChange={handleOnChangePassword} className="form-control passInput" id="exampleInputPassword1"/>
        </div>
        <div className="mb-3 form-check">
            <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
            <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
        </div>
        <button type="submit" className="btn btn-primary" onClick={handleFormEvent}>Submit</button>
    </div>
  )
}
