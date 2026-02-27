

const candidates = [
    "Arnaud Rabatel", "Alain Douillet", "Aurore Chambert", "Hervé Casse",
    "Audrey Grange", "Florent Bonnet-Ligeon", "Laurie Poënsin-Caillat",
    "Romain Rudler", "Anne-Laure Barral-Joannes", "Richard Veyet",
    "Sandra Garnier", "Rolland Delair", "Brigitte Gallois", "Pierre Ricca",
    "Corinne Paquier", "Florence Estellés-Moutot", "Julien Dufeu"
];

export function TeamSection() {
    return (
        <section className="team-section">
            <h3>Une équipe investie, présente et à l'écoute</h3>
            <p className="team-intro">Des habitants engagés pour l'avenir de Succieu.</p>

            <div className="team-grid">
                {candidates.map((name, idx) => (
                    <div key={idx} className={`team-member ${name === "Florent Bonnet-Ligeon" ? "lead" : ""}`}>
                        <span className="member-name">{name}</span>
                    </div>
                ))}
            </div>

            <p className="team-footer">Des habitants liés par l'envie d'agir pour Succieu</p>
        </section>
    );
}
