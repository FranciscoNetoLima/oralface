'use client';

import Image from 'next/image';
import { useState } from 'react';
import { ArrowIcon } from './ArrowIcon';
import { BrandIcon } from './BrandIcon';

const links = [
  { label: 'Sobre', href: '#sobre' },
  { label: 'Tratamentos', href: '#tratamentos' },
  { label: 'Dra. Tallita', href: '#dra-tallita' },
  { label: 'Contato', href: '#contato' }
];

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="container header-inner">
        <a href="#inicio" className="brand-link" aria-label="Oral Face Odontologia — voltar ao início" onClick={() => setMenuOpen(false)}>
          <Image src="/brand/logo-oralface-horizontal.png" width={188} height={63} alt="Oral Face Odontologia" priority />
        </a>
        <nav aria-label="Navegação principal" className={`main-nav ${menuOpen ? 'is-open' : ''}`} id="main-menu">
          {links.map((link) => <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)}>{link.label}</a>)}
          <a className="mobile-nav-cta" href="#contato" onClick={() => setMenuOpen(false)}>Agendar consulta <ArrowIcon /></a>
        </nav>
        <a className="button button-primary header-cta" href="#contato"><BrandIcon name="calendar" />Agendar consulta <ArrowIcon /></a>
        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-controls="main-menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span /><span /><span />
        </button>
      </div>
    </header>
  );
}
