import Image from 'next/image';
import content from '@/design-system/site-content.json';
import { ArrowIcon } from '@/components/ArrowIcon';
import { BotanicalAccent } from '@/components/BotanicalAccent';
import { BrandIcon, type BrandIconName } from '@/components/BrandIcon';
import { EvaluationForm } from '@/components/EvaluationForm';
import { SiteHeader } from '@/components/SiteHeader';
import { ScrollReveal } from '@/components/ScrollReveal';

const portrait = '/images/hero/dra-tallita-hero-master.webp';
const facade = '/images/clinic/fachada-oralface-aprovada.webp';
const serviceIcons: BrandIconName[] = ['tooth', 'aligner', 'smile', 'flower', 'gear'];
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

      <section className="clinic" id="sobre" aria-labelledby="clinic-title">
        <span id="estrutura" className="anchor-offset" aria-hidden="true" />
        <div className="clinic-grid">
          <div className="clinic-gallery" data-reveal>
            <div className="clinic-main-image"><Image src={facade} alt="Fachada aprovada da Oral Face Odontologia em Juazeiro do Norte" fill sizes="(max-width: 700px) 100vw, (max-width: 1000px) 55vw, 58vw" /></div>
          </div>
          <div className="clinic-copy" data-reveal>
            <p className="eyebrow">{content.clinic.eyebrow}</p>
            <h2 id="clinic-title">Um espaço pensado<br />para você sorrir bem</h2>
            <p>{content.clinic.body}</p>
            <div className="clinic-highlights">
              <div><BrandIcon name="pin" /><span>Juazeiro<br />do Norte</span></div>
              <div><BrandIcon name="sofa" /><span>Ambiente<br />acolhedor</span></div>
              <div><BrandIcon name="heart" /><span>Cuidado<br />individualizado</span></div>
            </div>
            <a href="#estrutura" className="button button-outline">Conhecer nossa estrutura<ArrowIcon /></a>
          </div>
        </div>
      </section>

      <section className="services" id="tratamentos" aria-labelledby="services-title">
        <div className="container services-layout">
          <div className="services-copy" data-reveal>
            <p className="eyebrow">NOSSOS TRATAMENTOS</p>
            <h2 id="services-title">Soluções completas para um sorriso mais saudável e bonito</h2>
            <p>Da prevenção à estética, cada cuidado começa com uma avaliação individual. Conheça as possibilidades para o seu sorriso.</p>
            <a href="#contato" className="button button-outline">Agendar avaliação<ArrowIcon /></a>
          </div>
          <div className="services-grid" id="lista-tratamentos">
            {content.services.map((service, index) => <article className="service-card" key={service.id} data-reveal>
              <div className="service-image"><Image src={service.image} alt="" fill sizes="(max-width: 700px) 45vw, (max-width: 1100px) 30vw, 17vw" /></div>
              <div className="service-icon"><BrandIcon name={serviceIcons[index]} /></div>
              <div className="service-content"><h3>{service.title}</h3><p>{service.description}</p><a href="#contato" aria-label={'Saiba mais sobre ' + service.title}>Saiba mais<ArrowIcon /></a></div>
            </article>)}
          </div>
        </div>
      </section>

      <section className="doctor-section" id="dra-tallita" aria-labelledby="doctor-title">
        <div className="container doctor-layout">
          <div className="doctor-portrait" data-reveal><Image src="/images/doctor/dra-tallita-inteira.jpeg" alt="Dra. Tallita Andrade em retrato de corpo inteiro" width={1121} height={1403} sizes="(max-width: 700px) calc(100vw - 48px), (max-width: 1000px) 40vw, 520px" /></div>
          <div className="doctor-introduction" data-reveal>
            <p className="eyebrow">{content.doctor.eyebrow}</p>
            <h2 id="doctor-title">{content.doctor.title}</h2>
            <p>{content.doctor.body}</p>
            <div className="doctor-philosophy">
              <span aria-hidden="true">“</span>
              <div><h3>{content.quote.text}</h3><p>{content.quote.body}</p></div>
            </div>
            <a href="#contato" className="button button-outline">Agendar minha avaliação<ArrowIcon /></a>
          </div>
        </div>
      </section>
      <section className="contact-section" id="contato" aria-labelledby="evaluation-title">
        <div className="container contact-layout">
          <div className="contact-introduction" data-reveal>
            <p className="eyebrow">ESTAMOS AQUI PARA VOCÊ</p>
            <h2>O próximo passo para o seu sorriso começa aqui.</h2>
            <p>Conte o que você procura. Assim podemos iniciar uma conversa sobre o cuidado mais adequado para você.</p>
            <div className="contact-note"><BrandIcon name="heart" /><span>Um atendimento com escuta, atenção e respeito à sua individualidade.</span></div>
          </div>
          <div className="evaluation"><EvaluationForm /></div>
        </div>
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
