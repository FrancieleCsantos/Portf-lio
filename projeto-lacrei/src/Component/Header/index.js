import './styles.css'
import { Link } from 'react-router-dom';


function Header() {


    return (



        <header>

            <div className='optionsheader'>
                <nav>
                    <ul>
                        <Link to='/' ><li>Home</li ></Link>
                        <Link to='/people'><li>Sobre mim</li></Link>
                        <Link to='/professional'><li>Projetos</li></Link>
                    </ul>
                </nav>

            </div>
        </header>
    )
}


export default Header;