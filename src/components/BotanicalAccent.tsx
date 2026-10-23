export function BotanicalAccent({ className = '' }: { className?: string }) {
  return <svg className={`botanical-accent ${className}`} viewBox="0 0 320 440" fill="none" aria-hidden="true">
    <path d="M-12 450C70 310 101 149 281-12M47 340c-1-110-12-194-70-275M90 242c65-15 113-69 171-109M117 187C91 106 107 61 141 6" stroke="currentColor" strokeWidth="1.3"/>
    <g fill="currentColor">
      <path d="M51 335C-12 328-20 270-31 217c57 27 82 64 82 118Z"/><path d="M74 281c1-67-22-111-62-139-1 66 16 109 62 139Z"/>
      <path d="M102 215c-1-62-6-103 26-147 20 62 9 102-26 147Z"/><path d="M144 149c-2-64 23-96 65-124-10 61-25 96-65 124Z"/>
      <path d="M183 102c26-2 62-28 78-69-42 7-70 27-78 69Z"/><path d="M88 247c54 3 92-20 113-68-53 11-87 24-113 68Z"/>
      <path d="M56 321c51 3 98-13 120-55-53 0-91 12-120 55Z"/><path d="M152 185c49 0 85-24 108-66-48 4-84 24-108 66Z"/>
    </g>
  </svg>;
}
