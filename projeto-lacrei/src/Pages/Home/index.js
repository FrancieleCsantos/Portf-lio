import './styles.css'
import imgFran from '../../assets/Fran.jpg'
import Header from '../../Component/Header'
import Footer from '../../Component/Footer'
import { Link } from 'react-router-dom'
function Home() {

    return (
        <>
            <Header />
            <div className='general-container'>

                <div className='left'>
                    <h1>Olá,<br /> Sou Franciele Conceição dos Santos</h1>

                    <h2>Seja bem vindo! Navegue entre as telas e conheça um pouco mais sobre meu trabalho.</h2>

                    <div className='general-container-button' >

                        <Link to='/people'><button className='btn-green'>Sobre mim</button></Link>
                        <Link to='/professional'><button className='btn-edge-green'>Projetos</button></Link>

                    </div>
                </div>
                <div className='right'>
                    <img src={imgFran} alt='img-home' />
                </div>

            </div>
            <Footer />
        </>
    )

}

export default Home;