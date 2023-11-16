import '../styles/style.css';

function Header() {
    return (
      <header id="cover">
      <nav>
        <li>
          <a href="#about-me" id="nav-about">About Me</a>
          <a href="#projects" id="nav-proj">Projects</a>
          <a href="#resume" id="nav-res">Resume</a>
          <a href="#contact" id="border">Contact</a>
        </li>
      </nav>      
      <h1>Welcome</h1>      
    </header>
    )
}

export default Header;