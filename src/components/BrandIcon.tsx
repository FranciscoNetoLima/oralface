import type { SVGProps } from 'react';

export type BrandIconName = 'diamond' | 'shield' | 'people' | 'tooth' | 'aligner' | 'smile' | 'flower' | 'gear' | 'pin' | 'sofa' | 'heart' | 'calendar' | 'whatsapp';

export function BrandIcon({ name, ...props }: SVGProps<SVGSVGElement> & { name: BrandIconName }) {
  const drawings = {
    diamond: <><path d="m3 8 4-5h10l4 5-9 13L3 8Z"/><path d="M3 8h18M7 3l5 18 5-18M7 8l5-5 5 5"/></>,
    shield: <><path d="M12 2 3.5 5.5v6c0 5.5 8.5 9.5 8.5 9.5s8.5-4 8.5-9.5v-6L12 2Z"/><path d="m8.5 11.5 2.3 2.3 4.7-5"/></>,
    people: <><circle cx="12" cy="6" r="3"/><path d="M6 21v-3a6 6 0 0 1 12 0v3H6ZM4.5 9a2.5 2.5 0 1 1 0-5M19.5 9a2.5 2.5 0 1 0 0-5M4 12a4 4 0 0 0-3 4v3h2m17 0h3v-3a4 4 0 0 0-3-4"/></>,
    tooth: <><path d="M12 5c-4-4-9-2-9 3 0 4 3 13 5.5 13 1.5 0 .5-7 3.5-7s2 7 3.5 7C18 21 21 12 21 8c0-5-5-7-9-3Z"/><path d="M8 6c1.5.2 3 1.4 4 2"/></>,
    aligner: <><path d="M5 4c-4 1-3 7-1 10l2 6c1 3 3 1 3-2v-4m10-10c4 1 3 7 1 10l-2 6c-1 3-3 1-3-2v-4"/><path d="M4 8c5 4 11 4 16 0M6 7v5m4-3v4m4-4v4m4-6v5"/></>,
    smile: <><path d="M3 7c6-4 12-4 18 0-1 7-5 12-9 12S4 14 3 7Z"/><path d="M4 8c4 5 12 5 16 0M8 6v6m4-7v8m4-7v6"/></>,
    flower: <><path d="M12 4c4-6 8 1 5 4 7 0 6 8 1 8 2 6-6 8-8 3-5 4-10-3-5-6-6-4-1-10 4-7 0-5 6-5 6-1"/><circle cx="12" cy="12" r="3"/></>,
    gear: <><path d="m9 3 1-2h4l1 2 3 1 2 1-1 3 2 3v3l-2 2 1 3-3 2-3-1-2 2-3-1-1-3-3-1-1-3 2-2-1-3 2-2 3 1Z" transform="translate(1 1) scale(.9)"/><circle cx="12" cy="12" r="4"/></>,
    pin: <><path d="M20 9c0 6-8 13-8 13S4 15 4 9a8 8 0 1 1 16 0Z"/><circle cx="12" cy="9" r="3"/></>,
    sofa: <><path d="M5 10V6a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v4M5 11c-5-3-5 6-2 6h18c3 0 3-9-2-6v3H5v-3ZM4 17v4m16-4v4"/></>,
    heart: <><path d="m12 21-8-8C-3 6 6-2 12 5c6-7 15 1 8 8l-8 8Z"/></>,
    calendar: <><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M7 2v6m10-6v6M3 11h18M7 15h3m4 0h3m-10 3h3"/></>,
    whatsapp: <><path d="M21 11.5A9 9 0 0 1 7.5 19L2 21l1.6-5.2A9 9 0 1 1 21 11.5Z"/><path d="M8 6c-3 4 5 12 8 9l-2-2-2 1c-2-1-3-2-3-3l1-2-2-3Z"/></>
  };
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>{drawings[name]}</svg>;
}
