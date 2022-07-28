import './style.css';

const PageToggle = (props) => {

    return (
        <div className='toggle'>

            <p>{props.flag ?   "Don't have an account ? " : "Already have an account ?"}</p>
            <a href='#' id='register' onClick={props.onClick}> {props.flag ? "Register" : "Login"} </a>


        </div>
    )
}
export default PageToggle