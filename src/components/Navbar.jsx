import { Link } from "react-router-dom";

export default function Navbar({ activeSection = "home" }) {
  const linkClass = (section) =>
    activeSection === section
      ? "text-pet-dark font-extrabold transition-colors"
      : "text-white font-bold hover:text-pet-dark transition-colors";

  return (
    <header className="sticky top-0 z-50 w-full bg-pet-teal">
      <div className="max-w-6xl mx-auto px-6 md:px-10 h-20 flex items-center justify-between">
        {/* Logo exata do Figma */}
        <Link to="/" className="flex flex-col items-center leading-none select-none">
          <span
            style={{ fontFamily: "var(--font-display)" }}
            className="text-2xl md:text-[26px] font-extrabold tracking-tight text-black"
          >
            Hora do Pet
          </span>
          <span className="text-[11px] font-bold text-white tracking-wide mt-0.5">
            Clínica Veterinária
          </span>
        </Link>

        {/* Menu exato do Figma */}
        <nav className="hidden md:flex items-center gap-10 text-[15px]">
          <a href="#home" className={linkClass("home")}>
            Home
          </a>
          <a href="#servicos" className={linkClass("servicos")}>
            Serviços
          </a>
          <a href="#sobre" className={linkClass("sobre")}>
            Sobre nós
          </a>
          <a href="#contato" className={linkClass("contato")}>
            Contato
          </a>
        </nav>
      </div>
    </header>
  );
}