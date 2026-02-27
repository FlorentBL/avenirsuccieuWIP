

interface ThemeItem {
    title: string;
    subtitle?: string;
    points: string[];
}

const themes: ThemeItem[] = [
    {
        title: "Des décisions responsables et transparentes",
        subtitle: "Gérer une commune, c'est avant tout anticiper et protéger son équilibre financier.",
        points: [
            "Planifier les investissements de réfection de voirie et réaliser des aménagements de sécurité routière.",
            "Sécuriser les trajets des collégiens/lycéens en renforçant l'éclairage public.",
            "Respecter nos obligations communales : extension du cimetière, P.L.U, évolution des charges du personnel.",
            "Économiser sur les indemnités des élus pour préserver les finances communales.",
            "Aménager le parking de la salle des fêtes : drainage de l'eau stagnante.",
            "Entretenir nos chemins de randonnée et développer la signalétique.",
            "Remplacer l'éclairage halogène par des LED au stade.",
            "Poursuivre la réflexion sur les locaux (stockage, vestiaires, terrain...)."
        ]
    },
    {
        title: "Une équipe toujours à l'écoute et ouverte au dialogue",
        subtitle: "Nous voulons renforcer les échanges avec les habitants et favoriser une participation organisée et constructive.",
        points: [
            "Poursuivre et faire évoluer le budget participatif.",
            "Maintenir le dialogue récemment restauré avec l'équipe éducative.",
            "Proposer un conseil citoyen.",
            "Soutenir toutes nos associations.",
            "Vous consulter pour les projets qui engagent la commune."
        ]
    },
    {
        title: "Un village qui crée du lien",
        subtitle: "Au-delà de la gestion, une commune vit par les moments partagés.",
        points: [
            "Initiatives de mise en relation entre habitants : covoiturage, entraide...",
            "Actions culturelles : un cinéma d'été, une boîte à livres...",
            "Un «marché des enfants» pour donner une seconde vie aux jouets.",
            "La création d'un terrain de pétanque au cœur du village.",
            "Des ateliers d'aide au numérique favorisant l'entraide entre générations.",
            "Des moments conviviaux (repas partagés, animations).",
            "Un projet de diversification du marché hebdomadaire.",
            "Des animations nature pour découvrir notre environnement.",
            "La poursuite du concours du fleurissement."
        ]
    },
    {
        title: "Préserver l'équilibre et l'identité de Succieu",
        subtitle: "Succieu est un village rural auquel nous sommes attachés. Nous voulons préserver son cadre de vie, sa tranquillité et son équilibre.",
        points: [
            "Évoluer avec mesure, sans transformation brutale.",
            "Décider avec bon sens, dans l'intérêt collectif.",
            "Construire l'avenir sans perdre notre identité."
        ]
    }
];

export function ThematicSection() {
    return (
        <section className="thematic-section">
            <div className="themes-grid">
                {themes.map((theme, idx) => (
                    <div key={idx} className="theme-card">
                        <h3 className="theme-title">{theme.title}</h3>
                        {theme.subtitle && <p className="theme-subtitle">{theme.subtitle}</p>}
                        <ul className="theme-points">
                            {theme.points.map((point, pIdx) => (
                                <li key={pIdx}>{point}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
            <div className="quote-banner">
                <p className="quote">"Gérer, c'est prévoir. Et prévoir, c'est protéger l'avenir."</p>
                <p className="sub-quote">Peu de dépenses, beaucoup d'humain.</p>
            </div>
        </section>
    );
}
