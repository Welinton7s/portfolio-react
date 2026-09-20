import './Hero.css'
import heroImage from '../../assets/images/perfil.png'
import cv from '../../assets/arquivos/cv-welinton-araujo.pdf'

function Hero(){

    return(
        <>
          <section id="hero">

                <div className="container hero-content">

                    <div className="hero-text">

                        <p className="apresentacao">Olá, eu sou</p>

                        <h1>Welinton <span>Araújo</span></h1>

                        <h2>Desenvolvedor Full Stack</h2>

                        <p className="descricao">
                            Tecnólogo em Análise e Desenvolvimento de Sistemas.
                            Desenvolvo aplicações utilizando Java, Spring Boot,
                            HTML, CSS, JavaScript e MySQL, criando soluções
                            modernas e eficientes.
                        </p>

                        <div className="botoes">
                            <a href="#projetos" className="btn">
                                Conheça meus projetos
                            </a>

                            <a href="#contato" className="btn-outline">
                                Entre em contato
                            </a>

                            <a href={cv} download className="btn-outline">Download CV</a>
                        </div>

                    </div>

                    <div className="hero-img">
                        <img src={heroImage} alt="Foto de perfil de Welinton Araújo, desenvolvedor Full Stack" />
                    </div>

                </div>

            </section>
            
        </>
    )

}

export default Hero