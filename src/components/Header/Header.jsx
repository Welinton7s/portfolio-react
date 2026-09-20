import { useState } from 'react'
import './Header.css'

function Header() {
  const [menuAberto, setMenuAberto] = useState(false)

  function alternarMenu() {
    setMenuAberto((estaAberto) => !estaAberto)
  }

  return (
    <>
      <header>
        <div className="container">
          <nav className="navbar">
            <a href="#home" className="logo">
              <span>
                <span className="tag">&lt;</span>
                Welinton Araújo
                <span className="tag">/&gt;</span>
              </span>
            </a>

            <ul className={`menu ${menuAberto ? 'ativo' : ''}`} id="menu">
              <li><a href="#home">Início</a></li>
              <li><a href="#sobre">Sobre</a></li>
              <li><a href="#projetos">Projetos</a></li>
              <li><a href="#contato">Contato</a></li>
            </ul>

            <button
              className={`menu-toggle ${menuAberto ? 'ativo' : ''}`}
              id="menuToggle"
              aria-label="Abrir menu"
              onClick={alternarMenu}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </nav>
        </div>
      </header>
    </>
  )
}

export default Header