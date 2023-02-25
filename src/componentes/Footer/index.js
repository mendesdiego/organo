import './Footer.css'

const Footer = () => {
    return(
        <footer className='footer'>
            <div className='sociais'>
                <ul>
                    <li><a href='facebook.com' target='_blank'><img src='../imagens/fb.png' alt='Ícone Facebook' /></a></li>
                    <li><a href='twitter.com' target=''><img src='../imagens/tw.png' alt='Ícone Twitter' /></a></li>
                    <li><a href='instagram.com' target=''><img src='../imagens/ig.png' alt='Ícone Instagram' /></a></li>
                </ul>
            </div>
            <div className='logo-footer'>
                <img src='../imagens/logo.png' alt='Logo Organo'/>
            </div>
            <div className='assinatura'>
                <p>Desenvolvido por Diego Mendes</p>
            </div>
        </footer>
    )
}

export default Footer