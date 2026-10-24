'use client';

import { useRef, useState, type FormEvent } from 'react';
import content from '@/design-system/site-content.json';
import { ArrowIcon } from './ArrowIcon';

const phone = (content.brand as { phoneE164: string | null }).phoneE164;
const parsedPhoneDigits = phone?.replace(/\D/g, '') ?? null;
const phoneDigits = parsedPhoneDigits && /^55\d{10,11}$/.test(parsedPhoneDigits) ? parsedPhoneDigits : null;
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
    const whatsappDigits = whatsapp.replace(/\D/g, '');
    const nameField = event.currentTarget.elements.namedItem('name') as HTMLInputElement;
    const whatsappField = event.currentTarget.elements.namedItem('whatsapp') as HTMLInputElement;
    if (name.length < 2) {
      nameField.setCustomValidity('Informe seu nome.');
      nameField.reportValidity();
      return;
    }
    if (!/^\d{10,11}$/.test(whatsappDigits)) {
      whatsappField.setCustomValidity('Informe um WhatsApp com DDD (10 ou 11 dígitos).');
      whatsappField.reportValidity();
      return;
    }
    const lines = [
      `Olá! Gostaria de agendar uma avaliação na Oral Face. Meu nome é ${name}.`,
      `Meu WhatsApp: ${whatsappDigits}.`,
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
    <div className="evaluation-combined" data-reveal>
      <form className="evaluation-combined-form" method="post" onSubmit={handleSubmit}>
        <fieldset className="evaluation-combined-details">
          <legend>Seus dados</legend>
          <div className="evaluation-combined-pair">
            <label><span>Nome completo</span><input name="name" type="text" autoComplete="name" placeholder="Como podemos chamar você?" minLength={2} maxLength={100} onInput={(event) => event.currentTarget.setCustomValidity('')} required /></label>
            <label><span>WhatsApp com DDD</span><input name="whatsapp" type="tel" autoComplete="tel" inputMode="tel" placeholder="(88) 9 0000-0000" maxLength={30} onInput={(event) => event.currentTarget.setCustomValidity('')} required /></label>
          </div>
          <label><span>E-mail · opcional</span><input name="email" type="email" autoComplete="email" placeholder="seuemail@exemplo.com" maxLength={120} /></label>
        </fieldset>
        <fieldset className="evaluation-combined-message">
          <legend>Sua mensagem</legend>
          <label><span>Como podemos ajudar?</span><textarea name="message" placeholder="Conte brevemente o que você procura" maxLength={500} rows={3} /></label>
          <button className="button button-primary" type="submit">Conversar pelo WhatsApp<ArrowIcon /></button>
          <div className="evaluation-combined-direct"><span>OU FALE DIRETAMENTE</span>{phoneDigits ? <a href={`https://wa.me/${phoneDigits}`} target="_blank" rel="noopener noreferrer">{phoneLabel}<ArrowIcon /></a> : <button type="button" onClick={() => { setRequest(''); dialog.current?.showModal(); }}>Canal em confirmação<ArrowIcon /></button>}</div>
        </fieldset>
      </form>
    </div>
    <dialog ref={dialog} className="contact-dialog" aria-labelledby="evaluation-dialog-title">
      <form method="dialog"><button className="dialog-close" aria-label="Fechar aviso">×</button></form>
      <p className="eyebrow">ORAL FACE ODONTOLOGIA</p>
      <h2 id="evaluation-dialog-title">Contato indisponível</h2>
      <p>Não foi possível abrir o WhatsApp neste momento. Seus dados não foram enviados.</p>
      {request && <><p>Você pode copiar sua solicitação para usar quando o contato da clínica estiver disponível.</p><button type="button" className="button button-primary" onClick={copyRequest}>{copied ? 'Solicitação copiada' : 'Copiar solicitação'}<ArrowIcon /></button></>}
    </dialog>
  </>;
}
