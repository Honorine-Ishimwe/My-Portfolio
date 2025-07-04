import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <header>
      <nav className="navbar bg-dark px-4">
        <div className="container-fluid justify-content-end d-flex gap-4">
          <Link className="text-white text-decoration-none" to="/">Home</Link>
          <a href="/Honorine_Ishimwe_Resume.pdf" target="_blank" rel="noopener noreferrer" className="text-white text-decoration-none">Resume</a>
          <a href="#projects" className="text-white text-decoration-none">Projects</a>
          <Link className="text-white text-decoration-none" to="/contact">Contact</Link>
        </div>
      </nav>
    </header>
  );
}