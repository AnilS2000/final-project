import React from 'react';
import ReactDOM from 'react-dom';
import Helmet from 'react-helmet';
import './index.css';
// import url('http://fonts.cdnfonts.com/css/intro');
//import App from './App';
//import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
function App(){
  return(
    
    
       <div className="application">

            <Helmet>
                {/* <style>{'body {className={div}}'}</style>
                 */}
                 <body className="background" /> 
            </Helmet>
          <div className=''>
            <h1 className='logo'>Expense Tracker</h1>
            <img src="logo.png" className='imagelogo' alt='mywallet'/>
            <span className='login'>LOG IN</span>
            <img src="https://www.pngkit.com/png/full/88-885453_login-white-on-clear-user-icon.png" className='loginlogo' alt=''/>
            <img src="https://icon-library.com/images/icon-password/icon-password-25.jpg" className='passwordlogo' alt=''/>
            <input type="text" name="login" placeholder="User ID"/>
            
            <input type='password' placeholder='password'/>
            {/* <button className='btn btn-3' >Log In</button> */}
            {/* <div class="box-3">
              <div class="btn btn-three">
                <span>HOVER ME</span>
              </div>
            </div> */}
            <button className='button'><a href="#"></a>Login</button>
            <br/>
            <span className='or'>or</span>
            <a href='www.facebook.com'><img src='https://www.freepnglogos.com/uploads/logo-facebook-png/logo-facebook-facebook-logo-png-transparent-svg-vector-bie-supply-18.png' className='facebook'></img></a>
            <a href='www.gmail.com/login'><img src='google.png' className='google'></img></a>
           </div>
         </div>
  );
}
ReactDOM.render(<App/>, document.getElementById('root'))
//export default App;