import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router , Switch , Route} from 'react-router-dom'
import Header from './Components/Header';
import Home from './Components/Home';
import Checkout from './Components/Checkout';
import Login from './Components/Login';
import { useStateValue } from './Components/StateProvider';
import { useEffect } from 'react';
import {auth} from './firebase';


function App() {

  const[{user} , dispatch] = useStateValue();

  useEffect(() =>{
    const unsubscribe  = auth.onAuthStateChanged((authUser) => {
      
      if(authUser){
           dispatch({
             type:'SET_USER',
             user:authUser,
           });
      }else{
        dispatch({type : 'SET_USER',
        user:null,});
          
      }
    });
    return() =>{
      unsubscribe();
    }
  } , []);
  
  console.log("USER is >>>>" , user);
  return (
    <Router>
    <div className="app">
      <Switch>
        <Route path = "/checkout">
        <Header />
        <Checkout />
            
          </Route>
          <Route path  ="/login">
          
            <Login/>
            </Route>
            <Route path = "/">
              <Header />
               <Home/>

            </Route>
        </Switch>
    </div>
    </Router>
  );
}

export default App;
