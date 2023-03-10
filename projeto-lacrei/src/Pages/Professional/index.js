import './styles.css'
import imgpeople from '../../assets/img-profissional.svg'
import Header from '../../Component/Header';


function Profissional() {

    return (
        <>
            <Header />
            <div className='general-container'>
                <div className='left'>
                    <h1>Profissional</h1>

                    <div className='div-green-Line'>
                        <div className='green-Line'></div>
                        <h2>Pagina em construção</h2>
                    </div>

                </div>
                <div className='right'>
                    <img src={imgpeople} alt='img-home' />
                </div>
            </div>

        </>
    )

}

export default Profissional;