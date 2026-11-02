const links = [
    { label: 'Instagram', href: 'https://www.instagram.com/santisketcha_studio/', type: 'instagram' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/david-santiago-amaya-reyes/', type: 'linkedin' },
    { label: 'Behance', href: 'https://www.behance.net/davidsamayar1', type: 'behance' }
];

function SocialIcon({ type }) {
    if (type === 'instagram') return <svg aria-hidden="true" viewBox="0 0 24 24" className="social-icon" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="3.2" y="3.2" width="17.6" height="17.6" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.7" cy="6.6" r=".8" fill="currentColor" stroke="none" /></svg>;
    if (type === 'linkedin') return <svg aria-hidden="true" viewBox="0 0 24 24" className="social-icon" fill="currentColor"><path d="M5.2 8.4a2.05 2.05 0 1 0 0-4.1 2.05 2.05 0 0 0 0 4.1ZM3.45 9.9h3.5v10.65h-3.5V9.9Zm5.7 0h3.35v1.45h.05c.47-.89 1.61-1.83 3.31-1.83 3.54 0 4.2 2.33 4.2 5.36v5.67h-3.5v-5.02c0-1.2-.02-2.75-1.68-2.75-1.69 0-1.95 1.31-1.95 2.66v5.11h-3.5V9.9Z" /></svg>;
    return <svg aria-hidden="true" viewBox="0 0 24 24" className="social-icon" fill="currentColor"><path d="M3 5.2h11.8c3 0 4.8 1.5 4.8 3.8 0 1.5-.8 2.6-2.2 3.2 2 .5 3.2 1.8 3.2 3.7 0 2.8-2.2 4.4-5.6 4.4H3V5.2Zm4 3v3h7.2c1 0 1.6-.5 1.6-1.5 0-1-.6-1.5-1.6-1.5H7Zm0 6v3h7.8c1.2 0 1.9-.5 1.9-1.5s-.7-1.5-1.9-1.5H7Z" /></svg>;
}

export default function SocialLinks({ className = 'social-actions' }) {
    return <nav className={className} aria-label="Redes y portafolios">
        {links.map(({ label, href, type }) => <a className={`social-button ${type}-button`} href={href} key={type} target="_blank" rel="noopener noreferrer"><SocialIcon type={type} />{label}</a>)}
    </nav>;
}
