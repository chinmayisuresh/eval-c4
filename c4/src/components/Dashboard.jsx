import {useEffect, useState} from 'react'
import { useDispatch ,useSelector } from 'react-redux'

export const Dashboard = () =>{


    var user=JSON.stringify(localStorage.getItem(user));
    console.log(user);
    const [form,setForm]=useState({});
    const dispatch=useDispatch();

    const [show,setShow]=useState(null);
    
    function showing(){
        
    let z=JSON.parse(localStorage.getItem('job2'));
    console.log(z);    
    setShow(z);
    
}

    
    
    

    //const {jobs} = useSelector((state)=>state.jobState.jobs)
    const handleChange=(e)=>{
        let {name,value}=e.target
        setForm({
            ...form,
            [name]:value
        });
      
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        if(JSON.parse(localStorage.getItem('job2'))==null){
              localStorage.setItem('job2',JSON.stringify([]));
        }
        var a=JSON.parse(localStorage.getItem('job2'));
        a.push(form);
        localStorage.setItem('job2',JSON.stringify(a));

        
    }
    return (
        <div>
            <h2>Dashboard<br></br>
                    <button onClick={showing}>show jobs</button><br></br>

                   
                  <form onSubmit={handleSubmit}>
                      <input onChange={handleChange} placeholder='jobtitle' type='text' name='jobtitle'></input>
                      <input onChange={handleChange} placeholder='location' type='text' name='location'></input>
                      <input onChange={handleChange} placeholder='companyname' type='text' name='companyname'></input>
                      <input onChange={handleChange} placeholder='salaryrange' type='text' name='salaryrange'></input>
                      <input onChange={handleChange} placeholder='jobdescription' type='text' name='jobdescription'></input>
                       <input onChange={handleChange} placeholder='jobtype' type='text' name='jobtype'></input>
                       <input type='submit'></input>
  
                  </form> 
                 
            </h2>
               
           <div>
               {show ? 
                   show.map((e) => <div>
                       <h2>{e.jobtitle}
                       {e.salaryrange}
                       {e.location}
                       {e.salaryrange}
                       {e.jobdescription}
                       {e.jobtype}</h2>
                        </div>
                                   
                   )
                :null}
               </div>              

        </div>
        
    )
}