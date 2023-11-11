import './styles.css';
function Header() {
  return(
    <header>
        <div className="stefanini-logo-container">
            <img src="https://stefanini.com/pt-br/wp-content/uploads/sites/3/2022/07/stefanini_logo-1.png" alt="stefanini_logo" />
            <h1>Seletivo Desenvolvedor FullStack</h1>
            <p>
              Desenvolvido por
              <a href="https://www.linkedin.com/in/ulaecio"> @ulaecio</a>
            </p>
        </div>
    </header>
  )
}

export default Header;
