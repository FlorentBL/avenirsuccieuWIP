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
        age: "Manquant",
        profession: "Manquant",
        neighborhood: "Le Bégot",
        experience: "19 ans Conseiller Municipal, 18 ans Adjoint",
        bio: "Manquant",
        photo: "/photos/Alain Douillet.JPG"
    },
    {
        id: "anne-laure",
        name: "Anne-Laure Barral-Joannes",
        age: 45,
        profession: "Professeur des écoles",
        neighborhood: "Le Grand Verger",
        experience: "Élue depuis 16 ans dont 6 ans en tant qu'adjointe",
        bio: "Manquant",
        photo: "/photos/Barral-Joannes Anne-Laure.jpg"
    },
    {
        id: "arnaud",
        name: "Arnaud Rabatel",
        age: 39,
        profession: "Fonctionnaire d'État",
        neighborhood: "Le Javet / La Mûre",
        experience: "Aucune expérience municipale",
        bio: "Manquant",
        photo: "/photos/Arnaud Rabatel.JPG"
    },
    {
        id: "audrey",
        name: "Audrey Grange",
        age: 43,
        profession: "Dessinatrice en maisons individuelles",
        neighborhood: "La Garine",
        experience: "Aucune expérience municipale",
        bio: "Manquant",
        photo: "/photos/Audrey Grange.JPG"
    },
    {
        id: "aurore",
        name: "Aurore Chambert",
        age: 40,
        profession: "Gérante",
        neighborhood: "Le Javet",
        experience: "Aucune expérience municipale",
        bio: "Manquant",
        photo: "/photos/Aurore Chambert.JPG"
    },
    {
        id: "brigitte",
        name: "Brigitte Gallois",
        age: 48,
        profession: "Cadre RH fonction publique territoriale",
        neighborhood: "Le Grand Verger",
        experience: "11 ans Conseillère Municipale et 1 an Adjoint",
        bio: "Manquant",
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
        bio: "Manquant",
        photo: "/photos/Herve Casse.JPG"
    },
    {
        id: "julien",
        name: "Julien Dufeu",
        age: 38,
        profession: "Technicien R&D",
        neighborhood: "Fichaillon",
        experience: "Aucune expérience municipale",
        bio: "Manquant",
        photo: "/photos/Julien Dufeu.JPG"
    },
    {
        id: "laurie",
        name: "Laurie Poënsin-Caillat",
        age: 32,
        profession: "Facilitatrice clauses sociales",
        neighborhood: "Buffières",
        experience: "Aucune expérience municipale",
        bio: "Manquant",
        photo: "/photos/Laurie Poensin Caillat.JPG"
    },
    {
        id: "pierre",
        name: "Pierre Ricca",
        age: "Manquant",
        profession: "Manquant",
        neighborhood: "Le Pré Vert",
        experience: "Manquant",
        bio: "Manquant",
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
        bio: "Manquant",
        photo: "/photos/Rolland Delair.JPG"
    },
    {
        id: "romain",
        name: "Romain Rudler",
        age: 21,
        profession: "Mécanicien agricole",
        neighborhood: "Les Grailles",
        experience: "Aucune expérience municipale",
        bio: "Manquant",
        photo: "/photos/Romain Rudler.JPG"
    },
    {
        id: "sandra",
        name: "Sandra Garnier",
        age: 51,
        profession: "Assistante de Direction",
        neighborhood: "Le Genevay",
        experience: "Aucune expérience municipale",
        bio: "Manquant",
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
                        <div className="detail-section">
                            <h4>Expérience</h4>
                            <p>{candidate.experience}</p>
                        </div>
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
        <section className="team-section">
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
