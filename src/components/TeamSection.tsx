import { useState, useEffect } from 'react';

interface Candidate {
    id: string;
    name: string;
    age?: number;
    profession: string;
    experience?: string;
    bio: string;
    photo?: string;
}

const candidates: Candidate[] = [
    {
        id: "florent",
        name: "Florent Bonnet-Ligeon",
        age: 42,
        profession: "Cadre dirigeant indépendant",
        experience: "Conseiller municipal sortant",
        bio: "Fort d'une expérience de gestion et d'un engagement constant pour Succieu.",
        photo: "/photos/Florent Bonnet Ligeon.JPG"
    },
    {
        id: "arnaud",
        name: "Arnaud Rabatel",
        age: 46,
        profession: "Ingénieur de production",
        experience: "Engagement associatif local",
        bio: "Passionné par le développement durable et la vie villageoise.",
        photo: "/photos/Arnaud Rabatel.JPG"
    },
    {
        id: "alain",
        name: "Alain Douillet",
        age: 63,
        profession: "Retraité industriel",
        bio: "Souhaite mettre son expérience au service de la collectivité pour les projets techniques.",
        photo: "/photos/Alain Douillet.JPG"
    },
    {
        id: "aurore",
        name: "Aurore Chambert",
        age: 39,
        profession: "Mère au foyer",
        bio: "Impliquée dans la vie scolaire et soucieuse de l'avenir de nos enfants à Succieu.",
        photo: "/photos/Aurore Chambert.JPG"
    },
    {
        id: "herve",
        name: "Hervé Casse",
        age: 58,
        profession: "Technicien",
        bio: "Fervent défenseur de l'environnement rural et de la tranquillité du village.",
        photo: "/photos/Herve Casse.JPG"
    },
    {
        id: "audrey",
        name: "Audrey Grange",
        age: 44,
        profession: "Cadre de santé",
        bio: "Engagée pour le bien-être social et le renforcement des liens intergénérationnels.",
        photo: "/photos/Audrey Grange.JPG"
    },
    {
        id: "laurie",
        name: "Laurie Poënsin-Caillat",
        age: 35,
        profession: "Enseignante",
        bio: "À l'écoute des besoins éducatifs, culturels et de l'épanouissement des jeunes.",
        photo: "/photos/Laurie Poensin Caillat.JPG"
    },
    {
        id: "romain",
        name: "Romain Rudler",
        age: 38,
        profession: "Artisan",
        bio: "Souhaite soutenir l'artisanat local et le dynamisme économique de la commune.",
        photo: "/photos/Romain Rudler.JPG"
    },
    {
        id: "anne-laure",
        name: "Anne-Laure Barral-Joannes",
        age: 41,
        profession: "Responsable ressources humaines",
        bio: "Experte en dialogue et médiation, pour une mairie ouverte à tous.",
        photo: "/photos/Barral-Joannes Anne-Laure.jpg"
    },
    {
        id: "richard",
        name: "Richard Veyet",
        age: 55,
        profession: "Agriculteur",
        bio: "Attaché à la préservation des terres agricoles et du patrimoine rural.",
        photo: "/photos/Richard Veyet.JPG"
    },
    {
        id: "sandra",
        name: "Sandra Garnier",
        age: 44,
        profession: "Gestionnaire",
        bio: "Rigoureuse dans le suivi administratif et financier des dossiers communaux.",
        photo: "/photos/Sandra Garnier.JPG"
    },
    {
        id: "rolland",
        name: "Rolland Delair",
        age: 70,
        profession: "Retraité technique",
        bio: "Mémoire du village et membre actif du tissu associatif de Succieu.",
        photo: "/photos/Rolland Delair.JPG"
    },
    {
        id: "brigitte",
        name: "Brigitte Gallois",
        age: 62,
        profession: "Secrétaire",
        bio: "Sens du service public et disponibilité pour l'accueil des habitants.",
        photo: "/photos/Brigitte Gallois.JPG"
    },
    {
        id: "pierre",
        name: "Pierre Ricca",
        age: 52,
        profession: "Cadre technique",
        bio: "Soucieux de la maintenance et du développement des infrastructures du village.",
        photo: "/photos/Pierre Ricca.JPG"
    },
    {
        id: "corinne",
        name: "Corinne Paquier",
        age: 57,
        profession: "Infirmière",
        bio: "Le soin des autres au cœur de son engagement municipal.",
        photo: "/photos/Corinne Paquier.JPG"
    },
    {
        id: "florence",
        name: "Florence Estellés-Moutot",
        age: 48,
        profession: "Conseillère financière",
        bio: "Orientée vers une gestion budgétaire saine et transparente pour la commune.",
        photo: "/photos/Florent Estelles Moutot.JPG"
    },
    {
        id: "julien",
        name: "Julien Dufeu",
        age: 33,
        profession: "Technicien supérieur",
        bio: "Une vision jeune et technique pour moderniser nos services communaux.",
        photo: "/photos/Julien Dufeu.JPG"
    }
];

function CandidateModal({ candidate, onClose }: { candidate: Candidate; onClose: () => void }) {
    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
        };
        window.addEventListener('keydown', handleEsc);
        // Prevent scroll when modal is open
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
                                <img src={candidate.photo} alt={candidate.name} />
                            ) : (
                                <div className="avatar-placeholder">{candidate.name.split(' ').map(n => n[0]).join('')}</div>
                            )}
                        </div>
                        <div className="modal-title-group">
                            <h2 className="modal-name">{candidate.name}</h2>
                            <div className="modal-stats">
                                {candidate.age && <span className="stat-pill">{candidate.age} ans</span>}
                                <span className="stat-pill">{candidate.profession}</span>
                            </div>
                        </div>
                    </div>

                    <div className="modal-details">
                        {candidate.experience && (
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
        <section className="team-section">
            <h3>Une équipe investie, présente et à l'écoute</h3>
            <p className="team-intro">Des habitants engagés pour l'avenir de Succieu.</p>

            <div className="team-grid">
                {candidates.map((candidate) => (
                    <button
                        key={candidate.id}
                        className={`team-member ${candidate.id === "florent" ? "lead" : ""}`}
                        onClick={() => setSelectedCandidate(candidate)}
                        type="button"
                    >
                        <span className="member-name">{candidate.name}</span>
                    </button>
                ))}
            </div>

            <p className="team-footer">Des habitants liés par l'envie d'agir pour Succieu</p>

            {selectedCandidate && (
                <CandidateModal
                    candidate={selectedCandidate}
                    onClose={() => setSelectedCandidate(null)}
                />
            )}
        </section>
    );
}
