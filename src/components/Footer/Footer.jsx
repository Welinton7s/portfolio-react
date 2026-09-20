import './Footer.css'
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Footer(){

    return(
        <>
        
        <footer>
            <div className="container footer-content">
                <p>© 2026 Welinton Araújo. Todos os direitos reservados.</p>
                <div className="footer-social">
                    <a href="https://github.com/Welinton7s" target="_blank" aria-label="GitHub">
                        <FaGithub />
                    </a>
                    <a href="https://www.linkedin.com/in/welinton-araújo-w7/" target="_blank" aria-label="LinkedIn">
                        <FaLinkedin />
                    </a>
                </div>
            </div>
        </footer>

        </>
    )

}

export default Footer