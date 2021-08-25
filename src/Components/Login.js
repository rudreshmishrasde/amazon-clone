import React , {useState} from 'react'
import {Link , useHistory} from 'react-router-dom'
import {auth} from '../firebase.js'
import './Login.css'

function Login() {
      const history  = useHistory();
    const [email , setEmail] = useState('');
    const [password , setPassword] = useState('');

    const login = event =>{
     event.preventDefault(); // prevent from refreshing
     // login logic
     console.log("trying to login")
     auth.signInWithEmailAndPassword(email , password)
        .then((auth) => {
     // redirect to homepage
     history.push('/');
        })
        .catch(e => alert(e.message));
    }

    const register = event =>{
        event.preventDefault();
        // sign up logic 
        auth.createUserWithEmailAndPassword(email , password)
        .then((auth) => {
     // create a user and log in
     history.push('/');
        })
        .catch(e => alert(e.message));
    }
    return (
        
        <div className = "login">
            <Link to = "/">
          <img className = "login__image" src = "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"></img>
          </Link>
          <div className = "login__container">
            <h1>Sign in</h1>
            <form>
            <h5>Enter email</h5>
            <input value = {email} onChange = {event => setEmail(event.target.value)} className = "login__email" type = "email" />
            <h5>Enter password</h5>
            <input value = {password}  onChange = {event => setPassword(event.target.value)} className = "login__password" type = "password"/>
            <button onClick = {login} className = "login__button">Sign in</button>
            </form>
            <p>By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.</p>
            <button  onClick = {register} className="signup__button">Sign up</button>
            </div>

        </div>
    )
}

export default Login
