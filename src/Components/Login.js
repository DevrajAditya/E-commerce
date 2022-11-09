import React from 'react';

const Login = ()=>{
    const [email,setEmail] = React.useState('');
    const [password,setPassword] = React.useState('');
    const handlelogin = ()=>{
        console.log(email, password);
    }
    return(
        <div className='login'>
            <h1> Login Page </h1>
            <input type='text' className='inputbox' placeholder="Enter Email" 
            onChange={(e)=>setEmail(e.target.value)} value={email}/>
            <input type='password' className='inputbox' placeholder="Enter Password" 
            onChange={(e)=>setPassword(e.target.value)} value={password}/>
            <button onClick={handlelogin} className='App-btn' type='button'>Login</button>
 
        </div>
    )
}

export default Login;