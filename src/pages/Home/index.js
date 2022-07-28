import { useState } from 'react';
import './style.css';
import LogIn from '../../components/LogIn';
import SignUp from '../../components/SignUp';
import PageToggle from '../../components/PageToggle';


const Home = () => {
const [flag, setFlag] = useState(true);
const pageHandler = () => {
    setFlag(!flag);
}
    return (
        <div className='home login'>
            {flag ? <LogIn/> :   <SignUp/>}
                 
        <PageToggle onClick= {pageHandler} flag = {flag}/>
           
        </div>
    )
}
export default Home 