import { type } from '@testing-library/user-event/dist/type';
import  React,{ useState, useEffect } from 'react';
import {useNavigate} from 'react-router-dom';
const SignUp = ()=>{
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const navigate = useNavigate();

    useEffect(()=>{
        const auth = localStorage.getItem('user');
        if(auth){
            navigate('/')
        }
    });

    const printdata = async()=>{
        console.log(name, email, password);
        let result = await fetch('http://localhost:5000/register', {
            method: 'post',
            body: JSON.stringify({name, email, password}),
            headers: {
                'Content-type':'application/json'
            },
        });
        result = await result.json();
        console.log(result);
        navigate('/')
        localStorage.setItem('user', JSON.stringify(result));
    }
    return(
        <div className='sign-main'>
            <h1> Register </h1>
            <input className='inputbox' type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder='Enter Your Name'></input>
            <input className='inputbox' type="text" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='Email'></input>
            <input className='inputbox' type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='Password'></input>
            <button onClick={printdata} className='App-btn' type='button'>Sign Up </button>
        </div>
    )
}
export default SignUp;