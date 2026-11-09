const socialLinks = [
    ['Instagram', 'https://www.instagram.com/santisketcha_studio/', 'ig'],
    ['LinkedIn', 'https://www.linkedin.com/in/david-santiago-amaya-reyes/', 'in'],
    ['Behance', 'https://www.behance.net/davidsamayar1', 'B']
];

export default function SocialLinks() {
    return <nav className="botas-socials" aria-label="Redes y portafolios">
        {socialLinks.map(([label, href, mark]) => <a key={label} href={href} target="_blank" rel="noopener noreferrer"><span aria-hidden="true">{mark}</span>{label}</a>)}
    </nav>;
}
