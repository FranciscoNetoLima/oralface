'use client';

import { useRef, useState, type FormEvent } from 'react';
import content from '@/design-system/site-content.json';
import { ArrowIcon } from './ArrowIcon';
import { BrandIcon } from './BrandIcon';

const phone = (content.brand as { phoneE164: string | null }).phoneE164;
const phoneDigits = phone?.replace(/\D/g, '') ?? null;
const phoneLabel = phoneDigits?.startsWith('55') && phoneDigits.length === 13
  ? `(${phoneDigits.slice(2, 4)}) ${phoneDigits.slice(4, 5)} ${phoneDigits.slice(5, 9)}-${phoneDigits.slice(9)}`
  : phone;

export function EvaluationForm() {
  const dialog = useRef<HTMLDialogElement>(null);
  const [request, setRequest] = useState('');
  const [copied, setCopied] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const fields = new FormData(event.currentTarget);
    const name = String(fields.get('name') ?? '').trim();
    const whatsapp = String(fields.get('whatsapp') ?? '').trim();
    const email = String(fields.get('email') ?? '').trim();
    const message = String(fields.get('message') ?? '').trim();
    const lines = [
      `Olá! Gostaria de agendar uma avaliação na Oral Face. Meu nome é ${name}.`,
      `Meu WhatsApp: ${whatsapp}.`,
      email ? `Meu e-mail: ${email}.` : '',
      message ? `Gostaria de conversar sobre: ${message}` : ''
    ].filter(Boolean);
    const text = lines.join('\n');

    if (phoneDigits) {
      window.open(`https://wa.me/${phoneDigits}?text=${encodeURIComponent(text)}`, '_blank', 'noopener,noreferrer');
      return;
    }

    setRequest(text);
    setCopied(false);
    dialog.current?.showModal();
  }

  async function copyRequest() {
    try {
      await navigator.clipboard.writeText(request);
      setCopied(true);
    } catch {
      setCopied(false);
    }
  }

  return <>
    <div className="evaluation-card" data-reveal>
      <p className="eyebrow">SEU PRÓXIMO PASSO</p>
      <h2 id="evaluation-title">Agende sua avaliação</h2>
      <p className="evaluation-intro">O primeiro passo para o seu melhor sorriso. Conte como podemos ajudar você.</p>
      <form className="evaluation-form" onSubmit={handleSubmit}>
        <label><span className="sr-only">Nome completo</span><input name="name" type="text" autoComplete="name" placeholder="Nome completo" maxLength={100} required /></label>
        <label><span className="sr-only">WhatsApp</span><input name="whatsapp" type="tel" autoComplete="tel" inputMode="tel" placeholder="WhatsApp" maxLength={30} required /></label>
        <label><span className="sr-only">E-mail</span><input name="email" type="email" autoComplete="email" placeholder="E-mail" maxLength={120} /></label>
        <label><span className="sr-only">Como podemos ajudar?</span><textarea name="message" placeholder="Como podemos ajudar?" maxLength={500} rows={2} /></label>
        <button className="button button-primary" type="submit"><BrandIcon name="calendar" />Agendar avaliação<ArrowIcon /></button>
      </form>
      <div className="evaluation-alternative">
        <BrandIcon name="whatsapp" />
        <div><span>Ou fale pelo WhatsApp</span>{phoneDigits ? <a href={`https://wa.me/${phoneDigits}`} target="_blank" rel="noopener noreferrer">{phoneLabel}<ArrowIcon /></a> : <button type="button" onClick={() => { setRequest(''); dialog.current?.showModal(); }}>Canal em confirmação <ArrowIcon /></button>}</div>
      </div>
    </div>
    <dialog ref={dialog} className="contact-dialog" aria-labelledby="evaluation-dialog-title">
      <form method="dialog"><button className="dialog-close" aria-label="Fechar aviso">×</button></form>
      <p className="eyebrow">ORAL FACE ODONTOLOGIA</p>
      <h2 id="evaluation-dialog-title">Agendamento em preparação</h2>
      <p>O canal de atendimento ainda está em confirmação nesta prévia. Seus dados não foram enviados.</p>
      {request && <><p>Você pode copiar sua solicitação para usar quando o contato da clínica estiver disponível.</p><button type="button" className="button button-primary" onClick={copyRequest}>{copied ? 'Solicitação copiada' : 'Copiar solicitação'}<ArrowIcon /></button></>}
    </dialog>
  </>;
}
