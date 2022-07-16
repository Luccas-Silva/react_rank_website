import logo1 from '../../assets/img/logo1.svg'

import './styles.css'

function Header() {
    return (
        <header>
            <div className='dsrank-logo-containar'>
                <a href="https://github.com/Luccas-Silva">
                    <img src={logo1} alt="DSRank" />
                    <h1>⠀⠀ DSRank</h1>
                    <p>Desenvolvido por Luccas-Silva</p>
                </a>
            </div>
        </header>
    )
}

export default Header