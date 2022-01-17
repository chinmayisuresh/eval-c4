import {Link } from 'react-router-dom'
export const Home=()=>{
    return (
        <div>
            <Link to = {'/'}>Login</Link><br></br>
            <Link to={'/dashboard'}>Dashboard</Link>
        </div>
    )
}