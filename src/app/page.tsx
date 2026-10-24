import Image from 'next/image';
import content from '@/design-system/site-content.json';
import { ArrowIcon } from '@/components/ArrowIcon';
import { BrandIcon } from '@/components/BrandIcon';
import { EvaluationForm } from '@/components/EvaluationForm';
import { SiteHeader } from '@/components/SiteHeader';
import { ScrollReveal } from '@/components/ScrollReveal';

const portrait = content.hero.imageDesktop;
const facade = content.clinic.image;
const clinicMapUrl = 'https://www.google.com/maps/search/?api=1&query=Oral+Face+Odontologia+Juazeiro+do+Norte+CE';
export default function Home() {
  return <div className="site-frame">
    <a className="skip-link" href="#conteudo">Ir para o conteúdo</a>
    <SiteHeader />
    <ScrollReveal />
    <main id="conteudo">
      <section className="hero hero-editorial" id="inicio" aria-labelledby="hero-title">
        <div className="hero-stage">
          <div className="hero-copy" data-reveal>
            <p className="eyebrow">ORAL FACE / {content.hero.eyebrow}</p>
            <h1 id="hero-title"><span>Sorrisos que</span><span>transformam</span><em>histórias.</em></h1>
            <span className="hero-title-rule" aria-hidden="true" />
            <p className="hero-description">{content.hero.body}</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#contato">Agendar minha consulta<ArrowIcon /></a>
              <a className="hero-secondary" href="#tratamentos">Conhecer os tratamentos<ArrowIcon /></a>
            </div>
          </div>
          <div className="hero-visual" data-reveal>
            <picture className="hero-photo-shell">
              <source media="(max-width: 700px)" srcSet={content.hero.imageMobile} type="image/webp" />
              <Image src={portrait} alt="Dra. Tallita Andrade no consultório odontológico" fill loading="eager" fetchPriority="high" quality={90} sizes="(max-width: 700px) 100vw, (max-width: 1000px) 75vw, 80vw" className="hero-photo" />
            </picture>
            <svg className="hero-photo-curve" viewBox="0 0 200 720" preserveAspectRatio="none" aria-hidden="true"><path d="M0 0H64C21 88-8 205 24 317C62 446 87 573 13 720H0Z" className="hero-curve-fill" /><path d="M64 0C21 88-8 205 24 317C62 446 87 573 13 720" className="hero-curve-line" /></svg>
            <svg className="hero-mobile-wave" viewBox="0 0 390 55" preserveAspectRatio="none" aria-hidden="true"><path d="M0 26C102 62 288 62 390 26V55H0Z" className="hero-wave-fill" /><path d="M0 26C102 62 288 62 390 26" className="hero-wave-line" /></svg>
            <span className="hero-doctor-label">DRA. TALLITA ANDRADE</span>
          </div>
        </div>
        <div className="hero-benefits" aria-label="Diferenciais da Oral Face"><div className="hero-benefits-inner">{content.benefits.map((benefit) => <span key={benefit}>{benefit}</span>)}</div></div>
      </section>

      <section className="clinic-combined" id="sobre" aria-labelledby="clinic-title">
        <div className="clinic-combined-upper">
          <div className="combined-container clinic-combined-grid">
            <div className="clinic-combined-copy" data-reveal>
              <p className="section-index"><span>01</span><i />NOSSA CLÍNICA</p>
              <h2 id="clinic-title">Um espaço que<br />acolhe antes<br />da primeira palavra.</h2>
              <p className="clinic-combined-description">{content.clinic.body}</p>
              <a href={clinicMapUrl} className="button combined-button-light" target="_blank" rel="noopener noreferrer">Conhecer nossa estrutura<ArrowIcon /></a>
            </div>
            <figure className="clinic-combined-figure" id="estrutura" data-reveal>
              <div className="clinic-combined-photo"><Image src={facade} alt="Fachada real da Oral Face Odontologia em Juazeiro do Norte" fill unoptimized sizes="(max-width: 700px) 100vw, (max-width: 1100px) 52vw, 48vw" /></div>
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
              <div className="service-featured-image"><Image src={content.services[0].image} alt="" fill unoptimized sizes="(max-width: 700px) 100vw, (max-width: 1100px) 45vw, 30vw" /></div>
              <div className="service-featured-copy"><p className="section-index"><span>01</span><i />TRATAMENTO EM DESTAQUE</p><h3>{content.services[0].title}</h3><p>{content.services[0].description}</p><ArrowIcon /></div>
            </a>
            <div className="services-combined-grid">
              {content.services.slice(1).map((service, index) => <a className="service-tile" key={service.id} href="#contato" aria-label={`Agendar avaliação para ${service.title}`} data-reveal>
                <div className="service-tile-image"><Image src={service.image} alt="" fill unoptimized sizes="(max-width: 700px) 32vw, (max-width: 1100px) 18vw, 12vw" /></div>
                <div className="service-tile-copy"><span>0{index + 2}</span><h3>{service.title}</h3><p>{service.description}</p></div><ArrowIcon />
              </a>)}
            </div>
          </div>
        </div>
      </section>

      <section className="doctor-combined" id="dra-tallita" aria-labelledby="doctor-title">
        <div className="combined-container doctor-combined-layout">
          <figure className="doctor-combined-figure" data-reveal><div className="doctor-combined-photo"><Image src="/images/doctor/dra-tallita-inteira.jpeg" alt="Dra. Tallita Andrade em retrato amplo, com roupa clara" width={1121} height={1403} quality={90} sizes="(max-width: 700px) calc(100vw - 48px), (max-width: 1100px) 55vw, min(60vw, 1100px)" /></div><figcaption>DRA. TALLITA ANDRADE</figcaption></figure>
          <div className="doctor-combined-copy" data-reveal>
            <p className="section-index"><span>03</span><i />DRA. TALLITA ANDRADE</p>
            <h2 id="doctor-title">Cuidado, técnica<br />e resultados naturais.</h2>
            <p className="doctor-combined-description">{content.doctor.body}</p>
            <div className="doctor-combined-quote"><span aria-hidden="true">“</span><div><h3>{content.quote.text}</h3><p>{content.quote.body}</p></div></div>
          </div>
        </div>
      </section>
      <section className="contact-combined" id="contato" aria-labelledby="evaluation-title">
        <div className="contact-combined-intro"><div className="combined-container" data-reveal><p className="section-index"><span>04</span><i />AGENDAMENTO</p><h2 id="evaluation-title">Seu próximo sorriso começa com um “olá”.</h2><p>Conte o que você procura. A primeira conversa começa por aqui.</p></div><svg viewBox="0 0 500 280" preserveAspectRatio="none" aria-hidden="true"><path d="M0 45C180-50 355-9 500 280" /></svg></div>
        <div className="contact-combined-form"><div className="combined-container"><EvaluationForm /></div></div>
      </section>
    </main>
    <footer className="site-footer">
      <div className="container footer-lead">
        <p>ORAL FACE · ODONTOLOGIA</p>
        <h2>Seu sorriso, <em>cuidado em cada detalhe.</em></h2>
      </div>
      <div className="container footer-main">
        <div className="footer-about">
          <a href="#inicio" className="footer-brand" aria-label="Oral Face Odontologia — voltar ao início"><Image src="/brand/logo-oralface-transparente.png" width={260} height={86} alt="Oral Face Odontologia" /></a>
          <p>Odontologia em Juazeiro do Norte que une saúde, estética e cuidado individualizado.</p>
        </div>
        <nav className="footer-navigation" aria-label="Navegação do rodapé">
          <h3>Explore</h3>
          <a href="#sobre">Nossa clínica</a>
          <a href="#tratamentos">Tratamentos</a>
          <a href="#dra-tallita">Dra. Tallita</a>
          <a href="#contato">Agendamento</a>
        </nav>
        <div className="footer-contact">
          <h3>Entre em contato</h3>
          <a href={`https://wa.me/${content.brand.phoneE164.replace(/\D/g, '')}`} target="_blank" rel="noopener noreferrer"><BrandIcon name="whatsapp" /><span>(88) 9 8814-3184</span><ArrowIcon diagonal /></a>
          <p>Envie uma mensagem para solicitar sua avaliação.</p>
        </div>
        <div className="footer-location">
          <h3>Onde estamos</h3>
          <p><BrandIcon name="pin" />Juazeiro do Norte · CE</p>
          <a href={clinicMapUrl} target="_blank" rel="noopener noreferrer">Ver localização no mapa <ArrowIcon diagonal /></a>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} Oral Face Odontologia</span>
        <span>Desenvolvido por <a href="https://amplium.pro/#inicio" target="_blank" rel="noopener noreferrer">Francisco Neto | Amplium</a></span>
      </div>
    </footer>
  </div>;
}
