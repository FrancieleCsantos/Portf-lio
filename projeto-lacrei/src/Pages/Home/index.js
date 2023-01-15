import './styles.css'
import Header from '../../Component/Header'
import { Link } from 'react-router-dom'
function Home() {

    return (
        <>
            <Header />
            <div className='general-container'>

                <div className='left-home'>
                    <h1>Olá, sou a Fran<br />
                        Desenvolvedora Front End.
                    </h1>

                    <div className='general-container-button' >

                        <Link to='/people'><button className='btn-green'>Sobre mim</button></Link>
                        <Link to='/professional'><button className='btn-edge-green'>Projetos</button></Link>

                    </div>
                </div>


            </div>

        </>
    )

}

export default Home;