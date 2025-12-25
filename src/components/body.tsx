import "./body.css";
import {
  FaCode,
  FaPaintBrush,
  FaBullhorn,
  FaPencilRuler,
} from "react-icons/fa";

export default function Body() {
  return (
    <>
      <div className="main-phone">
        <section className="hero">
          <div className="hero-container">
            <div className="hero-content">
              <h1 className="hero-title">
                <b className="highlight">Conecte</b> seu talento com{" "}
                <b className="highlight">oportunidades</b> incríveis
              </h1>
              <p className="hero-subtitle">
                Para quem precisa de mão de obra hoje e para quem quer trabalhar
                agora.
              </p>
            </div>
            <div className="hero-image">
              <img
                src="/img/hero-illustration.jpg"
                alt="Freelancers trabalhando"
              />
              <div className="floating-card card-1">
                <div className="card-content">
                  <FaCode className="icon" />
                  <span>Desenvolvimento</span>
                </div>
              </div>
              <div className="floating-card card-2">
                <div className="card-content">
                  <FaPaintBrush className="icon" />
                  <span>Design</span>
                </div>
              </div>
              <div className="floating-card card-3">
                <div className="card-content">
                  <FaBullhorn className="icon" />
                  <span>Marketing</span>
                </div>
              </div>
              <div className="floating-card card-4">
                <div className="card-content">
                  <FaPencilRuler className="icon" />
                  <span>Construção</span>
                </div>
              </div>
            </div>
          </div>
          <div className="hero-background"></div>
        </section>
        <div className="body">
          <div className="body__container">
            <section className="body__section" aria-labelledby="chamou-o-que-e">
              <h2 id="chamou-o-que-e" className="body_title">
                O que é a <b>Chamou</b>?
              </h2>
              <p className="body__text">
                A Chamou é uma plataforma de vagas instantâneas para trabalhos
                rápidos, conectando empresas a pessoas disponíveis em tempo
                real.
              </p>
              <p className="body__text">
                O apelido do projeto: “20 pila ao contrário” em vez de buscar
                bicos, a pessoa sinaliza disponibilidade e recebe oportunidades
                compatíveis.
              </p>
            </section>

            <section
              className="body__sectionn"
              aria-labelledby="chamou-problema"
            >
              <h2 id="chamou-problema" className="body__title">
                O problema
              </h2>
              <p className="body__text">
                Demandas pontuais (cobertura de turno, picos de movimento, ações
                curtas) precisam de resposta rápida, e processos tradicionais
                costumam ser lentos para isso.
              </p>
              <p className="body__text">
                Do outro lado, quem quer trabalhos rápidos perde tempo com
                anúncios genéricos e pouca clareza sobre condições e
                disponibilidade.
              </p>
            </section>

            <section
              className="body__sectionn"
              aria-labelledby="chamou-solucao"
            >
              <h2 id="chamou-solucao" className="body__title">
                A solução
              </h2>
              <p className="body__text">
                A empresa publica uma demanda objetiva, e o Chamou direciona o
                chamado para quem está disponível naquele local e horário.
              </p>
              <p className="body__text">
                O objetivo é encurtar o caminho entre necessidade e confirmação,
                sem transformar trabalho pontual em um processo longo.
              </p>
            </section>

            <section
              className="body__section"
              aria-labelledby="chamou-como-funciona"
            >
              <h2 id="chamou-como-funciona" className="body_listten">
                Como funciona
              </h2>
              <ul className="body__list">
                <li className="body__listItem">
                  A pessoa cria um perfil e define disponibilidade (onde e
                  quando).
                </li>
                <li className="body__listItem">
                  A empresa publica uma necessidade com condições claras (local,
                  duração, horário, valor).
                </li>
                <li className="body__listItem">
                  O chamado chega para quem está disponível; a pessoa aceita ou
                  recusa.
                </li>
                <li className="body__listItem">
                  Ao aceitar, o trabalho segue para confirmação e execução.
                </li>
              </ul>
            </section>

            <section
              className="body__section"
              aria-labelledby="chamou-diferenciais"
            >
              <h2 id="chamou-diferenciais" className="body__title">
                Diferenciais
              </h2>
              <ul className="body__list">
                <li className="body__listItem">
                  Feito para demandas curtas: decisão rápida e pouco atrito.
                </li>
                <li className="body__listItem">
                  Disponibilidade como critério central: “quem pode agora?”.
                </li>
                <li className="body__listItem">
                  Condições objetivas para reduzir ruído e idas e vindas.
                </li>
                <li className="body__listItem">
                  Estrutura simples, fácil de entender e de evoluir sem perder
                  foco.
                </li>
              </ul>
            </section>

            <section className="body__section" aria-labelledby="chamou-status">
              <h2 id="chamou-status" className="body__title">
                Estado atual do projeto
              </h2>
              <p className="body__text">
                O Chamou está em desenvolvimento como MVP, validando o fluxo de
                chamado instantâneo e o valor prático para empresas e pessoas
                disponíveis.
              </p>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
