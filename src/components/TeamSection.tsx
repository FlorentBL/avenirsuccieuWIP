import { useState, useEffect } from 'react';

interface Candidate {
    id: string;
    name: string;
    age: number | "Manquant";
    profession: string | "Manquant";
    neighborhood: string | "Manquant";
    experience: string | "Manquant";
    bio: string | "Manquant";
    photo?: string;
    objectPosition?: string;
}

const candidates: Candidate[] = [
    {
        id: "alain",
        name: "Alain Douillet",
        age: 65,
        profession: "Ancien exploitant agricole",
        neighborhood: "Le Bégot",
        experience: "19 ans Conseiller Municipal, 18 ans Adjoint, 11 mois Maire",
        bio: "Natif du village et ancien exploitant agricole dans la commune, j'ai exercé 3 mandats d'adjoint, ainsi que 11 mois de maire après la démission de Guillaume Vial. Toujours disponible pour le bien de tous, je suis fier de vivre à Succieu, une commune que je connais très bien.",
        photo: "/photos/Alain Douillet.JPG"
    },
    {
        id: "anne-laure",
        name: "Anne-Laure Barral-Joannes",
        age: 45,
        profession: "Professeur des écoles",
        neighborhood: "Le Grand Verger",
        experience: "Élue depuis 16 ans, dont 3 ans conseillère déléguée et 7 ans adjointe",
        bio: "Originaire de Succieu et profondément attachée à mon village, j'ai choisi d'y vivre avec ma famille. Engagée depuis de nombreuses années au sein du conseil municipal, je souhaite partager avec la nouvelle équipe l'expérience acquise durant ces 3 mandats.",
        photo: "/photos/Barral-Joannes Anne-Laure.jpg"
    },
    {
        id: "arnaud",
        name: "Arnaud Rabatel",
        age: 39,
        profession: "Fonctionnaire d'État",
        neighborhood: "Le Javet / La Mûre",
        experience: "Aucune expérience municipale",
        bio: "Chasseur passionné et amoureux de la nature, je puise mon énergie dans le sport et dans les grands espaces. Attaché à la droiture et à l'engagement, j'aime faire avancer les choses concrètement. J'ai notamment porté deux projets participatifs : la création de l'aire de jeux et la réfection avec balisage du chemin reliant Le Javet au village.",
        photo: "/photos/Arnaud Rabatel.JPG"
    },
    {
        id: "audrey",
        name: "Audrey Grange",
        age: 43,
        profession: "Dessinatrice en maisons individuelles",
        neighborhood: "La Garine",
        experience: "Aucune expérience municipale",
        bio: "Habitante de Succieu depuis 2008, j'y ai construit ma famille. Après avoir été membre du Sou des Écoles pendant 10 ans, je souhaite maintenant m'investir différemment pour ma commune. Pour moi, la vraie démocratie se traduit par le respect des autres et de leurs opinions, c'est pourquoi je suis heureuse de m'engager pour Succieu et d'être à votre écoute.",
        photo: "/photos/Audrey Grange.JPG"
    },
    {
        id: "aurore",
        name: "Aurore Chambert",
        age: 40,
        profession: "Gérante",
        neighborhood: "Le Javet",
        experience: "Aucune expérience municipale",
        bio: "Non originaire de la région, j'ai trouvé dans notre commune un véritable équilibre de vie, grâce à la qualité de son environnement. Engagée dans le milieu associatif depuis des années, cela m'a permis de m'impliquer concrètement dans la vie locale et de créer du lien. Depuis plus d'un an, ma présence aux conseils municipaux a renforcé mon envie de m'y investir davantage. Aujourd'hui, je souhaite m'engager pleinement pour le prochain mandat, avec sérieux et dynamisme, afin de contribuer à préserver notre cadre de vie et à préparer l'avenir de notre commune.",
        photo: "/photos/Aurore Chambert.JPG"
    },
    {
        id: "brigitte",
        name: "Brigitte Gallois",
        age: 48,
        profession: "Cadre RH fonction publique territoriale",
        neighborhood: "Le Grand Verger",
        experience: "11 ans Conseillère Municipale et 1 an Adjoint",
        bio: "Parcourant les chemins du village en courant avec mon chien depuis de nombreuses années, je suis très attachée au caractère rural et tranquille de Succieu. Je souhaite poursuivre mon engagement en menant à bien des projets et actions cohérents avec l'identité de mon village, en prenant en compte l'intérêt de l'ensemble de ses habitants.",
        photo: "/photos/Brigitte Gallois.JPG"
    },
    {
        id: "corinne",
        name: "Corinne Paquier",
        age: 55,
        profession: "Assistante Ressources Humaines",
        neighborhood: "Village",
        experience: "13 ans au Conseil Municipal dont 8 ans en tant que 1ère Adjointe",
        bio: "Manquant",
        photo: "/photos/Corinne Paquier.JPG"
    },
    {
        id: "florence",
        name: "Florence Estellés-Moutot",
        age: 38,
        profession: "Animatrice culturelle",
        neighborhood: "Le gapillon",
        experience: "Conseillère municipale (mandat de 6 ans)",
        bio: "Manquant",
        photo: "/photos/Florent Estelles Moutot.JPG"
    },
    {
        id: "florent",
        name: "Florent Bonnet-Ligeon",
        age: 37,
        profession: "Manager - Secteur Télécom",
        neighborhood: "Le Pré Vert",
        experience: "Aucune expérience municipale",
        bio: "Installé dans notre commune depuis un an, j'ai eu le plaisir de découvrir l'équipe municipale lors d'un pot d'accueil pour les nouveaux arrivants, peu après qu'Alain reprenne le rôle de Maire. Touché par la bienveillance et l'engagement sincère de ces élus pour Succieu, j'ai souhaité leur apporter mon soutien en rejoignant la liste. Mon ambition pour ce mandat est de mettre mon expertise numérique au service de tous, afin de vous accompagner dans la transition digitale et de faciliter notre quotidien.",
        photo: "/photos/Florent Bonnet Ligeon.JPG",
        objectPosition: "50% 15%"
    },
    {
        id: "herve",
        name: "Hervé Casse",
        age: 67,
        profession: "Expert comptable retraité",
        neighborhood: "Village",
        experience: "40 ans de vie associative (culturelle et sociale)",
        bio: "Après 45 ans d'une vie professionnelle et associative assidue, mes différents métiers et activités m'ont permis d'acquérir la rigueur dans les affaires, le sens des responsabilités, tout en maintenant la collégialité dans le fonctionnement et la prise de décision. Présent depuis 32 ans dans la commune de Succieu, récemment à la retraite, il m'est apparu logique de rejoindre la liste 2026, d'accepter d'être en tête de liste, cela afin de mettre mes compétences au service de notre village, avec une volonté de sérieux, de transparence et de convivialité.",
        photo: "/photos/Herve Casse.JPG"
    },
    {
        id: "julien",
        name: "Julien Dufeu",
        age: 38,
        profession: "Technicien de recherche et développement en appareillage haute tension",
        neighborhood: "Fichaillon",
        experience: "Aucune expérience municipale",
        bio: "Installé à Succieu depuis 2015 et père de deux enfants, je suis profondément attaché à la qualité de vie de notre commune. En pratiquant régulièrement la course à pied sur les chemins vallonnés du village, je mesure combien la tranquillité et l'équilibre de Succieu sont précieux. Je m'engage pour préserver cet équilibre aujourd'hui, défendre une gestion mesurée et agir avec bon sens au service des habitants.",
        photo: "/photos/Julien Dufeu.JPG"
    },
    {
        id: "laurie",
        name: "Laurie Poënsin-Caillat",
        age: 32,
        profession: "Facilitatrice clauses sociales",
        neighborhood: "Buffières",
        experience: "Aucune expérience municipale",
        bio: "Nouvelle habitante depuis cet été et jeune maman, j'ai choisi de m'engager afin de contribuer à l'avenir de notre commune et de continuer à offrir un cadre de vie agréable et paisible aux habitants de Succieu, et tout particulièrement aux enfants, qui sont le futur de notre village. Forte de mon expérience professionnelle dans le domaine des politiques publiques, je souhaite mettre mes compétences au service de Succieu et de ses habitants. C'est pour toutes ces raisons que je souhaite m'investir localement pour une commune solidaire, inclusive et attentive à chacun.",
        photo: "/photos/Laurie Poensin Caillat.JPG"
    },
    {
        id: "pierre",
        name: "Pierre Ricca",
        age: "Manquant",
        profession: "Chef de chantier en transfert industriel",
        neighborhood: "Le Pré Vert",
        experience: "Manquant",
        bio: "Lorsque je suis venu à Succieu pour la première fois, j'ai eu le coup de foudre pour ce village. Tranquillité, ruralité et nature sont présents à chaque carrefour. Ma femme ayant participé aux deux derniers mandats, c'est à mon tour de montrer à Succieu et à ses habitants le bonheur que nous avons de vivre ici parmi vous.",
        photo: "/photos/Pierre Ricca.JPG"
    },
    {
        id: "richard",
        name: "Richard Veyet",
        age: 55,
        profession: "Technico-Commercial secteur bâtiment",
        neighborhood: "Buffières",
        experience: "Ancien conseiller municipal (mandat de 6 ans)",
        bio: "Manquant",
        photo: "/photos/Richard Veyet.JPG"
    },
    {
        id: "rolland",
        name: "Rolland Delair",
        age: 73,
        profession: "Retraité Bureau d'études Gaz de France",
        neighborhood: "La Garine",
        experience: "Aucune expérience municipale",
        bio: "Habitant de Succieu depuis 2014 et retraité du secteur de l’énergie, je souhaite mettre mon expérience, mon sens pratique et mon engagement au service de notre commune et de ses habitants.",
        photo: "/photos/Rolland Delair.JPG"
    },
    {
        id: "romain",
        name: "Romain Rudler",
        age: 21,
        profession: "Mécanicien agricole",
        neighborhood: "Les Grailles",
        experience: "Aucune expérience municipale",
        bio: "À 21 ans, je représente la nouvelle génération de Succieu. Mécanicien agricole aux Grailles, je suis attaché aux valeurs rurales de notre village et je souhaite apporter mon énergie et mon regard pratique aux projets de l'équipe. On avance ensemble pour aller plus loin !",
        photo: "/photos/Romain Rudler.JPG"
    },
    {
        id: "sandra",
        name: "Sandra Garnier",
        age: 51,
        profession: "Assistante de Direction",
        neighborhood: "Le Genevay",
        experience: "Aucune expérience municipale",
        bio: "Installée à Succieu depuis 6 ans, mon engagement sera à la hauteur de mes valeurs : je souhaite une commune calme et paisible où il fait bon vivre, des finances mesurées et des projets réalistes, avec une équipe à l'écoute des besoins de ses habitants.",
        photo: "/photos/Sandra Garnier.JPG"
    }
];

