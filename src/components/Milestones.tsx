interface Milestone {
    date: string;
    title: string;
    status: 'completed' | 'current' | 'upcoming';
    description?: string;
}

const milestones: Milestone[] = [
    {
        date: 'Février',
        title: 'Mise en ligne de notre espace d’information',
        status: 'completed',
        description: 'Un lieu simple et accessible pour suivre notre démarche et nos engagements.'
    },
    {
        date: 'À partir du 3 mars',
        title: 'Présentation de notre équipe',
        status: 'upcoming'
    },
    {
        date: '7 mars 2026',
        title: 'Temps d’échange convivial.',
        status: 'upcoming',
        description: 'Discussion ouverte autour d\'un café.'
    },
    {
        date: 'À partir du 8 mars 2026',
        title: 'Suivi et enrichissement du projet.',
        status: 'upcoming'
    }
];

export function Milestones() {
    return (
        <section className="milestones-section">
            <h3>Notre démarche pas à pas</h3>
            <div className="milestones-container">
                {milestones.map((ms, index) => (
                    <div key={index} className={`milestone-card ${ms.status}`}>
                        <div className="milestone-dot"></div>
                        <div className="milestone-content">
                            <span className="milestone-date">{ms.date}</span>
                            <h4 className="milestone-title">{ms.title}</h4>
                            {ms.description && <p className="milestone-desc">{ms.description}</p>}
                        </div>
                        {ms.status === 'completed' && <span className="status-badge">Réalisé</span>}
                        {ms.status === 'upcoming' && <span className="status-badge">À venir</span>}
                    </div>
                ))}
            </div>
        </section>
    );
}
