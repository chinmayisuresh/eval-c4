import {useState} from 'react';
export const Login = () =>{

    const [form,setForm]=useState({});

    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(form);
        if(form.username=='chinmayi'){
        alert(' admin login succsessful');}
        else{
            alert('user login successful');
        }

    }
        const handleChange=(e)=>{
            let{name,value}=e.target
            setForm({
                ...form,
                [name]:value
            });

           
            
        } 
    return (
        <div>
            <h2>LOGIN</h2>
            <form onSubmit={handleSubmit}>
                <input onChange={handleChange} placeholder='username' name='username'/>
                <input onChange={handleChange} placeholder='password' name='password'/>
                <input type='submit'></input>
            </form>
        </div>
    )
}