import './styles.css'
import { Link } from 'react-router-dom';


function Header() {


    return (



        <header>
            <h1>Lacrei</h1>
            <div className='optionsheader'>
                <nav>
                    <ul>
                        <Link to='/' ><li>Home</li ></Link>
                        <Link to='/people'><li>Pessoa Usuária</li></Link>
                        <Link to='/professional'><li>Profissional</li></Link>
                    </ul>
                </nav>

            </div>
        </header>
    )
}


export default Header;