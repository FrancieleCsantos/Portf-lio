import './styles.css'
import imgHome from '../../assets/img-home.svg'
import Header from '../../Component/Header'
import Footer from '../../Component/Footer'
import { Link } from 'react-router-dom'
function Home() {

    return (
        <>
            <Header />
            <div className='general-container'>

                <div className='left'>
                    <h1>Boas vindas a Lacrei<br />
                        Saúde</h1>

                    <h2>Uma plataforma segura e acolhedora <br />
                        para comunidade LGBTQIAPN+</h2>

                    <div className='general-container-button' >

                        <Link to='/people'><button className='btn-green'>Pessoa Usuária</button></Link>
                        <Link to='/professional'><button className='btn-edge-green'>Profissional</button></Link>

                    </div>
                </div>
                <div className='right'>
                    <img src={imgHome} alt='img-home' />
                </div>

            </div>
            <Footer />
        </>
    )

}

export default Home;