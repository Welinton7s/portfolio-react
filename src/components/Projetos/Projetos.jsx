import './Projetos.css'
import simboraImg from '../../assets/images/simbora.png'

function Projetos(){

    return(
        <>
            <section id="projetos">
                <div className="container projetos-content">

                    <div className="projetos-lista">
                        <h2>Meus Projetos</h2>
                        <div className="projetos-grid">
                            <div className="projeto-card">
                                <div className="projeto-img">
                                    <img src={simboraImg} alt="Captura de tela do projeto Simbora" />
                                </div>
                                <div className="projeto-info">
                                    <h3>Simbora</h3>
                                    <p className="descricao">
                                        Landing page para uma agência fictícia, criada para treinar
                                        HTML, CSS, JavaScript e Bootstrap, aplicando conceitos de
                                        layout responsivo, componentização e interatividade.
                                    </p>
                                    <div className="projeto-tags">
                                        <span>HTML</span>
                                        <span>CSS</span>
                                        <span>JavaScript</span>
                                        <span>Bootstrap</span>
                                    </div>
                                    <a
                                        href="https://github.com/Welinton7s/simbora-agencia/tree/main/Simbora"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn-github"
                                    >
                                        Ver no GitHub
                                    </a>
                                </div>
                            </div>
                            <div className="projeto-card projeto-em-breve">
                                <p>Em breve, mais projetos</p>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </>
    )

}

export default Projetos