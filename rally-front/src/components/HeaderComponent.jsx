import { Link } from "react-router-dom"
import './HeaderComponent.css';

function HeaderComponent(props) {
    const {greetings, links} = props;
  return (
    <header className="header">
        <h1 className="title">{greetings}</h1>
        <nav className="">
            <ul className="header-list">
                <li className="">
                    <Link to='/' className="link">{links.home}</Link>
                    
                </li>
                <li className="">
                    <a href="" className="link">{links.contact}</a>
                </li>
                <li className="">
                    <a href="" className="link">{links.blog}</a>
                </li>
                <li className="">
                    < Link to='/register' className='link'>{links.register}</Link>  
                </li>
                <li className="">
                    < Link to='/login' className='link'>{links.login}</Link>  
                </li>
                
            </ul>
        </nav>
    </header>
  )
}

export default HeaderComponent