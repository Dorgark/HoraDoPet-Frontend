import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import servicosMock from "../mocks/servicos.json";

export default function Home() {
  const [activeSection, setActiveSection] = useState("home");

  // Atualiza qual link fica escuro na Navbar conforme a rolagem (igual ao seu Figma)
  useEffect(() => {
    const sections = ["home", "servicos", "sobre", "contato"];
    const handleScroll = () => {
      const scrollPos = window.scrollY + 250;
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el && scrollPos >= el.offsetTop && scrollPos < el.offsetTop + el.offsetHeight) {
          setActiveSection(id);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar activeSection={activeSection} />

      {/* 1. SEÇÃO HERO (Fiel à imagem 1 do Figma) */}
      <section
        id="home"
        className="max-w-5xl mx-auto w-full px-6 md:px-10 py-16 md:py-24 grid grid-cols-1 md:grid-cols-12 gap-8 items-center"
      >
        {/* Imagem do gatinho à esquerda */}
        <div className="md:col-span-5 flex justify-center">
          <img
            src="/imgs/gatinho-hero.png"
            alt="Gatinho Hora do Pet"
            className="w-64 md:w-76 h-auto object-contain"
          />
        </div>

        {/* Título e 2 botões pílula à direita */}
        <div className="md:col-span-7 space-y-8 text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-[42px] font-extrabold text-pet-dark leading-[1.15] tracking-tight">
            O <span className="text-pet-orange">cuidado</span> que seu{" "}
            <span className="text-pet-orange">pet</span> merece:
            <br />
            <span className="italic font-extrabold">sem</span> filas e{" "}
            <span className="italic font-extrabold">sem</span> estresse
          </h1>

          {/* Os dois botões arredondados do Figma */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
            <a
              href="#servicos"
              className="min-w-[175px] px-7 py-3.5 rounded-2xl bg-pet-gray-btn hover:bg-slate-300 text-pet-dark font-extrabold text-sm text-center transition-colors"
            >
              Ver Serviços
            </a>
            <Link
              to="/agendar"
              className="min-w-[175px] px-7 py-3.5 rounded-2xl bg-pet-teal hover:bg-pet-teal-hover text-white font-extrabold text-sm text-center transition-colors"
            >
              Agendar Agora
            </Link>
          </div>
        </div>
      </section>

      {/* 2. SEÇÃO SERVIÇOS (Fiel aos 3 cards de moldura escura do Figma) */}
      <section id="servicos" className="max-w-6xl mx-auto w-full px-6 md:px-10 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
          {servicosMock.map((servico) => (
            <div
              key={servico.id}
              className="bg-pet-dark p-3.5 rounded-[28px] shadow-sm flex flex-col"
            >
              {/* Interior branco arredondado do card */}
              <div className="bg-[#F8FAFC] rounded-[20px] p-6 flex-1 flex flex-col justify-between min-h-[340px]">
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs font-bold text-pet-teal">
                    <span>{servico.duracao_min} min</span>
                    <span className="text-pet-dark text-sm font-extrabold">
                      R$ {servico.preco.toFixed(2).replace(".", ",")}
                    </span>
                  </div>

                  <h2 className="text-xl font-extrabold text-pet-dark pt-1">
                    {servico.nome}
                  </h2>

                  <p className="text-sm font-medium text-slate-600 leading-relaxed">
                    {servico.descricao}
                  </p>
                </div>

                {/* Botão pílula verde na base do card */}
                <Link
                  to={`/agendar?servico=${servico.id}`}
                  className="mt-8 w-full py-3.5 rounded-2xl bg-pet-teal hover:bg-pet-teal-hover text-white font-extrabold text-sm text-center transition-colors block"
                >
                  Agendar Horário
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. SEÇÃO SOBRE NÓS (Fiel à sobreposição da foto encostada na direita do Figma) */}
      <section id="sobre" className="w-full py-16 md:py-24 overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          <div className="relative grid grid-cols-1 md:grid-cols-12 items-center">
            {/* Coluna da esquerda: Título "Sobre nós" + Caixa sobreposta */}
            <div className="md:col-span-6 z-10 space-y-6">
              <h2
                style={{ fontFamily: "var(--font-display)" }}
                className="text-4xl md:text-5xl font-extrabold text-black tracking-tight pl-2"
              >
                Sobre nós
              </h2>

              <div className="border-2 border-black rounded-[28px] p-6 md:p-8 bg-white/80 backdrop-blur-xs shadow-sm space-y-4 text-[14.5px] font-semibold text-pet-dark leading-snug md:-mr-24">
                <p>
                  Localizada em <strong className="font-extrabold text-black">Piedade</strong>, nossa
                  clínica veterinária oferece cuidados dedicados aos seus pets há 11 anos.
                </p>
                <p>
                  Somos especializados em cirurgias complexas, consultas clínicas,
                  exames de imagem e exames laboratoriais.
                </p>
                <p>
                  Também disponibilizamos de serviços de estética, além de farmácia,
                  acessórios e rações para garantir que seu pet esteja sempre{" "}
                  <span className="text-pet-orange font-extrabold">saudável</span> e{" "}
                  <span className="text-pet-orange font-extrabold">feliz</span>.
                </p>
              </div>
            </div>

            {/* Coluna da direita: Foto da clínica com cantos esquerdos bem arredondados */}
            <div className="md:col-span-6 mt-6 md:mt-0">
              <img
                src="/imgs/clinica-sobre.png"
                alt="Interior da clínica Hora do Pet"
                className="w-full h-[360px] md:h-[430px] object-cover rounded-[56px] md:rounded-r-none md:rounded-l-[72px]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 4. RODAPÉ CONTATO (Complementado mantendo a barra verde-esmeralda do Figma) */}
      <footer id="contato" className="w-full bg-pet-teal text-white mt-auto">
        <div className="max-w-6xl mx-auto px-6 md:px-10 py-10 grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {/* Coluna 1: Marca */}
          <div>
            <span
              style={{ fontFamily: "var(--font-display)" }}
              className="text-2xl font-extrabold text-black block"
            >
              Hora do Pet
            </span>
            <span className="text-xs font-bold text-white block mb-3">
              Clínica Veterinária
            </span>
            <p className="text-xs text-white/90 leading-relaxed max-w-xs">
              Agendamento digital rápido e atendimento veterinário humanizado em Piedade, Jaboatão dos Guararapes.
            </p>
          </div>

          {/* Coluna 2: Localização e Contato */}
          <div className="space-y-1.5 text-sm">
            <h3 className="font-extrabold text-pet-dark uppercase text-xs tracking-wider mb-2">
              Onde Estamos
            </h3>
            <p className="font-semibold">Av. Bernardo Vieira de Melo — Piedade</p>
            <p className="text-white/90 text-xs">Jaboatão dos Guararapes — PE</p>
            <p className="font-bold pt-1">WhatsApp: (81) 99999-0000</p>
          </div>

          {/* Coluna 3: Horário e Acesso Rápido */}
          <div className="space-y-1.5 text-sm">
            <h3 className="font-extrabold text-pet-dark uppercase text-xs tracking-wider mb-2">
              Funcionamento
            </h3>
            <p className="font-semibold">Segunda a Sábado: 08h às 19h</p>
            <p className="text-white/90 text-xs">Consultas e estética com hora marcada</p>
            <div className="pt-2">
              <Link
                to="/login"
                className="inline-block px-4 py-2 rounded-xl bg-pet-dark text-white font-bold text-xs hover:bg-slate-800 transition-colors"
              >
                Acessar Área do Tutor
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}