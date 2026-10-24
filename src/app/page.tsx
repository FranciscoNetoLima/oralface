import Image from 'next/image';
import content from '@/design-system/site-content.json';
import { ArrowIcon } from '@/components/ArrowIcon';
import { BotanicalAccent } from '@/components/BotanicalAccent';
import { BrandIcon, type BrandIconName } from '@/components/BrandIcon';
import { EvaluationForm } from '@/components/EvaluationForm';
import { SiteHeader } from '@/components/SiteHeader';
import { ScrollReveal } from '@/components/ScrollReveal';

const portrait = '/images/hero/dra-tallita-hero-master.webp';
const facade = '/images/clinic/fachada-real-oralface.webp';
const benefits: { label: string; icon: BrandIconName }[] = [
  { label: 'Atendimento humanizado', icon: 'diamond' },
  { label: 'Ambiente acolhedor', icon: 'shield' },
  { label: 'Cuidado personalizado', icon: 'people' }
];

export default function Home() {
  return <div className="site-frame">
    <a className="skip-link" href="#conteudo">Ir para o conteúdo</a>
    <SiteHeader />
    <ScrollReveal />
    <main id="conteudo">
      <section className="hero" id="inicio" aria-labelledby="hero-title">
        <BotanicalAccent className="hero-botanical" />
        <div className="hero-grid">
          <div className="hero-copy" data-reveal>
            <p className="eyebrow">{content.hero.eyebrow}</p>
            <h1 id="hero-title"><span>Sorrisos que </span><span>transformam </span><span>histórias</span></h1>
            <p className="hero-description">{content.hero.body}</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#contato"><BrandIcon name="calendar" />Agendar minha consulta<ArrowIcon /></a>
              <a className="button button-outline hero-secondary" href="#tratamentos">Conhecer os tratamentos<ArrowIcon /></a>
            </div>
            <div className="benefits-row" aria-label="Diferenciais da Oral Face">
              {benefits.map((benefit) => <div className="benefit" key={benefit.icon}><BrandIcon name={benefit.icon} /><span>{benefit.label}</span></div>)}
            </div>
          </div>
          <div className="hero-visual" data-reveal>
            <div className="hero-photo-shell"><Image src={portrait} alt="Dra. Tallita Andrade no consultório da Oral Face" fill priority sizes="(max-width: 700px) 100vw, (max-width: 1000px) 52vw, 55vw" className="hero-photo" /></div>
            <div className="hero-signature" aria-hidden="true"><span>Saúde, estética<br />e bem-estar para<br />sorrisos reais.</span><i /></div>
            <div className="hero-doctor-label"><strong>DRA. TALLITA ANDRADE</strong><span>CIRURGIÃ-DENTISTA</span></div>
            <svg className="hero-wave" viewBox="0 0 900 100" preserveAspectRatio="none" aria-hidden="true"><path d="M0 86Q430 144 900 28V100H0Z" /></svg>
          </div>
        </div>
      </section>

      <section className="clinic-combined" id="sobre" aria-labelledby="clinic-title">
        <div className="clinic-combined-upper">
          <div className="combined-container clinic-combined-grid">
            <div className="clinic-combined-copy" data-reveal>
              <p className="section-index"><span>01</span><i />NOSSA CLÍNICA</p>
              <h2 id="clinic-title">Um espaço que<br />acolhe antes<br />da primeira palavra.</h2>
              <p className="clinic-combined-description">{content.clinic.body}</p>
              <a href="#estrutura" className="button combined-button-light">Conhecer nossa estrutura<ArrowIcon /></a>
            </div>
            <figure className="clinic-combined-figure" id="estrutura" data-reveal>
              <div className="clinic-combined-photo"><Image src={facade} alt="Fachada real da Oral Face Odontologia em Juazeiro do Norte" fill sizes="(max-width: 700px) 100vw, (max-width: 1100px) 52vw, 48vw" /></div>
              <figcaption>FACHADA REAL · JUAZEIRO DO NORTE</figcaption>
            </figure>
          </div>
          <svg className="clinic-smile-line" viewBox="0 0 1100 220" preserveAspectRatio="none" aria-hidden="true"><path d="M-20 18C260 276 555 255 1110 0" /><path d="M-25 54C270 307 570 270 1110 32" /></svg>
        </div>
        <div className="clinic-combined-lower"><div className="combined-container"><p>ORAL FACE <span /> <small>CUIDADO INDIVIDUALIZADO</small></p></div></div>
      </section>

      <section className="services-combined" id="tratamentos" aria-labelledby="services-title">
        <div className="combined-container services-combined-layout">
          <div className="services-combined-copy" data-reveal>
            <p className="section-index"><span>02</span><i />NOSSOS TRATAMENTOS</p>
            <h2 id="services-title">Cuidado para<br />cada sorriso.</h2>
            <p className="services-combined-description">Da prevenção à estética, cada cuidado começa com uma avaliação individual. Conheça as possibilidades para o seu sorriso.</p>
            <div className="services-combined-count"><span>01 — 05</span><small>CINCO CAMINHOS DE CUIDADO</small></div>
            <a href="#contato" className="button button-primary services-combined-cta">Agendar avaliação<ArrowIcon /></a>
          </div>
          <div className="services-combined-catalog" id="lista-tratamentos">
            <a className="service-featured" href="#contato" aria-label={`Agendar avaliação para ${content.services[0].title}`} data-reveal>
              <div className="service-featured-image"><Image src={content.services[0].image} alt="" fill sizes="(max-width: 700px) 100vw, (max-width: 1100px) 45vw, 30vw" /></div>
              <div className="service-featured-copy"><p className="section-index"><span>01</span><i />TRATAMENTO EM DESTAQUE</p><h3>{content.services[0].title}</h3><p>{content.services[0].description}</p><ArrowIcon /></div>
            </a>
            <div className="services-combined-grid">
              {content.services.slice(1).map((service, index) => <a className="service-tile" key={service.id} href="#contato" aria-label={`Agendar avaliação para ${service.title}`} data-reveal>
                <div className="service-tile-image"><Image src={service.image} alt="" fill sizes="(max-width: 700px) 32vw, (max-width: 1100px) 18vw, 12vw" /></div>
                <div className="service-tile-copy"><span>0{index + 2}</span><h3>{service.title}</h3><p>{service.description}</p></div><ArrowIcon />
              </a>)}
            </div>
          </div>
        </div>
      </section>

      <section className="doctor-combined" id="dra-tallita" aria-labelledby="doctor-title">
        <div className="combined-container doctor-combined-layout">
          <figure className="doctor-combined-figure" data-reveal><div className="doctor-combined-photo"><Image src="/images/doctor/dra-tallita-inteira.jpeg" alt="Dra. Tallita Andrade em retrato amplo, com roupa clara" width={1121} height={1403} sizes="(max-width: 700px) calc(100vw - 48px), (max-width: 1100px) 42vw, 36vw" /></div><figcaption>DRA. TALLITA ANDRADE</figcaption></figure>
          <div className="doctor-combined-copy" data-reveal>
            <p className="section-index"><span>03</span><i />DRA. TALLITA ANDRADE</p>
            <h2 id="doctor-title">Cuidado, técnica<br />e resultados naturais.</h2>
            <p className="doctor-combined-description">{content.doctor.body}</p>
            <div className="doctor-combined-quote"><span aria-hidden="true">“</span><div><h3>{content.quote.text}</h3><p>{content.quote.body}</p></div></div>
            <a href="#contato" className="button combined-button-light">Agendar minha avaliação<ArrowIcon /></a>
          </div>
        </div>
      </section>
      <section className="contact-combined" id="contato" aria-labelledby="evaluation-title">
        <div className="contact-combined-intro"><div className="combined-container" data-reveal><p className="section-index"><span>04</span><i />AGENDAMENTO</p><h2 id="evaluation-title">Seu próximo sorriso começa com um “olá”.</h2><p>Conte o que você procura. A primeira conversa começa por aqui.</p></div><svg viewBox="0 0 500 280" preserveAspectRatio="none" aria-hidden="true"><path d="M0 45C180-50 355-9 500 280" /></svg></div>
        <div className="contact-combined-form"><div className="combined-container"><EvaluationForm /></div></div>
      </section>
    </main>
    <footer className="site-footer">
      <div className="container footer-main">
        <a href="#inicio" className="footer-brand"><Image src="/brand/logo-oralface-horizontal.png" width={185} height={62} alt="Oral Face Odontologia" /></a>
        <nav aria-label="Navegação do rodapé"><a href="#inicio">Início</a><a href="#sobre">Sobre</a><a href="#tratamentos">Tratamentos</a><a href="#dra-tallita">Dra. Tallita</a><a href="#estrutura">Estrutura</a><a href="#contato">Contato</a></nav>
        <span className="footer-location"><BrandIcon name="pin" />Juazeiro do Norte · CE</span>
      </div>
      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} Oral Face Odontologia</span>
        <span>Desenvolvido por <a href="https://amplium.pro/#inicio" target="_blank" rel="noopener noreferrer">Francisco Neto | Amplium</a></span>
      </div>
    </footer>
  </div>;
}
