import React,{useState} from 'react'
import '../index.css'
function LoginForm({Login, error}) {
  const [details, setDetails] = useState({name:"", email:"", password:""});
  const submitHandler = e => {
    e.preventDefault();
    Login(details);

  }
  return (
    <div className='body'>
    <form onSubmit={submitHandler}>
      <div className='form-inner'>
        <h2>Login</h2>
       {(error!="")? (<div className="error">{error}</div>): ""}
        <div className='form-group'>
          <label for="name">Name: </label>
          <input type="text" name="name" id="name"  onChange={e => setDetails({...details,name: e.target.value})}/>
        </div>
        <div className='form-group'>
        <label for="email">Email: </label>
        <input type="email" name="email" id="email"  onChange={e => setDetails({...details,email: e.target.value})}/>
        </div>
        <div className='form-group'>
        <label for="password">Password: </label>
        <input type="password" name="password" id="password"  onChange={e => setDetails({...details,password: e.target.value})}/>
        </div>
        <input type="submit" value="LOGIN"/>
        
      </div>
    </form>
    </div>
  )
}

export default LoginForm
