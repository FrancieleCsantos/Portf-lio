import './styles.css'
import imgpeople from '../../assets/img-profissional.svg'
import Header from '../../Component/Header';
import Footer from '../../Component/Footer';

function Profissional() {

    return (
        <>
            <Header />
            <div className='general-container'>
                <div className='left'>
                    <h1>Profissional</h1>

                    <div className='div-green-Line'>
                        <div className='green-Line'></div>
                        <h2>A Lacrei acredita que, ao transformar a realidade de um indivíduo ou de um grupo, transformamos o mundo.

                            Pensando nisso, construímos a Lacrei para buscarmos incansavelmente a melhor experiência no acesso a profissionais da saúde para as pessoas LGBTQIAPN+</h2>
                    </div>

                </div>
                <div className='right'>
                    <img src={imgpeople} alt='img-home' />
                </div>
            </div>
            <Footer />
        </>
    )

}

export default Profissional;