function CandidateModal({ candidate, onClose }: { candidate: Candidate; onClose: () => void }) {
    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
        };
        window.addEventListener('keydown', handleEsc);
        document.body.style.overflow = 'hidden';
        return () => {
            window.removeEventListener('keydown', handleEsc);
            document.body.style.overflow = 'auto';
        };
    }, [onClose]);

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                <button className="close-button" onClick={onClose} aria-label="Fermer" type="button">&times;</button>
                <div className="modal-body">
                    <div className="modal-header-info">
                        <div className="modal-avatar">
                            {candidate.photo ? (
                                <img
                                    src={candidate.photo}
                                    alt={candidate.name}
                                    style={candidate.objectPosition ? { objectPosition: candidate.objectPosition } : {}}
                                />
                            ) : (
                                <div className="avatar-placeholder">{candidate.name.split(' ').map(n => n[0]).join('')}</div>
                            )}
                        </div>
                        <div className="modal-title-group">
                            <h2 className="modal-name">{candidate.name}</h2>
                            <div className="modal-stats">
                                {candidate.age !== "Manquant" && <span className="stat-pill">{candidate.age} ans</span>}
                                {candidate.profession !== "Manquant" && <span className="stat-pill">{candidate.profession}</span>}
                                {candidate.neighborhood !== "Manquant" && <span className="stat-pill">Quartier : {candidate.neighborhood}</span>}
                            </div>
                        </div>
                    </div>

                    <div className="modal-details">
                        {candidate.experience !== "Aucune expérience municipale" && candidate.experience !== "Manquant" && (
                            <div className="detail-section">
                                <h4>Expérience</h4>
                                <p>{candidate.experience}</p>
                            </div>
                        )}
                        <div className="detail-section">
                            <h4>Présentation</h4>
                            <p>{candidate.bio}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export function TeamSection() {
    const [selectedCandidate, setSelectedCandidate] = useState<Candidate | null>(null);

    return (
        <section className="team-section" id="equipe">
            <h3>Des habitants engagés pour l'avenir de Succieu.</h3>
            <p className="team-intro">Cliquez sur un nom pour découvrir nos portraits.</p>

            <div className="team-grid">
                {candidates.map((candidate) => (
                    <button
                        key={candidate.id}
                        className="team-member"
                        onClick={() => setSelectedCandidate(candidate)}
                        type="button"
                    >
                        <div className="member-avatar">
                            {candidate.photo ? (
                                <img
                                    src={candidate.photo}
                                    alt={candidate.name}
                                    style={candidate.objectPosition ? { objectPosition: candidate.objectPosition } : {}}
                                />
                            ) : (
                                <div className="member-avatar-placeholder">
                                    {candidate.name.split(' ').map(n => n[0]).join('')}
                                </div>
                            )}
                        </div>
                        <span className="member-name">{candidate.name}</span>
                    </button>
                ))}
            </div>

            {selectedCandidate && (
                <CandidateModal
                    candidate={selectedCandidate}
                    onClose={() => setSelectedCandidate(null)}
                />
            )}
        </section>
    );
}
