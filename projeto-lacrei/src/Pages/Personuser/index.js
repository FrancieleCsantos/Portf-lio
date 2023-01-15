import './styles.css'
import imgpeople from '../../assets/Fran.1.jpg'
import Header from '../../Component/Header';


function Personuser() {

    return (
        <>
            <Header />
            <div className='general-container'>
                <div className='left'>
                    <h1>Sobre mim</h1>

                    <div className='div-green-Line'>
                        <div className='green-Line'></div>
                        <div className='container-text'>
                            <h2>
                                Formada em Gestão de Recursos Humanos, iniciei recentemente minha
                                transição de carreira para a área da tecnologia, após uma experiência
                                de 10 anos entre Atendimento ao Cliente,
                                e a Monitoria de Qualidade da marca Itaucard e Chat Personnalité.
                                <br />
                                <br />
                                <h2>
                                    Tenho duas paixões: Customer experience e Desenvolvimento Front-End,
                                    além de criar sites e aplicações, me preocupo em levar a melhor experiência
                                    para o cliente/usuário. Quero transformar a minha vida e a de outras pessoas
                                    por meio da tecnologia.</h2>
                            </h2>
                        </div>
                    </div>

                </div>
                <div className='right'>
                    <img src={imgpeople} alt='img-home' />
                </div>
            </div>

        </>
    )

}

export default Personuser;