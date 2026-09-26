import './Contatos.css'
import { FaEnvelope, FaWhatsapp, FaLocationDot } from "react-icons/fa6"

function Contatos(){

    function enviarMensagem(e) {
        e.preventDefault()
        // TODO: integrar com EmailJS ou um backend real
    }

    return(
        <>
            <section id="contato">
                <div className="container contato-content">
                    <div className="contato-text">
                        <h2>Entre Em Contato</h2>
                    </div>
                    <form className="contato-form" onSubmit={enviarMensagem}>
                        <input type="text" name="nome" placeholder="Nome" required />
                        <input type="email" name="email" placeholder="E-mail" required />
                        <textarea name="mensagem" id="mensagem" placeholder="Digite sua mensagem" rows="5"></textarea>
                        <button type="submit">Enviar Mensagem</button>
                    </form>
                    <div className="contato-lista">
                        <h3>Vamos Conversar!</h3>
                        <p>Se você tem uma oportunidade, projeto ou apenas quer trocar uma ideia, será um prazer falar com você.</p>
                        <ul className="contato-info">
                            <li>
                            <FaEnvelope />
                            <a href="mailto:welintonara7@gmail.com">welintonara7@gmail.com</a>
                            </li>
                            <li>
                            <FaWhatsapp />
                            <a href="https://wa.me/5599984646035" target="_blank" rel="noopener noreferrer">
                                (99) 984646035
                            </a>
                            </li>
                            <li><FaLocationDot /> Presidente Dutra, Maranhão</li>
                        </ul>
                    </div>
                </div>
            </section>
        </>
    )

}

export default Contatos