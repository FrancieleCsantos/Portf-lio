import './styles.css'
import imgpeople from '../../assets/img-pessoa.svg'
import Header from '../../Component/Header';
import Footer from '../../Component/Footer';

function Personuser() {

    return (
        <>
            <Header />
            <div className='general-container'>
                <div className='left'>
                    <h1>Pessoa Usuária</h1>

                    <div className='div-green-Line'>
                        <div className='green-Line'></div>
                        <h2>A Lacrei garante que pessoas LGBTQIAPN + recebam atendimento realizado por profissionais de qualidade e que atendam às suas necessidades de forma segura e acolhedora.</h2>
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

export default Personuser;