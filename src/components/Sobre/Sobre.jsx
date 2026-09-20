import './Sobre.css'
import sobreImage from '../../assets/images/sobre.png'
import htmlIcon from '../../assets/images/html-5.png'
import cssIcon from '../../assets/images/css-3.png'
import jsIcon from '../../assets/images/js.png'
import javaIcon from '../../assets/images/java.png'
import mysqlIcon from '../../assets/images/mysql.png'

function Sobre(){

    return(
        <>
            <section id="sobre">
                <div className="container sobre-content">
                    <div className="sobre-text">
                        <h2>Sobre Mim</h2>
                        <p className="descricao">
                            Sou maranhense, de Presidente Dutra, e encontrei na tecnologia uma forma de transformar ideias em soluções reais. Como Tecnólogo em Análise e Desenvolvimento de Sistemas, trabalho com desenvolvimento web, APIs e bancos de dados, sempre buscando aprender e evoluir a cada projeto.
                        </p>
                        <div className="icon">
                            <div className="icon-item">
                                <img src={htmlIcon} alt="Ícone do HTML5" />
                                <span>HTML</span>
                            </div>
                            <div className="icon-item">
                                <img src={cssIcon} alt="Ícone do CSS3" />
                                <span>CSS</span>
                            </div>
                            <div className="icon-item">
                                <img src={jsIcon} alt="Ícone do JavaScript" />
                                <span>JavaScript</span>
                            </div>
                            <div className="icon-item">
                                <img src={javaIcon} alt="Ícone do Java" />
                                <span>Java</span>
                            </div>
                            <div className="icon-item">
                                <img src={mysqlIcon} alt="Ícone do MySQL" />
                                <span>MySQL</span>
                            </div>
                        </div>
                    </div>
                    <div className="sobre-img">
                        <img src={sobreImage} alt="Ilustração de um desenvolvedor trabalhando em um computador" />
                    </div>
                </div>
            </section>
            
        </>
    )

}

export default Sobre