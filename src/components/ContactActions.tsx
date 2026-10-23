'use client';

import { useRef } from 'react';
import content from '@/design-system/site-content.json';
import { ArrowIcon } from './ArrowIcon';
import { BrandIcon } from './BrandIcon';

export function ContactActions() {
  const dialog = useRef<HTMLDialogElement>(null);
  const phone = (content.brand as { phoneE164: string | null }).phoneE164;
  const whatsappUrl = phone ? `https://wa.me/${phone.replace(/\D/g, '')}?text=${encodeURIComponent('Olá! Gostaria de agendar uma avaliação na Oral Face Odontologia.')}` : null;
  return <>
    <div className="contact-actions">
      {whatsappUrl ? <a className="button button-primary" href={whatsappUrl} target="_blank" rel="noopener noreferrer"><BrandIcon name="whatsapp" />Agendar pelo WhatsApp<ArrowIcon /></a> : <button className="button button-primary" type="button" onClick={() => dialog.current?.showModal()}><BrandIcon name="whatsapp" />Agendar pelo WhatsApp<ArrowIcon /></button>}
      <button className="button button-outline" type="button" onClick={() => dialog.current?.showModal()}>Outras formas de contato<ArrowIcon /></button>
    </div>
    <dialog ref={dialog} className="contact-dialog" aria-labelledby="contact-dialog-title">
      <form method="dialog"><button className="dialog-close" aria-label="Fechar informações de contato">×</button></form>
      <p className="eyebrow">ORAL FACE ODONTOLOGIA</p>
      <h2 id="contact-dialog-title">Vamos cuidar do seu sorriso?</h2>
      <p>Os canais de agendamento estão em confirmação nesta prévia. Assim que os dados forem validados, você poderá conversar diretamente com a clínica por aqui.</p>
      <p className="dialog-location"><BrandIcon name="pin" />{content.brand.location}</p>
      <form method="dialog"><button className="button button-primary">Entendi<ArrowIcon /></button></form>
    </dialog>
  </>;
}
