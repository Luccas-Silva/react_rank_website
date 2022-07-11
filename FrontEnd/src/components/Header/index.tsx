import logo from '../../assets/img/logo.svg'

import './styles.css'

function Header() {
    return (
        <header>
            <div className='dsrank-logo-containar'>
                <img src={logo} alt="DSRank" />
                <h1> ⠀⠀⠀DSRank</h1>
                <p>
                    <a href="https://github.com/Luccas-Silva">Desenvolvido por Luccas-Silva</a>
                </p>
            </div>
        </header>
    )
}

export default Header